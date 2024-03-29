import { BrowserRouter as Router,Routes,Route,useLocation} from "react-router-dom"
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
import LogoutModal from "./components/LogoutModal/LogoutModal";

function App() {
  const {isShopCartOpen,isLogoutModal} = useGlobalContext()
  const location = useLocation();

  return (
    <>
      {(location.pathname !== '/' && location.pathname !== '/signup') && (
        <>
          <ScrollToTop/>
          <Navbar/>
          {isShopCartOpen && <CheckoutModal/>}
          {isLogoutModal && <LogoutModal/>}
        </>
      )}
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="headphones" element={<ProductsPage productType={'headphones'} />} />
          <Route path="speakers" element={<ProductsPage productType={"speakers"} />} />
          <Route path="earphones" element={<ProductsPage productType={"earphones"} />} />
          <Route path=":categoryName/:ProductName" element={<EachProductPage />} />
          <Route path="checkoutform" element={<CheckoutForm />} />
        </Routes>
    </>
  )
}

export default App
