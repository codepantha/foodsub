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
            We are convenience.<br/> 
             

          We're a full-service food subcription company the provides, a faster, easier <br/> and cheaper alternative to cooking for busy Africans <br/> 
          by using AI and the concept of smart and cloud kitchen to automate and  speed up cooking process. <br/> We're geographically focused on Lagos Nigeria at launch but our mission is to  be the one stop for every  africans food need home and abroad. 

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

export default About;
