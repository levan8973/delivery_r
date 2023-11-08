import React, { useState } from "react";
import "./index.css"

const SelectOption = ()=>{

    const  [city,setSity] = useState(null)
    const options = ['Москва','Новосибирск','Тюмень']

    const onOptionHandler = (event) => {
    setSity(event.target.value)
    }

    return (
        <select className="header__select" onChange={onOptionHandler}>
        <option >Выбирите город</option>
        {options.map((option)=>{
          return (
            <option>
                {option}
            </option>
          )
        })}       
      </select>
    )
}

export default SelectOption;