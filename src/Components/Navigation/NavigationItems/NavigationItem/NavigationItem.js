import React from "react";
import "./NavigationItem.css";

const NavigationItem = ({ link, active, children }) => {
  return (
    <ul>
      <li className='NavigationItem'>
        <a href={link} className={active ? "active" : null}>
          {children}
        </a>
      </li>
    </ul>
  );
};

export default NavigationItem;
