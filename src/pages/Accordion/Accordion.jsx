import React, { useState } from "react";
import "./index.css";
import AccordionContent from "./AccordionContent";
import AccordionContentTwo from "./AccordionContentTwo";
import AccordionContentThree from "./AccordionContentThree";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion__container">
      <div
        className={activeIndex === 0 ? "active" : ""}
        onClick={() => handleAccordionClick(0)}>
        <h2 className="accordion__heading">Рекомендации наших клиентов</h2>
        {activeIndex === 0 && <AccordionContent />}
      </div>
      <div
        className={activeIndex === 1 ? "active" : ""}
        onClick={() => handleAccordionClick(1)}>
        <h2 className="accordion__heading">Новости и акции</h2>
        {activeIndex === 1 && <AccordionContentTwo />}
      </div>
      <div
        className={activeIndex === 2 ? "active" : ""}
        onClick={() => handleAccordionClick(2)}>
        <h2 className="accordion__heading">Наши партнеры</h2>
        {activeIndex === 2 && <AccordionContentThree />}
      </div>
    </div>
  );
};

export default Accordion;
