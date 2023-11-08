import React from "react";
import "./index.css";
import Tab from "./Tab";
import CarOne from "../../img/car-one.png";
import CarTwo from "../../img/car-two.png";
import CarThree from "../../img/car-three.png";
import CarFour from "../../img/car-four.png";
import { ReactComponent as Calc } from "../../icon/Calc.svg";

const TabContent = () => {
  const tabs = [
    {
      title: "Тент",
      content: (
        <div className="tabs__contents">
          <div className="contents">
            <span>Фургон</span>
            <img src={CarOne} alt="Изображение" />
            <div className="contents__btn">
              <button>Заказать</button>
              <button className="contents__second-btn">
                <Calc />
              </button>
            </div>
          </div>
          <div className="contents">
            <span>Грузовик</span>
            <img src={CarTwo} alt="Изображение" />
            <div className="contents__btn">
              <button>Заказать</button>
              <button className="contents__second-btn">
                <Calc />
              </button>
            </div>
          </div>
          <div className="contents">
            <span>Фургон</span>
            <img src={CarThree} alt="Изображение" />
            <div className="contents__btn">
              <button>Заказать</button>
              <button className="contents__second-btn">
                <Calc />
              </button>
            </div>
          </div>
          <div className="contents">
            <span>Фура</span>
            <img src={CarFour} alt="Изображение" />
            <div className="contents__btn">
              <button>Заказать</button>
              <button className="contents__second-btn">
                <Calc />
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Борт",
      content: (
        <div>
          <div className="contents">
            <span>Грузовик</span>
            <img src="path_to_image" alt="Изображение" />
            <button>Заказать</button>
          </div>
          <div className="contents">
            <span>Фура</span>
            <img src="path_to_image" alt="Изображение" />
            <button>Заказать</button>
          </div>
        </div>
      ),
    },
    {
      title: "Рефрижератор",
      content: (
        <div>
          <span>Фургон</span>
          <img src="path_to_image" alt="Изображение" />
          <button>Заказать</button>
        </div>
      ),
    },
    {
      title: "Фургон",
      content: (
        <div>
          <span>Фура</span>
          <img src="path_to_image" alt="Изображение" />
          <button>Заказать</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Tab tabs={tabs} />
    </div>
  );
};

export default TabContent;
