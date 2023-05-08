import { ReactNode, Dispatch, SetStateAction,ChangeEvent } from "react"
    

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
    setIsMenuClicked: Dispatch<SetStateAction<boolean>>;
    setIsShopCartOpen: Dispatch<SetStateAction<boolean>>;
    openShopCartModal: () => void;
    openLogoutModal:() => void;
    isLogoutModal:boolean;
    setIsLogoutModal:Dispatch<SetStateAction<boolean>>;
    handleDecrement: (id: number) => void;
    handleIncrement: (id: number) => void;
    addCartItem: (id: number) => void;
    makeOrder:() => void;
    userInfo:UserInfo;
    setUserInfo:Dispatch<SetStateAction<UserInfo>>
    token: null | string;
    notification: null | string;
    setUser: (arg: null | {}) => void;
    user:null | {}
    setToken: (token: string) => void;
    setNotification: Dispatch<SetStateAction<string>>;
    products:Product;
    customerErrors:ResponseErrorTypes
    handleCustomersData:(event: ChangeEvent<HTMLInputElement>) => void
    customer:CustomerTypes
    cartIconRef:React.MutableRefObject<HTMLDivElement | HTMLImageElement | null>
    logoutIconRef:React.MutableRefObject<HTMLDivElement | HTMLImageElement | null>
    isOpenPurchase:boolean
    setOpenPurchase:Dispatch<SetStateAction<boolean>>
    ordersData:OrderTypes
    cartItems:CartProps[]
    removeAllItems:() => void
  }

  export type Product = {
    id: number;
    name: string;
    slug:string;
    description: string;
    features: string;
    cart_image: string;
    price: number;
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


export type CustomerTypes = {
  name?:string
  email?:string
  phone?:number
  address?:string
  zip_code?:number
  city?:string
  country?:string
  e_money_number?:number
  e_money_pin?:number
  payment_details?:"e-Money" | "e-Money PIN"
}


export interface ResponseErrorTypes {
  [key: string]: string | string[];
}


export interface OrderTypes {
  created_at: string;
  created_by: number;
  id: number;
  items: {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    unit_price: string;
    product:OrderProduct
  }[];
  status: string;
  total_price: string;
  updated_at: string;
  updated_by: number;
}

interface OrderProduct {
  cart_image: string;
  category_id: number;
  created_at: string | null;
  description: string;
  features: string;
  id: number;
  name: string;
  new: number;
  price: string;
  slug: string;
  updated_at: string | null;
}

export interface CartProps {
  id: number
  quantity: number
  product:{
    name:string
    price: number
    cart_image: string
  }
}

