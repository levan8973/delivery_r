import React, { useState } from "react";



const SelectOption = ()=>{

    const  [data,setData] = useState(undefined)
    const options = ['Москва','Новосибирск','Тюмень']

    const onOptionHandler = (event) => {
    setData(event.target.value)
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