import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Error from "./Component/Error";
import Checkout from "./Component/Checkout";
const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
