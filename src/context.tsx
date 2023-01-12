import React, { createContext, 
    FunctionComponent, 
    ReactNode, 
    useContext, 
    useState, 
    Dispatch, 
    SetStateAction 
} from 'react'
import productsData from './data.json';




interface MyContext {
    isMenuClicked: boolean;
    setIsMenuClicked:Dispatch<SetStateAction<boolean>>;
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

const AppContext = createContext<MyContext>({
    isMenuClicked:true,
    setIsMenuClicked:() => (!Boolean),
    productsData:productsData
    
});


interface Props {
    children: ReactNode
}


export const AppProvider :FunctionComponent<Props> = ({children}) => {
    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);


    return <AppContext.Provider value={{isMenuClicked, setIsMenuClicked, productsData}}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }

