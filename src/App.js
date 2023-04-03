
import { createContext, useState } from 'react';
import './App.css';
import Home from './Component/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Cart from './Component/Cart/Cart';

export const Usercontext= createContext()
function App() {
  const[data,setdata]=useState([])
  const[value,setvalue]=useState([])
  const[obj,setobj]=useState([])
  const[cart,setcart]=useState([])
  return (
  <div>
<Usercontext.Provider value={{data,setdata,value,setvalue,obj,setobj,cart,setcart}}>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/productDetails/:id" element={<ProductDetails/>} />
    <Route path="/Cartitem" element={<Cart/>} />
  </Routes>
  <Footer />
  </BrowserRouter>
</Usercontext.Provider>
  </div>
  );
}

export default App;
