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
        <p className="aside__text">Расчитать Стоимость</p>
      </div>
      <div className="aside__block">
        <button className="aside__btn">
          <Girl />
        </button>
        <p className="aside__text">Личный Менеджер</p>
      </div>
    </aside>
  );
};

export default Aside;
