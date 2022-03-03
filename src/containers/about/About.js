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
          foodsub full-service food subscription company that provides, a faster, easier, and cheaper alternative to cooking for busy Africans by using AI and the concept of smart and cloud kitchen to automate the cooking process and also enable our customers to pay for their meals upfront via subscription.
          </p>
           <Button href="https://forms.gle/Kidh7UGmaSiNGJYH7" text="Get early access " height='60px' width='241px' /> 
        </div>
        <div className="foodsub__about-content_img">
          <img src={plate} alt='plate' />
        </div>
      </div>
    </section>
  );
};

export default About;
