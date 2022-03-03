import React, { useState } from "react";
import { Button } from "..";
import "./CTA.css";
import email from "../../assets/email.svg";

const CTA = () => {
  const [typing, setTyping] = useState(false);

  return (
    <section className="foodsub__cta foodsub__cta h3">
      <h3>Get started at ₦5,600 a week or ₦24,000 a month</h3>
      <div className="foodsub__cta-input_fields">
        {/* <div className="foodsub__cta-email_group">
          {typing === false && <img src={email} />}
          <input
            type="email"
            placeholder="Email Address"
            onChange={() => setTyping(true)}
          />
        </div> */
      
        }
           <a href="https://forms.gle/Kidh7UGmaSiNGJYH7" target="blank"> <Button  text="Get early access" width="335px" /></a>
          
      </div>
   
     
    </section>
  );
};

export default CTA;
