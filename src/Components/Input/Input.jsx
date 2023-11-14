import React, { useState } from "react";
import "./index.css";

const Input = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      className="search"
      placeholder="Поиск"
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
