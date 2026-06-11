import React from "react";
console.log(React);
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Authendication from './container/Authendication'
import { Route, Routes } from 'react-router-dom'
import Contact from "./container/Contact";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/authendication"  element={<Authendication/>}/>
        <Route path="/contact"  element={<Contact />}/>
      </Routes>
      <Footer/>
    </>

  )
}

export default App
