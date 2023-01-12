import React, { createContext, 
    FunctionComponent, 
    ReactNode, 
    useContext, 
    useState, 
    Dispatch, 
    SetStateAction 
} from 'react'
import data from './data.json';




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
        description:string
    }[]
    
}

const AppContext = createContext<MyContext>({
    isMenuClicked:true,
    setIsMenuClicked:() => (!Boolean),
    productsData:data
    
});


interface Props {
    children: ReactNode
}


export const AppProvider :FunctionComponent<Props> = ({children}) => {
    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
    const [productsData, setProductsData] = useState(data)


    return <AppContext.Provider value={{isMenuClicked, setIsMenuClicked, productsData}}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }

