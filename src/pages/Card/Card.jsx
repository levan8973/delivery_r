import React from "react";
import "./index.css";

const Card = ({ title, text, imgURL }) => {
  return (
    <div className="card__item">
      <div className="text__elements">
        <div className="texts">
          <h3 className="card__heading">{title}</h3>
          <p className="card__text">{text}</p>
        </div>
        <button className="card__btn">Подробнее</button>
      </div>
      <img className="card__img" src={imgURL} alt="#" />
    </div>
  );
};
export default Card;
