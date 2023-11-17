import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.scss";

function ButtonPrimary({onClick, children, onMouseLeave, onMouseEnter}) {
  return (
    <div class="button-container">
  <div>
  <button className="primary-button" onClick={onClick} onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave}>{children}</button>
  </div>
 </div>
  );
}

export default ButtonPrimary;