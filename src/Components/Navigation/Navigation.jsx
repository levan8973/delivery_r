import React from "react";
import "./index.css";

const Navigation = () => {
  const links = [
    {
      title: "Услуги",
      link: "/",
    },
    {
      title: "Международные перевозки",
      link: "/",
    },
    {
      title: "Для бизнеса",
      link: "/",
    },
    {
      title: "Частным лицам",
      link: "/",
    },
    {
      title: "О компании",
      link: "/",
    },
    {
      title: "deliverytrans@gmail.com",
      link: "/",
    },
  ];
  const listItems = links.map((link) => {
    return (
      <li>
        <a href="">{link.title}</a>
      </li>
    );
  });
  return (
    <nav className="header__nav">
      <ul className="header__nav-items">{listItems}</ul>
    </nav>
  );
};

export default Navigation;
