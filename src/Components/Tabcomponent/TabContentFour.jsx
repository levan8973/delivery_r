import React from "react";
import "./index.css";
import CarOne from "../../img/car-one.png";
import CarTwo from "../../img/car-two.png";
import CarThree from "../../img/car-three.png";
import CarFour from "../../img/car-four.png";
import { ReactComponent as PhoneBtn } from "../../icon/PhoneBtn.svg";

const TabContentFour = () => {
  return (
    <div className="tabs__contents">
      <div className="contents">
        <span>Фура</span>
        <img className="car-four" src={CarFour} alt="Изображение" />
        <div className="contents__btn">
          <button className="btn">Заказать</button>
          <button className="contents__second-btn">
            <PhoneBtn />
          </button>
        </div>
      </div>
      <div className="contents">
        <span>Фургон</span>
        <img className="car-three" src={CarThree} alt="Изображение" />
        <div className="contents__btn">
          <button className="btn">Заказать</button>
          <button className="contents__second-btn">
            <PhoneBtn />
          </button>
        </div>
      </div>
      <div className="contents">
        <span>Фургон</span>
        <img className="car-one" src={CarOne} alt="Изображение" />
        <div className="contents__btn">
          <button className="btn">Заказать</button>
          <button className="contents__second-btn">
            <PhoneBtn />
          </button>
        </div>
      </div>
      <div className="contents">
        <span>Грузовик</span>
        <img className="car-two" src={CarTwo} alt="Изображение" />
        <div className="contents__btn">
          <button className="btn">Заказать</button>
          <button className="contents__second-btn">
            <PhoneBtn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabContentFour;
