import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CheckoutModal from "./components/CheckoutModal/CheckoutModal";
import EachProductPage from "./components/EachProductPage/EachProductPage";
import Navbar from "./components/navbar/Navbar"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useGlobalContext } from "./context";
import CheckoutForm from "./pages/CheckoutForm/CheckoutForm";
import HomePage from "./pages/HomePage/HomePage"
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  const {isShopCartOpen} = useGlobalContext()

  
  
 

  return (
    <>
      <Router>
        
      {(window.location.pathname !== '/' && window.location.pathname !== '/signup') && (
          <>
            <ScrollToTop/>
            <Navbar/>
            {isShopCartOpen && <CheckoutModal/>}
          </>
        )}

        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="headphones" element={<ProductsPage productType={'headphones'} />} />
          <Route path="speakers" element={<ProductsPage productType={"speakers"} />} />
          <Route path="earphones" element={<ProductsPage productType={"earphones"} />} />
          <Route path=":ProductName" element={<EachProductPage />} />
          <Route path="checkoutform" element={<CheckoutForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
