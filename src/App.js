import React, { Component } from "react";
import {BrowserRouter, Link, Route, Routes, NavLink} from 'react-router-dom'
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import './App.css'
import SellCar from "./Components/SellCar";
import BuyCar from "./Components/BuyCar";
import './large.png'
import myImage from './large.png'


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className="header">
          <img src="large.png" alt="car passion"></img>
          <nav className="nav">
            <ul className="links">
              <li> <NavLink to="/">Home </NavLink> </li>
              <li> <NavLink to="/aboutus">About us</NavLink> </li>
              <li> <NavLink to="/contact">Contact us</NavLink> </li>
              <li> <NavLink to="/sell_yourcar">Sell your Car</NavLink> </li>
              <li> <NavLink to="/Buy_Cars">Buy Your Car</NavLink> </li> 
            </ul>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={ <AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sell_yourcar" element={<SellCar/>} />
        <Route path="/Buy_Cars" element={<BuyCar/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
