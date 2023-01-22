import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CheckoutModal from "./components/CheckoutModal/CheckoutModal";
import EachProductPage from "./components/EachProductPage/EachProductPage";
import Navbar from "./components/navbar/Navbar"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useGlobalContext } from "./context";
import CheckoutForm from "./pages/CheckoutForm/CheckoutForm";
import HomePage from "./pages/HomePage/HomePage"
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  const {isShopCartOpen} = useGlobalContext()

 

  return (
    <div className="App">
      <Router>
      <ScrollToTop/>
      <Navbar/>
      {isShopCartOpen && <CheckoutModal/>}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/headphones" element={<ProductsPage productType={'headphones'} />}/>
          <Route path="/speakers" element={<ProductsPage productType={"speakers"}/>}/>
          <Route path="/earphones" element={<ProductsPage productType={"earphones"}/>}/>
          <Route path="/:ProductName" element={<EachProductPage/>}/>
          <Route path="/checkoutform" element={<CheckoutForm/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
