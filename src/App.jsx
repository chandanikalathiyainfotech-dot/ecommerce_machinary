import React from "react";
console.log(React);
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Authendication from './container/Authendication'
import { Route, Routes } from 'react-router-dom'
import Contact from "./container/Contact";
import Home from "./container/Home";
import Aboutus from "./container/Aboutus";
import Blogdetails from "./container/Blogdetails";
import Detailproduct from "./container/Detailproduct";
import Allproductgrid from "./container/Allproductgrid";
import Cart from "./container/Cart";
import HeavyMachinery from "./container/Parts/HeavyMachinery";
import SpareParts from "./container/Parts/SpareParts";
import Demo from "./container/demo";
import Mobilebottomnav from "./components/Mobilebottomnav";
import Wishlist from "./container/Wishlist";
import WishlistDrawer from "./container/WishlistDrawer";
import Checkout from "./container/Checkout";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authendication" element={<Authendication />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/blog/:id" element={<Blogdetails />} />
        <Route path="/product-detail" element={<Detailproduct />} />
        <Route path="/allproduct" element={<Allproductgrid />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/heavy-machinery" element={<HeavyMachinery />} />
        <Route path="/spare-parts" element={<SpareParts />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/wishlistdrawer" element={<WishlistDrawer />} />
         <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/cartdrawer" element={<CaretPosition />} /> */}
        {/* <Route path="/parts/spare-parts" element={<SparParts />} /> */}
      </Routes>
      <Footer />
      <Mobilebottomnav/>
    </>
  )
}

export default App
