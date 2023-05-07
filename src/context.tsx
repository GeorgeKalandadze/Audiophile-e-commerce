import React, { createContext, 
    FunctionComponent, 
    useContext, 
    useState, 
    Dispatch, 
    SetStateAction, 
    useEffect,
    ChangeEvent,
    useRef
} from 'react'
import { useLocalStorage } from './hooks/UseLocalStorage';
import axiosClient from './axios-client';
import { CartItem, CustomerTypes, MyContext, OrderTypes, Product, Props, ResponseErrorTypes, UserInfo } from './types/types';



const AppContext = createContext<MyContext>({} as MyContext);



export const AppProvider :FunctionComponent<Props> = ({children}) => {
    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
    const [isShopCartOpen, setIsShopCartOpen] = useState<boolean>(false);
    const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
    const [isOpenPurchase, setOpenPurchase] = useState(false)
    const [token, _setToken] = useState<string|null>(localStorage.getItem('ACCESS_TOKEN'));
    const [notification, _setNotification] = useState('');
    const [userInfo, setUserInfo] = useState<UserInfo>({name:"", avatar_image:""});
    const [products, setNewProducts] = useState<Product>([]);
    const [user, setUser] = useState<null | {}>({});
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shoping-carts',[]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [customer,setCustomer] = useState<CustomerTypes>({});
    const [ordersData, setOrdersData] = useState<OrderTypes>({} as OrderTypes)
    const [customerErrors, setCustomerErrors] = useState<ResponseErrorTypes>({});
    const cartIconRef = useRef<HTMLDivElement | HTMLImageElement | null>(null);
    const logoutIconRef = useRef<HTMLDivElement | HTMLImageElement | null>(null);


    //working with authentication authorization token
    const setToken = (token: string) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
        }

    const setNotification:Dispatch<SetStateAction<string>> = (message) => {
        _setNotification(message);

        setTimeout(() => {
            _setNotification('')
        }, 5000)
    }

    //open Logout modal
    const openLogoutModal = () => {
      setIsLogoutModal(isopen => !isopen)
    }

    //open shop cart modal
    const openShopCartModal = () => {
        setIsShopCartOpen(isOpen => !isOpen)
        
    }

    //cart quantity reducer
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    //this function get entire quantity of items
    const getItemQuantity = (id:number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }


    //get all products from server
    useEffect(() => {
      axiosClient.get('/products')
    .then(({data}) => {
      // handle success
    
      setNewProducts(data.data)
      
    })
    .catch((error) => {
      // handle error
      console.error(error);
    });
    },[])


    const addCartItem = (id:number) => {
      axiosClient.post('/cart/add', {
        product_id: id,
        quantity: 1
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    })
    }
  
    const handleDecrement = (cart_id:number) => {
      setCart(cart => 
        cart.map((item) => 
        cart_id === item.id ? {...item, quantity:item.quantity - (item.quantity > 1 ? 1:0)}:item)
        )
        updateCartQuantity(cart_id,"dec")
    }
  
    const handleIncrement= (cart_id:number) => {
      setCart(cart => 
        cart.map((item) => 
        cart_id === item.id ? {...item, quantity:item.quantity + 1}:item)
        )
        updateCartQuantity(cart_id,"inc")
    }
  
    //update cart item quantity
    const updateCartQuantity = (cart_id: number, scope: string) => {
      axiosClient.put(`/cart/update-quantity/${cart_id}/${scope}`)
      .then(response => {
        console.log(response.data);
      })
    }

    //make order
    const makeOrder = () => {
      axiosClient.post('/customers',customer)
    .then(response => {
        if(response.status === 201){
          setCustomerErrors({});
          setOpenPurchase(true)
        }
    })
    .catch((err) => {
      const response = err.response;
      if (response && response.status === 422) {
          setCustomerErrors(response.data.errors)
      } 
    })
    }


    //changehandler for customers data
    const handleCustomersData = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setCustomer((prevObject) => ({ ...prevObject, [name]: value }));
    };

    //get users order
    useEffect(() => {
      axiosClient.get('/orders')
    .then(({data}) => {
  
      setOrdersData(data)
      
    })
    .catch((error) => {
      
    });
    },[])

    return <AppContext.Provider 
    value={{isMenuClicked, 
            setIsMenuClicked, 
            openShopCartModal,
            isShopCartOpen,
            cartItems,
            cartQuantity,
            getItemQuantity,
            setIsShopCartOpen,
            addCartItem,
            handleDecrement,
            handleIncrement,
            user,
            setUser,
            token,
            setToken,
            notification,
            setNotification,
            userInfo,
            setUserInfo,
            openLogoutModal,
            isLogoutModal,
            setIsLogoutModal,
            products,
            makeOrder,
            customerErrors,
            handleCustomersData,
            customer,
            cartIconRef,
            logoutIconRef,
            isOpenPurchase,
            setOpenPurchase,
            ordersData
            }}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }

