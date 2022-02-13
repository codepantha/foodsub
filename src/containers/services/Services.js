import React from "react";
import "./Services.css";
import pause from "../../assets/pause.svg";
import gift from "../../assets/gift.svg";
import clock from "../../assets/clock.svg";
import deliver from "../../assets/deliver.svg";

const icons = [clock, gift, pause, deliver];
const servicesArray = [
  {
    title: 'Save time ',
    desc: <div>You don’t have to go anywhere or wait for on a long que. We do all the work and deliver your meals for free right on schedule.</div>,
    icon: clock
  },
  {
    title: 'Flexible ',
    desc: <div>We blend into your lifestyle and create convenience. Select a weekly or monthly plan and set delivery days that suits you.</div>,
    icon: deliver
  },
 
  {
    title: 'Pause Anytime',
    desc: <div>Leaving town? <br/> you can always pause, cancel, or change your meal at any time.</div>,
    icon: pause
  },
  {
    title: 'Gift',
    desc: <div>It's the perfect gift for people you Love. You save them time, money and  give them relief.</div>,
    icon: gift
  },
]

const Service = ({ icon, title, desc }) => {
  return (
    <div className="foodsub__service_cards-card shadow-5 pointer grow">
      <img src={icon} alt='icon' />
      <p className="foodsub__services-title">{title}</p>
      <p className="foodsub__services-desc">{desc}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="foodsub__services w-100">
      <h2>Why choose Foodsub?</h2>
      <p className="foodsub__services-sub">
  We save you time, money and  serve you nutritious chef <br/>cooked meals you crave with just with few clicks 

      </p>
      <div className="foodsub__service_cards">
        {
          servicesArray.map((service, i) => <Service key={service+i} icon={service.icon} title={service.title} desc={service.desc} />)
        }
      </div>
    </section>
  );
};

export default Services;
