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
        <Route path="product-detail" element={<Detailproduct />} />
        <Route path="allproduct" element={<Allproductgrid />} />
        {/* <Route path="/parts/spare-parts" element={<SparParts />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
