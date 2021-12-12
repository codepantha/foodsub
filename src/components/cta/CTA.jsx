import React from 'react';
import { Button } from '..';
import './CTA.css';

const CTA = () => {
  return (
    <section className="foodsub__cta">
      <h2>Waitlist</h2>
      <div className="foodsub__cta-input_fields">
        <input type="email" placeholder="Email Address" />
        <Button text="Join the waitlist" width="335px" />
      </div>
    </section>
  )
}

export default CTA
