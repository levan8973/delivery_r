import React from "react";
import { ReactComponent as Logo } from "../../icon/Logo.svg";
import { ReactComponent as Phone } from "../../icon/Phone.svg";
import { ReactComponent as Calc } from "../../icon/Calc.svg";
import { ReactComponent as Man } from "../../icon/Man.svg";
import "./index.css";
import SelectOption from "../../Components/SelectOption/SelectOption.jsx";

const Header = () => {
  return (
    <header>
      <a href="" className="logo">
        <Logo />
      </a>
      <button className="header__btn-phone">
        <Phone />
        <a className="header__phone-link" href="" tel="+71234567890">
          7 123 456 78 90
        </a>
      </button>
      <input className="header__search-box" type="text" placeholder="поиск" />
      <SelectOption />
      <button className="header__calc">
        <Calc />
        <span>Калькулятор</span>
      </button>
      <button className="header__login-btn">
        <Man />
        <span>Вход</span>
      </button>
    </header>
  );
};
export default Header;
