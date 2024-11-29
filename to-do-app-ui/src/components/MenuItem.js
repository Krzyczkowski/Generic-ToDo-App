import React from "react";
import "../styles/Menu-bar.css";

const MenuItem = ({text,isActive, onClick}) => {
  return (
    <div className={`MenuItem ${isActive ? "active" : ""}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default MenuItem;
