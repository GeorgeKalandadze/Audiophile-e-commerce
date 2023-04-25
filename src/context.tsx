import React, { createContext, 
    FunctionComponent, 
    useContext, 
    useState, 
    Dispatch, 
    SetStateAction, 
    useEffect
} from 'react'
import productsData from './data.json';
import { useLocalStorage } from './hooks/UseLocalStorage';
import axiosClient from './axios-client';
import { CartItem, MyContext, Product, Props, UserInfo } from './types/types';


const AppContext = createContext<MyContext>({} as MyContext);


export const AppProvider :FunctionComponent<Props> = ({children}) => {
    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
    const [isShopCartOpen, setIsShopCartOpen] = useState<boolean>(false);
    const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
    const [token, _setToken] = useState<string|null>(localStorage.getItem('ACCESS_TOKEN'));
    const [notification, _setNotification] = useState('');
    const [userInfo, setUserInfo] = useState<UserInfo>({name:"", avatar_image:""});
    const [products, setNewProducts] = useState<Product>([]);
    const [user, setUser] = useState<null | {}>({});
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shoping-carts',[]);
    const [cart, setCart] = useState<CartItem[]>([])
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


    //increase cart quantity
    // const increaseCartQuantity = (id: number) => {
    //     setCartItems((currentItems) => {
    //       const itemIndex = currentItems.findIndex((item) => item.id === id);
      
    //       if (itemIndex === -1) {
    //         return currentItems;
    //       } else {
    //         const updatedItem = { ...currentItems[itemIndex], quantity: currentItems[itemIndex].quantity + 1 };
    //         return [...currentItems.slice(0, itemIndex), updatedItem, ...currentItems.slice(itemIndex + 1)];
    //       }
    //     });
    //   };
      

      //add to cart function
      // const addToCart = (id: number) => {
      //   setCartItems((currentItems) => {
      //     const itemIndex = currentItems.findIndex((item) => item.id === id);
      
      //     if (itemIndex === -1) {
      //       return [...currentItems, { id, quantity: 1 }];
      //     } else {
      //       return currentItems;
      //     }
      //   });
      // };
      
      
    // decrease cart quantity
    // const decreaseCartQuantity = (id:number) => {
    //     setCartItems(currentItems => {
    //         if(currentItems.find(item => item.id === id)?.quantity === 1){
    //             return currentItems.filter(item => item.id !== id)
    //         } else {
    //             return currentItems.map(item => {
    //                 if(item.id === id){
    //                     return {...item, quantity: item.quantity - 1}
    //                 } else {
    //                     return item
    //                 }
    //             })
    //         }
    //     })
    // }


   

    // function which calculate total price of cart items
    const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = productsData.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
      },0)



    
    const removeAllItems = () => {
        
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


    return <AppContext.Provider 
    value={{isMenuClicked, 
            setIsMenuClicked, 
            openShopCartModal,
            isShopCartOpen,
            cartItems,
            cartQuantity,
            getItemQuantity,
            removeAllItems,
            totalPrice,
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
            }}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }

