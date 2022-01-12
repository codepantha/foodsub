 dev
import React, { useState } from 'react';
import { Button } from '..';
import './CTA.css';
import email from '../../assets/email.svg';
=======
import React, { useState } from "react";
import { Button } from "..";
import "./CTA.css";
import email from "../../assets/email.svg";
 dev

const CTA = () => {
  const [typing, setTyping] = useState(false);

  return (
    <section className="foodsub__cta">
      <h2>Waitlist</h2>
      <div className="foodsub__cta-input_fields">
 dev
        <div className="foodsub__cta-email_group">
=======
        {/* <div className="foodsub__cta-email_group">
 
          {typing === false && <img src={email} />}
          <input
            type="email"
            placeholder="Email Address"
            onChange={() => setTyping(true)}
          />

        </div>
        <Button text="Join the waitlist" width="335px" />
      </div>
=======
        </div> */
      
        }
          
      </div>
      <div><h4 className="foodsub__cta3">Get started at ₦5,600 a week or ₦24,000 a month</h4><br/>
        <Button text="Join waitlist" width="335px" /></div>
 dev
    </section>
  );
};

export default CTA;
