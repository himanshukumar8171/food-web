/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/frontend_assets/logo.png";
import search_icon from "../../assets/frontend_assets/search_icon.png";
import basket_icon from "../../assets/frontend_assets/basket_icon.png";

const Navbar = () => {
  const [menu, setMenu]= useState("home");
  return (
  <>
      <div className="navbar">
        <div className="nav-logo">
          <img className="nav-logo" src={logo} alt="Logo"/>
        </div>
        <div className="items-nav">
          <ul className="nav-item-fet">
            <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>home</li>
            <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"active":""}>contact us</li>
            

          </ul>
        </div>
        <div className="nav-rigth-side">
          
            <img src={basket_icon} alt="Search"/>
            <button className="nav-buttom">Sign Up</button>
            
          
        </div>
      </div>
  
  </>
   
  );
};

export default Navbar;
