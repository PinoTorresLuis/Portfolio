import React, { useState } from "react";
import logo from '../../media/logo.png'
import "./navbar.scss";

const Navbar = ({isScrolling}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toTheTop = () => {
    window.scrollTo({top:0, left:0, behavior:"smooth"});
  };

  return (

      <div className="Navbar1">
      <span className="nav-logo"> <img className="img_logo" src= {logo}/></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Proyect</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      </div>

  );
};

export default Navbar;