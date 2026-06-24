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
import Mobilebottomnav from "./components/Mobilebottomnav";
import Wishlist from "./container/Wishlist";
import Parts from "./container/Parts";
import WishlistDrawer from "./container/WishlistDrawer";
import Checkout from "./container/Checkout";
import UserProfile from "./container/UserProfile";
import ForgotPassword from "./container/ForgotPassword";
import NewsletterPopup from "./components/NewsletterPopup";

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
        <Route path="/Parts" element={<Parts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/wishlistdrawer" element={<WishlistDrawer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile/*" element={<UserProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
      <Mobilebottomnav />
      <NewsletterPopup />
    </>
  )
}

export default App;
