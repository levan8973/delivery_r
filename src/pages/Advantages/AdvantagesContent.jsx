import React from "react";
import { ReactComponent as Time } from "../../icon/time.svg";
import { ReactComponent as P } from "../../icon/p.svg";
import { ReactComponent as Box } from "../../icon/box.svg";
import { ReactComponent as Map } from "../../icon/map.svg";
import { ReactComponent as InsertCard } from "../../icon/insert-card.svg";
import { ReactComponent as Avatar } from "../../icon/avatar.svg";
import Advantages from "./Advantages";
const AdvantagesContent = () => {
  const AdvantagesContent = [
    {
      title: "Экономия времени",
      text: "Не надо звонить и вести долгие переговоры",
      imgSVG: <Time />,
    },
    {
      title: "Гарантия цены",
      text: "Исполнитель не изменит цену и условия в последний момент",
      imgSVG: <P />,
    },
    {
      title: "Страхование грузов",
      text: "Перевозчики торгуются за ваш заказ,снижая цены",
      imgSVG: <Box />,
    },
    {
      title: "Отслеживание грузов",
      text: "Схема отслеживая покажет  где ваш груз",
      imgSVG: <Map />,
    },

    {
      title: "Оплата картой",
      text: "Оплата картой и Яндекс.Деньги, а так же  большой выбор  других способов оплаты",
      imgSVG: <InsertCard />,
    },
    {
      title: "Надежный перевозчик",
      text: "Все перевозчики проходят   у нас проверку документов   и подтверждение транспорта",
      imgSVG: <Avatar />,
    },
  ];
  return (
    <div>
      <h2 className="advantages__page-heading">Приемущества</h2>
      <div className="advantages__container-cards">
        {AdvantagesContent.map((content, index) => (
          <Advantages
            key={index}
            title={content.title}
            text={content.text}
            imgSVG={content.imgSVG}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvantagesContent;
