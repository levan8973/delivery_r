import React from "react";
import "./index.css";
import { ReactComponent as Calculator } from "../../../icon/calculator.svg";
import { ReactComponent as Girl } from "../../../icon/girl.svg";

const Aside = () => {
  return (
    <aside className="main__aside">
      <div className="aside__block">
        <button className="aside__btn">
          <Calculator />
        </button>
        <span className="aside__text">Расчитать</span>
        <span className="aside__text">Стоимость</span>
      </div>
      <div className="aside__block">
        <button className="aside__btn">
          <Girl />
        </button>
        <span className="aside__text">Личный</span>
        <span className="aside__text">Менеджер</span>
      </div>
    </aside>
  );
};

export default Aside;
