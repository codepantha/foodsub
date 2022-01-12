dev
import React from 'react';
import './Header.css';
import bgImg from '../../assets/headerimg.png';
import { Button } from '../../components';

const Header = () => (
  <header id="header" className="foodsub__header">
    <div className="foodsub__header-content">
      <h1>Tasty, Hot and Healthy food</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscingelit. Mi cursus
        euismod sed aliquam. Pellentesque erat pasellus
      </p>
      <Button text="Get Started" height="60px" width="256px" />
    </div>
  </header>
);
=======
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
        <Button text='Join waitlist' height='60px' width='256px' />
      </div>
    </header>
  );
};
 dev

export default Header;
