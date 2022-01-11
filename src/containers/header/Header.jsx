import React from "react";
import "./Header.css";
import bgImg from "../../assets/headerimg.png";
import { Button } from "../../components";

const Header = () => {
  return (
    <header id="header" className="foodsub__header">
      <div className="foodsub__header-content">
        <h1>A faster and cheaper alternative to cooking</h1>
        <p>
          Eat Nutrious chef food meals you crave at your convenience
        </p>
        <Button text='Join waitinglist' height='60px' width='256px' />
      </div>
    </header>
  );
};

export default Header;
