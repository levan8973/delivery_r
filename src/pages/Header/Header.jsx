import React from "react";
import "./index.css";
import { ReactComponent as Logo } from "../../icon/Logo.svg";
import { ReactComponent as Calc } from "../../icon/Calc.svg";
import { ReactComponent as Man } from "../../icon/Man.svg";
import SelectOption from "../../Components/SelectOption/SelectOption.jsx";
import Input from "../../Components/Input/Input.jsx";
import PhoneLink from "../../Components/PhoneLink/PhoneLink.jsx";

const Header = () => {
  return (
    <header>
      <a href="" className="logo">
        <Logo />
      </a>
      <div className="header__btn-phone">
        <PhoneLink />
      </div>
      <Input />
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
