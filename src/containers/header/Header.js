import React from "react";
import "./Header.css";
import bgImg from "../../assets/headerimg.jpg";
import { Button } from "../../components";

const Header = () => {
  return (
    <header id="header" className="foodsub__header">
      <div className="foodsub__header-content">
        <h1>A faster and cheaper alternative  <br/> to cooking for busy Africans.</h1>
        <p>
          Get nutritious chef fooded meals you <br/> crave  at your door-step when you want it.
        </p>
       
       <a href="https://forms.gle/Kidh7UGmaSiNGJYH7" target="blank">  <Button  text='Join waitlist' height='60px' width='256px' /></a>
      </div>
    </header>
  );
};

export default Header;
