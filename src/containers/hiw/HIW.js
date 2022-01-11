import React, { useState } from 'react';
import './HIW.css';
import { slides } from '../../slides';

const HIW = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (e) => {
    const btnClicked = e.target.name;
    let newSlide;

    if (btnClicked === 'prev') newSlide = currentSlide - 1;
    if (newSlide < 0) setCurrentSlide(slides.length - 1);
    else setCurrentSlide(newSlide);

    if (btnClicked === 'next') {
      newSlide = currentSlide + 1;
      if (newSlide < slides.length) {
        setCurrentSlide(newSlide);
      } else {
        setCurrentSlide(0);
      }
    }
  };

  return (
    <section id="hiw" className="foodsub__hiw w-100">
      <div className="foodsub__hiw-heading">
        <h2>How it works</h2>
        <p>
          <h5>Flexible Plan to fit your life</h5><br/>
        We offer anywhere from 4–10 meals per delivery, starting at 800 / meal. The bigger your box, the more you’ll save—and you can always pause, cancel, or change your meal
        </p>
      </div>
      <div className="foodsub__hiw-slide_container">
        {slides.map((slide, i) => (
          <div
            className={
                currentSlide === i
                  ? 'foodsub__hiw-slide_container--slide fade'
                  : 'hide'
              }
          >
            <div className="foodsub__hiw-slide_container--slide_img">
              <img src={slide.img} alt="phone" />
            </div>
            <div className="foodsub__hiw-slide_container--slide_details">
              <h3>{slide.name}</h3>
              <p>{slide.detail}</p>
            </div>
          </div>
        ))}

        {/* Prev and Next Btns */}
        <a
          className="foodsub__hiw-slid_container--prev pointer shadow-3"
          name="prev"
          onClick={showSlide}
        >
          &#10094;
        </a>
        <a
          className="foodsub__hiw-slid_container--next pointer shadow-3"
          name="next"
          onClick={showSlide}
        >
          &#10095;
        </a>

        <div className="foodsub__hiw-slide_container--dots">
          {slides.map((slide, i) => (
            <span
              key={slide + i}
              className={currentSlide === i ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HIW;
