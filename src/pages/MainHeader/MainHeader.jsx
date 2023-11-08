import React from "react";
import "./index.css";
import Aside from "./Aside/Aside";

const MainHeader = () => {
  return (
    <section className="main__header">
      <div className="texts">
        <h2 className="main__heading">
          Доставим ваш груз в любую точку России
        </h2>
        <p className="main__text">
          Доставляем сборный груз от 1кг по всей стране узнай стоймость
          перевозки прямо сейчас
        </p>
      </div>
      <Aside />
    </section>
  );
};
export default MainHeader;
