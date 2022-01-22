import React from "react";
import "./Footer.css";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";

const Footer = () => {
  return (
    <footer>
     <div className="foodsub__footer bg-black white">
     <div className="foodsub__footer-about">
        <h2>FOOD SUB</h2>
        <p className="pa3 pl0 about">
          A faster and cheaper alternative to cooking for busy Africans
        </p>
        <div className="foodsub__footer-about_icons">
          <img src={ig} style={{marginRight: '10px'}}/>
          <img src={fb} />
        </div>
       
      </div>
      <div className="foodsub__footer-quicklinks">
        <p className="f4">Quicklinks</p>
        <p className="mv3"><a href="#header" className="no-underline white pa dim">Home</a></p>
        <p className="mv3"><a href="#menu" className="no-underline white pa dim">Menu</a></p>
        <p className="mv3"><a href="#services" className="no-underline white pa dim">Services</a></p>
        <p className="mv3"><a href="#about" className="no-underline white pa dim">About</a></p>
        <p className="mv3"><a href="#contact" className="no-underline white pa dim">Contact</a></p>
      </div>
      <div className="foodsub__footer-usefullinks">
        <p className="f4">Useful links</p>
        <p className="mv3"><a href="#" className="no-underline white pa dim">Privacy Policy</a></p>
        <p className="mv3"><a href="#" className="no-underline white pa dim">Terms and Conditions</a></p>
        <p className="mv3"><a href="#" className="no-underline white pa dim">Disclaimer</a></p>
        <p className="mv3"><a href="#" className="no-underline white pa dim">Support</a></p>
      </div>
      <div className="foodsub__footer-contactus">
        <p className="f4">Contact us</p>
        <p className="mv3"><a href="#" className="no-underline white pa dim">hello@foodsub.africa</a></p>
        <p className="mv3"><a href="tel:+234090111111" className="no-underline white pa dim">+234(0)7068138588</a></p>
        <p className="mv3 white">Lagos, Nigeria</p>
      </div>
      <div className="foodsub__footer-copy-right">  <p className="mt3">&copy; 2022 Food Subcription for Africans. All Rights Reserved</p></div>
     </div>
     
    </footer>
  );
};

export default Footer;
