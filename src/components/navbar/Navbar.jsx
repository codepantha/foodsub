import React from "react";
import "./Navbar.css";
import { Button } from "..";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="foodsub__navbar">
      <div className="foodsub__navbar-logo">
        <img src={logo} />
      </div>
      <div className="foodsub__navbar-navitems">
        <ul className="foodsub__navbar-navitems_links">
          <li><a href="#header" className="link">Home</a></li>
          <li><a href="#about" className="link">About</a></li>
          <li><a href="#services" className="link">Services</a></li>
          <li><a href="#contact" className="link link:hover">Contact</a></li>
          <li><a href="#faq" className="link">FAQ</a></li>
        </ul>
        <div className="foodsub__navbar-navitems_buttons">
          <Button text='Login' bgColor="#fff" color="#ffa927" />
          <Button text='Register' color="#fff" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
