import React from "react";
import "./Logo.css";
import BurgerLogo from "../../Assets/Images/burger-logo.png";

const Logo = () => {
  return (
    <div className='Logo'>
      <img src={BurgerLogo} alt='Logo' />
    </div>
  );
};

export default Logo;
