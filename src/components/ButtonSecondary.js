import React from "react";
import "../styles/global.scss";

function ButtonSecondary({onClick, children}) {
  return (
    <div className="button-container">
  <div>
  <button className="secondary-button" onClick={onClick}>{children}</button>
  </div>
 </div>
  );
}

export default ButtonSecondary;