import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <Router>
      <NavBar total={total}/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/cart" element={<Cart setTotal={setTotal}/>} />
        <Route path="/pizza/:id" Component={Pizza} />
              
      </Routes>
      <Footer />
    </Router>
  );
}

export default App