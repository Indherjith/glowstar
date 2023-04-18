import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import ProductDetails from "./Pages/ProductDetails";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </div>
  );
}

export default App;
