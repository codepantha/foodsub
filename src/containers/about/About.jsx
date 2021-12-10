import React from "react";
import { Button } from "../../components";
import "./About.css";
import plate from "../../assets/plate.svg";

const About = () => {
  return (
    <section className="foodsub__about section__padding">
      <h2>About Us</h2>
      <div className="foodsub__about-content">
        <div className="foodsub__about-content_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
            suscipit diam mi risus et tincidunt sollicitudin <br /><br /> egestas
            commodo. Non neque odio in nulla in et. Ultricies porttitor egesta.
          </p>
          <Button text="Learn More" height='60px' width='241px' />
        </div>
        <div className="foodsub__about-content_img">
          <img src={plate} alt='plate' />
        </div>
      </div>
    </section>
  );
};

export default About;
