import React from 'react';
import './Services.css';
import deliver from '../../assets/deliver.svg';
import gift from '../../assets/gift.svg';
import subscribe from '../../assets/subscribe.svg';
import track from '../../assets/track.svg';

const icons = [deliver, gift, subscribe, track];
const servicesArray = [
  {
    title: 'Meal Subscription',
    desc: 'Suscribe for a meal online before delivery day.',
    icon: subscribe,
  },
  {
    title: 'Fast Delivery',
    desc: 'Enjoy a fast delivery of good and delicious meal.',
    icon: deliver,
  },
  {
    title: 'Gift a Meal',
    desc: 'Gift a meal to someone and have it delivered.',
    icon: gift,
  },
  {
    title: 'Track Order',
    desc: 'Food Sub offers you the option to track your food order.',
    icon: track,
  },
];

const Service = ({ icon, title, desc }) => (
  <div className="foodsub__service_cards-card shadow-5 pointer grow">
    <img src={icon} alt="icon" />
    <p className="foodsub__services-title">{title}</p>
    <p className="foodsub__services-desc">{desc}</p>
  </div>
);

const Services = () => (
  <section id="services" className="foodsub__services w-100">
    <h2>Services</h2>
    <p className="foodsub__services-sub">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet eu
      tellus risus tincidunt libero. Malesuada mattis auctor enim tortor.
    </p>
    <div className="foodsub__service_cards">
      {
          servicesArray.map((service, i) => <Service key={service + i} icon={service.icon} title={service.title} desc={service.desc} />)
        }
    </div>
  </section>
);

export default Services;
