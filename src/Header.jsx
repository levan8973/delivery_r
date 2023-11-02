import React from "react";
import { Icon } from "./icon.jsx";
import "./index.css"
import SelectOption from "./SelectOption.jsx";



const Header =  ()=>{
 
return (
    <header>
    <a href="" className="logo"><Icon name='logo' /></a>
     <button className="header__btn-phone">
        <Icon name="phone"/>
        <a className="header__phone-link" href="" tel="+71234567890">7 123 456 78 90</a>
        </button>
        <input className="header__search-box" type="text" placeholder="поиск" />
       <SelectOption/>
       <button className="header__calc">
         <Icon name="calc"/>
         <span>Калькулятор</span>
       </button>
       <button className="header__login-btn" >
         <Icon name="man"/>
         <span>Вход</span>
       </button>
     </header>

)
}
export default Header