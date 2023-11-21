import React, { useState } from "react";
import "./index.css";

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    where: "",
    phoneNumber: "",
    isChecked: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", formValues.name);
    console.log("Phone Number:", formValues.phoneNumber);
    console.log("Where:", formValues.where);
    console.log("Is Checked:", formValues.isChecked);
  };

  return (
    <section className="form__container">
      <h2 className="form__heading">Нет времени разбираться? Подскажем!</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__container-inputs">
          <input
            placeholder="Я хочу перевезти"
            className="form__input"
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />

          <input
            placeholder="Телефон"
            className="form__input"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleInputChange}
          />

          <input
            placeholder="откуда-куда"
            className="form__input"
            type="text"
            id="where"
            name="where"
            value={formValues.where}
            onChange={handleInputChange}
          />
        </div>

        <div className="form__sending-data">
          <label className="checkbox__label" htmlFor="checkbox">
            <input
              className="checkbox"
              type="checkbox"
              id="checkbox"
              name="isChecked"
              checked={formValues.isChecked}
              onChange={handleInputChange}
            />
            Согласие на обработку персональных данных
          </label>
          <button className="form__btn" type="submit">
            Отправить
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
