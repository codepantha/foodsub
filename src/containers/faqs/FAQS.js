import React from 'react';
import './FAQS.css';
import { Button, FAQ } from '../../components';

const faqs = [
  {
    question: 'What is Foodsub?',
    answer: <p> We are a full-service food subcription company that provides, a faster, easier and cheaper alternative to cooking for busy Africans using AI and the concept of smart and cloud kitchen to automate cooking process and enable our customers pay for thier meals upfront via subcription.</p>,
  },
  {
    question: 'How does it work?',
    answer: <p>When you sign up on Foodsub, you pick a delivery day(s), plan and meals that suits your lifestyle, then your order is proccessed and assiged to a chef that cooks your picks. Also if you're too lazy to select meals we have an AI meal planner that recommends meals based on your preferences and we deliver exactly on schedule for free. </p>,
  },
  {
    question: 'Who is FoodSub for?',
    answer: <div> Foodsub  was created for people who like homemade cooking, but don’t like overpaying for the good things in life. People who are busy and don't have time for market runs and cooking, we're here so that you dont go through any of those hassle.</div>
  },
  {
    question: 'How does the subscription work?',
    answer: <div>Subscribe to a weekly or  monthly food plan for yourself or others it's the perfect gift for people you Love. You save them time, give them relief, grant them access to quality service that suits their lifestyle.</div>
  },
]

const FAQS = () => {
  return (
    <section className="foodsub__faqs w-100 flex flex-wrap">
      {faqs.map(faq => <FAQ question={faq.question} answer={faq.answer} />)}
    </section>
  )
}

export default FAQS
