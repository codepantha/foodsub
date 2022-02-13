import React from "react";
import "./FAQ.css";

const FAQ = (props) => {
  return (
    <div className="w-100 w-40-l w-40-m shadow-5 pointer grow pa3 mb5 mt5">
      <h3 className="mb3">{props.question}</h3>
      <p className="mb3">
        {props.answer}
      </p>
      {/* <button className="bg-transparent gold-text bw0 dim">READ MORE</button> */}
    </div>
  );
};

export default FAQ;
