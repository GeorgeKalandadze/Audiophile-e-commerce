import React, { createContext, 
    FunctionComponent, 
    ReactNode, 
    useContext, 
    useState, 
    Dispatch, 
    SetStateAction 
} from 'react'
import productsData from './data.json';
import { useLocalStorage } from './hooks/UseLocalStorage';




interface MyContext {
    isMenuClicked: boolean;
    isShopCartOpen: boolean;
    totalPrice: number;
    getItemQuantity: (id: number) => number;
    setIsMenuClicked: Dispatch<SetStateAction<boolean>>;
    setIsShopCartOpen: Dispatch<SetStateAction<boolean>>;
    openShopCartModal: () => void;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    addToCart: (id: number) => void;
    removeAllItems: () => void;
    
    token: null | string;
    notification: null | string;
    setUser: (arg: null | {}) => void;
    user:null | {}
    setToken: (token: string) => void;
    setNotification: Dispatch<SetStateAction<string>>;
    cartItems: CartItem[];
    cartQuantity: number;
    productsData: {
      id: number;
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
      category: string;
      categoryImage: {
        mobile: string;
        tablet: string;
      };
      new: boolean;
      description: string;
      price: number;
      features: string;
      includes: {
        quantity: number;
        item: string;
      }[];
      gallery: {
        first: {
          mobile: string;
          tablet: string;
          desktop: string;
        };
        second: {
          mobile: string;
          tablet: string;
          desktop: string;
        };
        third: {
          mobile: string;
          tablet: string;
          desktop: string;
        };
      };
    }[];
  }

const AppContext = createContext<MyContext>({} as MyContext);

interface Props {
    children: ReactNode
}

type CartItem = {
    id:number
    quantity:number
}


export const AppProvider :FunctionComponent<Props> = ({children}) => {
    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
    const [isShopCartOpen, setIsShopCartOpen] = useState<boolean>(false);
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shoping-carts',[]);
    const [user, setUser] = useState<null | {}>({});
    const [token, _setToken] = useState<string|null>(localStorage.getItem('ACCESS_TOKEN'));
    const [notification, _setNotification] = useState('');
    
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
    const increaseCartQuantity = (id: number) => {
        setCartItems((currentItems) => {
          const itemIndex = currentItems.findIndex((item) => item.id === id);
      
          if (itemIndex === -1) {
            return currentItems;
          } else {
            const updatedItem = { ...currentItems[itemIndex], quantity: currentItems[itemIndex].quantity + 1 };
            return [...currentItems.slice(0, itemIndex), updatedItem, ...currentItems.slice(itemIndex + 1)];
          }
        });
      };
      

      //add to cart function
      const addToCart = (id: number) => {
        setCartItems((currentItems) => {
          const itemIndex = currentItems.findIndex((item) => item.id === id);
      
          if (itemIndex === -1) {
            return [...currentItems, { id, quantity: 1 }];
          } else {
            return currentItems;
          }
        });
      };
      
      
    // decrease cart quantity
    const decreaseCartQuantity = (id:number) => {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.quantity === 1){
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }


   

    // function which calculate total price of cart items
    const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = productsData.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
      },0)



    
    const removeAllItems = () => {
        setCartItems([])
    }




    return <AppContext.Provider 
    value={{isMenuClicked, 
            setIsMenuClicked, 
            productsData,
            openShopCartModal,
            isShopCartOpen,
            increaseCartQuantity,
            cartItems,
            cartQuantity,
            decreaseCartQuantity, 
            getItemQuantity,
            removeAllItems,
            totalPrice,
            setIsShopCartOpen,
            addToCart,
            user,
            setUser,
            token,
            setToken,
            notification,
            setNotification,
            }}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }

