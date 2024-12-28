import { Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/SilkSaree";
import Contact from "./pages/BestSelling";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import SilkSaree from "./pages/SilkSaree";
import BestSelling from "./pages/BestSelling";

export default function App() {

  return (
    <div>
      {/* <h1>Hello, world!</h1> */}
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/silksaree' element={<SilkSaree/>}></Route>
        <Route path='/bestselling' element={<BestSelling/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
        {/* <Route path='/cart' element={<Cart/>}></Route> */}
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/place-order' element={<PlaceOrder/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}


