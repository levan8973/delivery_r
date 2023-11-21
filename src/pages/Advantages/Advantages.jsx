import React from "react";
import "./index.css";

const Advantages = ({ title, text, imgSVG }) => {
  return (
    <div className="advantages__card-item">
      <h2 className="advantages__heading">{title}</h2>
      <div className="advantages__content">
        <p className="advantages__text">{text}</p>
        {imgSVG}
      </div>
    </div>
  );
};
export default Advantages;
