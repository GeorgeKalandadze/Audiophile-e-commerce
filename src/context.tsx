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
    isMenuClicked: boolean
    isShopCartOpen: boolean
    totalPrice:number
    getItemQuantity: (id: number) => number
    setIsMenuClicked:Dispatch<SetStateAction<boolean>>;
    setIsShopCartOpen:Dispatch<SetStateAction<boolean>>;
    openShopCartModal:() => void
    increaseCartQuantity:(id:number) => void
    decreaseCartQuantity:(id:number) => void
    addToCart:(id:number) => void
    removeAllItems:() => void
    cartItems:CartItem[]
    cartQuantity:number
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
        }
        new:boolean
        description:string;
        price:number;
        features:string;
        includes:{
            quantity:number;
            item:string;
        }[];
        gallery:{
            first:{
                mobile: string;
                tablet: string;
                desktop: string;
            },
            second:{
                mobile: string;
                tablet: string;
                desktop: string;
            },
            third:{
                mobile: string;
                tablet: string;
                desktop: string;
            }
        }
    }[]
    
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
    

    const openShopCartModal = () => {
        setIsShopCartOpen(isOpen => !isOpen)
        
    }

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (id:number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

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
            addToCart
            }}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }

