import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.scss";

function ButtonSecondary({onClick, children}) {
  return (
    <div class="button-container">
  <div>
  <button className="secondary-button" onClick={onClick}>{children}</button>
  </div>
 </div>
  );
}

export default ButtonSecondary;