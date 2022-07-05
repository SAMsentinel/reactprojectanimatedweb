import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import {  Route, Routes } from 'react-router-dom';



const App=()=> {
  return (
    <>

    <Navbar/>
    
    
    <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route path="*" element={<Home/>}/>


      
    
    </Routes>
   
   </>  );
}

export default App;
