import React from "react";
import "../styles/Loading.scss";

function Loading({ fadeOut }) {
  return (
    <div className="loading-container">
      <div className={`loading-elements ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader"></div>
      <div className="loading-text">
      <h3>Loading portfolio...</h3>
      <p>Created using React</p>
      </div>
      </div>
    </div>
  );
}

export default Loading;
