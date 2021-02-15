import React from "react";
import "./Button.css";

const Button = ({ children, btnType, clicked }) => {
  return (
    <button className={["Button", [btnType]].join(" ")} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
