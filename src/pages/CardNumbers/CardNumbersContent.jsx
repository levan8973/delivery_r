import React from "react";
import CardNumbers from "./CardNumbers";
import "./index.css";

const CardNumbersContent = () => {
  const numbersData = [
    {
      title: "3500",
      text: "Профессиональных сотрудников",
    },
    {
      title: "400",
      text: "Единиц автотранспорта",
    },
    {
      title: "31",
      text: "Филлиалов по России",
    },
    {
      title: "10",
      text: "В топе транспортных компаний",
    },
    {
      title: "7000",
      text: "Постоянных клиентов",
    },
    {
      title: "22",
      text: "Года вместа с нами",
    },
  ];

  return (
    <div className="cardNumbers__container">
      {numbersData.map((content, index) => {
        return (
          <CardNumbers key={index} title={content.title} text={content.text} />
        );
      })}
    </div>
  );
};

export default CardNumbersContent;
