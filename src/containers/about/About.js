 dev
import React from 'react';
import { Button } from '../../components';
import './About.css';
import plate from '../../assets/plate.svg';

const About = () => (
  <section id="about" className="foodsub__about section__padding">
    <h2>About Us</h2>
    <div className="foodsub__about-content">
      <div className="foodsub__about-content_text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
          suscipit diam mi risus et tincidunt sollicitudin
          {' '}
          <br />
          <br />
          {' '}
          egestas
          commodo. Non neque odio in nulla in et. Ultricies porttitor egesta.
        </p>
        <Button text="Learn More" height="60px" width="241px" />
      </div>
      <div className="foodsub__about-content_img">
        <img src={plate} alt="plate" />
      </div>
    </div>
  </section>
);
=======
import React from "react";
import { Button } from "../../components";
import "./About.css";
import plate from "../../assets/plate.svg";

const About = () => {
  return (
    <section id="about" className="foodsub__about section__padding">
      <h2>Who we are</h2>
      <div className="foodsub__about-content">
        <div className="foodsub__about-content_text">
          <p>
            We are convenience.<br/> The kitchen of the future,
             we're making your home kitchen  obsolete by  combinig  AI and the concept of cloud and smart kitchen to automate all cooking proccess. <br/> We're geographically focused on Nigeria at launch but our goal is to  be the one stop for every  africans food need, Home and abroad. 

          </p>
          {/* <Button text="Learn More" height='60px' width='241px' /> */}
        </div>
        <div className="foodsub__about-content_img">
          <img src={plate} alt='plate' />
        </div>
      </div>
    </section>
  );
};
 dev

export default About;
