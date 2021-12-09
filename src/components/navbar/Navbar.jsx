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
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>FAQ</li>
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
