import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "..";
import logo from "../../assets/logo.svg";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";

const Menu = () => (
  <>
    <ul className="foodsub__navbar-navitems_links">
      <li>
        <a href="#header" className="link dim">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="link dim">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="link dim">
          Services
        </a>
      </li>
      <li>
        <a href="#contact" className="link link:hover dim">
          Contact
        </a>
      </li>
      <li>
        <a href="#faq" className="link dim">
          FAQ
        </a>
      </li>
    </ul>
    {/* <div className="foodsub__navbar-navitems_buttons">
      <Button text="Login" bgColor="#fff" color="#ffa927" />
      <Button text="Register" color="#fff" />
    </div> */}
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="foodsub__navbar">
      <div className="foodsub__navbar-logo">
        <img src={logo} />
      </div>
      <div className="foodsub__navbar-navitems">
        <Menu />
      </div>
      {toggleMenu ? (
        <RiCloseLine size={20} onClick={() => setToggleMenu(false)} />
      ) : (
        <RiMenu2Line size={20} onClick={() => setToggleMenu(true)} />
      )}

      {toggleMenu && <nav className="nav__menu-container scale-up-hor-center"><Menu /></nav>}
    </nav>
  );
};

export default Navbar;
