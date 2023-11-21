import React from "react";
import "./index.css";
import InformationImg from "../../img/InformationImg.png";
const CompanyInformation = () => {
  return (
    <section className="information">
      <h2 className="heading">О компании</h2>
      <div className="page__elements">
        <div className="text__elements">
          <span className="bold__text">Lorem ipsum dolor sit amet</span>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditii Sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt
          </p>
          <p>
            Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
        </div>
        <img className="img" src={InformationImg} alt="#" />
      </div>
    </section>
  );
};

export default CompanyInformation;
