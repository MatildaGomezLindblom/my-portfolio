import React from "react";
import "../../styles/Hero.scss";
import { motion } from "framer-motion";
import Stars from "../../assets/hero/stars.svg";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div className="hero-text">
          <h2>Designer by day, programmer by night.</h2>
        </div>
        <motion.div
          className="celestial-body"
          initial={{ y: "90vh", opacity: 0.2 }}
          animate={{ y: "20vh", opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
      </div>
      <motion.img
        className="stars"
        src={Stars}
        alt="Stars"
        initial={{ y: "90vh", opacity: 0.2 }}
        animate={{ y: "20vh", opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Hero;
