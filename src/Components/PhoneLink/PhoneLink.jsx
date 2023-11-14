import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Phone } from "../../icon/Phone.svg";
import "./index.css";

const PhoneLink = () => {
  const phoneNumber = "7 123 456 78 90";

  return (
    <Link to="/phone" className="phone">
      <Phone />
      {phoneNumber}
    </Link>
  );
};

export default PhoneLink;
