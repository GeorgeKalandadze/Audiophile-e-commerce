import { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {


  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/headphones" element={<ProductsPage productType={'headphones'} />}/>
          <Route path="/speakers" element={<ProductsPage productType={"speakers"}/>}/>
          <Route path="/earphones" element={<ProductsPage productType={"earphones"}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
