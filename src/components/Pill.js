import React from "react";
import "../styles/global.scss";

function Pill({title}) {
  return (
    <div class="pill-container">
      <div>
        <button
          className="pill"
        >
          {title}
        </button>
      </div>
    </div>
  );
}

export default Pill;
