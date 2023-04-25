import { ReactNode, Dispatch, SetStateAction, } from "react"
    

export interface Props {
    children: ReactNode
}

export type CartItem = {
    id:number
    quantity:number
}


export interface UserInfo  {
  name:string
  avatar_image:string
}

export interface MyContext {
    isMenuClicked: boolean;
    isShopCartOpen: boolean;
    totalPrice: number;
    getItemQuantity: (id: number) => number;
    setIsMenuClicked: Dispatch<SetStateAction<boolean>>;
    setIsShopCartOpen: Dispatch<SetStateAction<boolean>>;
    openShopCartModal: () => void;
    openLogoutModal:() => void;
    isLogoutModal:boolean;
    setIsLogoutModal:Dispatch<SetStateAction<boolean>>;
    handleDecrement: (id: number) => void;
    handleIncrement: (id: number) => void;
    addCartItem: (id: number) => void;
    removeAllItems: () => void;
    userInfo:UserInfo
    setUserInfo:Dispatch<SetStateAction<UserInfo>>
    token: null | string;
    notification: null | string;
    setUser: (arg: null | {}) => void;
    user:null | {}
    setToken: (token: string) => void;
    setNotification: Dispatch<SetStateAction<string>>;
    cartItems: CartItem[];
    cartQuantity: number;
    products:Product
  }

  export type Product = {
    id: number;
    name: string;
    slug:string;
    description: string;
    features: string;
    cart_image: string;
    price: string;
    new: boolean;
    category: string;
    includes: {
      item: string;
      quantity: number;
    }[];
    product_images: {
      image_path: string;
    }[];
  }[];
