import React from "react";
import Card from "./Card";
import CardCar from "../../img/CardCar.png";
import CardPills from "../../img/CardPills.png";
import CardTools from "../../img/CardTools.png";
import CardSecondCar from "../../img/CardSecondCar.png";
import CardFruits from "../../img/CardFruits.png";

const CardContent = () => {
  const cardsContent = [
    {
      title: "Экспедирование",
      text: "Принимаем, сопровождаем  и сдаем   груз по утвержденному маршруту. Контролируем правильное оформление...",
      imgURL: CardCar,
    },
    {
      title: "Перевозка медикаментов",
      text: "Принимаем, сопровождаем и сдаем груз по утвержденному  маршруту.  Контролируем  правильное оформление...",
      imgURL: CardPills,
    },
    {
      title: "Перевозка стройматериалов",
      text: "Принимаем, сопровождаем и сдаем груз по утвержденному маршруту. Контролируем правильное оформление...",
      imgURL: CardTools,
    },
    {
      title: "Сборные рефгрузы",
      text: "Принимаем, сопровождаем и сдаем  груз по утвержденному маршруту. Контролируем правильное оформление...",
      imgURL: CardSecondCar,
    },
    {
      title: "Перевозка питания",
      text: "Принимаем, сопровождаем  и сдаем  груз по утвержденному  маршруту...",
      imgURL: CardFruits,
    },
    {
      title: "Логистика и маршрутизация",
      text: "Принимаем, сопровождаем    и сдаем  груз по утвержденному   маршруту.   Контролируем  правильное  оформление...",
      imgURL: CardPills,
    },
  ];

  return (
    <div className="page__card">
      <h2 className="page__heading">Виды перевозимых грузов</h2>
      <div className="card">
        {cardsContent.map((cardData, index) => (
          <Card
            key={index}
            title={cardData.title}
            text={cardData.text}
            buttonText={cardData.buttonText}
            imgURL={cardData.imgURL}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContent;
