import { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Earphones from "./pages/Earphones/Earphones";
import Headphones from "./pages/Headphones/Headphones";
import HomePage from "./pages/HomePage/HomePage"
import Speakers from "./pages/Speakers/Speakers";

function App() {


  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/headphones" element={<Headphones/>}/>
          <Route path="/speakers" element={<Speakers/>}/>
          <Route path="/earphones" element={<Earphones/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
