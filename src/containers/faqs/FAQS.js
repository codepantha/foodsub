import React from 'react';
import './FAQS.css';
import { Button, FAQ } from '../../components';

const faqs = [
  {
    question: 'How to subscribe for a meal',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
  },
  {
    question: 'How to subscribe for a meal',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
  },
  {
    question: 'How to subscribe for a meal',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
  },
  {
    question: 'How to subscribe for a meal',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
  },
];

const FAQS = () => (
  <section className="foodsub__faqs w-100 flex flex-wrap">
    {faqs.map((faq) => <FAQ question={faq.question} answer={faq.answer} />)}
  </section>
);

export default FAQS;
