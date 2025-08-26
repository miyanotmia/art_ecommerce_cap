import {Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx"
import { useState } from "react";
function App() {
  const [cart,setCart]= useState([]);
  const addToCart=(art) => {
    setCart((prevCart) => {
      const existing= prevCart.find((item) => item.id === art.id);
  
  
   if (existing){
      return prevCart.map((item) =>
        item.id === art.id ? {...item, qty: item.qty +1} : item);
    }
    return [...prevCart, {...art, qty:1}];
  });
};
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item)=>
    item.id === id ? {...item, qty: item.qty + 1} : item 
  )
);
  };
   
  const decreaseQty = (id) => {
    setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id ? {...item,qty: Math.max(item.qty - 1, 0) }: item).filter(item=> item.qty > 0));
  };

  return (
<Routes>
  <Route path="/" element={<Landing/>} />
  <Route path="/Home" element={<Home addToCart={addToCart}  cart={cart}/>} />
  <Route path="/Checkout" element={<Checkout 
  cart={cart} 
  increaseQty={increaseQty}
  decreaseQty={decreaseQty} />}/>
  
</Routes>
  );
}

export default App;