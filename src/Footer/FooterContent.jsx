import React from "react";
import "./index.css";
import { list1, list2, list3, list4 } from "./ConfigFooter";
import { Link } from "react-router-dom";

const FooterContent = () => {
  return (
    <div>
      <ul className="footer__container">
        <li className="footer__element">
          <h3 className="footer__heading">{list1.title}</h3>
          <ul className="footer__text">
            {list1.items.map((item, index) => (
              <li key={index}>
                <Link className="footer__link">{item}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="footer__element">
          <h3 className="footer__heading">{list2.title}</h3>
          <ul className="footer__text">
            {list2.items.map((item, index) => (
              <li key={index}>
                {" "}
                <Link className="footer__link">{item}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="footer__element">
          <h3 className="footer__heading">{list3.title}</h3>
          <ul className="footer__text">
            {list3.items.map((item, index) => (
              <li key={index}>
                {" "}
                <Link className="footer__link">{item}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="footer__element">
          <h3 className="footer__heading">{list4.title}</h3>
          <ul className="footer__text">
            {list4.items.map((item, index) => (
              <li key={index}>
                {" "}
                <Link className="footer__link">{item}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FooterContent;
