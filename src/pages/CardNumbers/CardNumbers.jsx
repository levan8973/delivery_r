import React from "react";
import "./index.css";

const CardNumbers = ({ title, text }) => {
  return (
    <div className="cardNumbers__item">
      <span className="cardNumbers__title">{title}</span>
      <span className="cardNumbers__text">{text}</span>
    </div>
  );
};
export default CardNumbers;
