import React, { useState } from 'react';
import { Button } from '..';
import './CTA.css';
import email from '../../assets/email.svg';

const CTA = () => {
  const [typing, setTyping] = useState(false);

  return (
    <section className="foodsub__cta">
      <h2>Waitlist</h2>
      <div className="foodsub__cta-input_fields">
        <div className="foodsub__cta-email_group">
          {typing === false && <img src={email} />}
          <input
            type="email"
            placeholder="Email Address"
            onChange={() => setTyping(true)}
          />
        </div>
        <Button text="Join the waitlist" width="335px" />
      </div>
    </section>
  );
};

export default CTA;
