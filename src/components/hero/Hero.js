import React from "react";
import "../../styles/Hero.scss";
import { motion } from "framer-motion";
import Stars from "../../assets/hero/stars.svg";
import Star1 from "../../assets/hero/star1.svg";
import Star2 from "../../assets/hero/star2.svg";
import Star3 from "../../assets/hero/star3.svg";
import Cloud from "../../assets/hero/cloud.svg";
import { useTheme } from "../ThemeContext";

function Hero({toggleTheme}) {
  const { isDarkTheme } = useTheme();

  const cloudPlacements = [
    { x: "10vw", y: "10vh", duration: 4.5 },
    { x: "50vw", y: "20vh", duration: 3.2 },
    { x: "25vw", y: "40vh", duration: 4.8 },
  ];

  const starPlacements = [
    { x: "20vw", y: "10vh", duration: 4.5 },
    { x: "65vw", y: "20vh", duration: 4.2 },
    { x: "40vw", y: "60vh", duration: 4 },
    { x: "10vw", y: "50vh", duration: 5 },
    { x: "80vw", y: "54vh", duration: 4.8 },
  ];

  const starPlacements2 = [
    { x: "40vw", y: "40vh", duration: 4.5 },
    { x: "75vw", y: "50vh", duration: 3.4 },
    { x: "10vw", y: "10vh", duration: 4 },
    { x: "80vw", y: "30vh", duration: 5 },
    { x: "20vw", y: "64vh", duration: 4.8 },
  ];

  const starPlacements3 = [
    { x: "30vw", y: "15vh", duration: 4.5 },
    { x: "85vw", y: "20vh", duration: 3.6 },
    { x: "5vw", y: "20vh", duration: 4 },
    { x: "70vw", y: "25vh", duration: 5.2 },
    { x: "60vw", y: "64vh", duration: 4.8 },
  ];

  const clouds = cloudPlacements.map((cloud, index) => (
    <motion.img
      key={index}
      className="cloud"
      src={Cloud}
      alt="Cloud"
      initial={{ x: cloud.x, y: cloud.y, opacity: 0.2 }}
      animate={{ x: isDarkTheme ? "-90vw" : cloud.x, 
                opacity: 1,
                }}
      transition={{ duration: cloud.duration, ease: "easeInOut" }}
    />
  ));

  const stars = starPlacements.map((star, index) => (
    <motion.img
      key={index}
      className="star"
      src={Star1}
      alt="Star"
      initial={{ x: star.x, y: star.y, opacity: 0.2 }}
      animate={{ y: !isDarkTheme ? "90vh" : star.y, 
                opacity: 1,
                rotate: 180, }}
      transition={{ duration: star.duration, type: "spring",  bounce: 0.1 }}
    />
  ));

  const stars2 = starPlacements2.map((star, index) => (
    <motion.img
      key={index}
      className="star"
      src={Star2}
      alt="Star"
      initial={{ x: star.x, y: star.y, opacity: 0.2 }}
      animate={{ y: !isDarkTheme ? "90vh" : star.y, 
                opacity: 1,
                rotate: 180, }}
      transition={{ duration: star.duration, type: "spring",  bounce: 0.1 }}
    />
  ));

  const stars3 = starPlacements3.map((star, index) => (
    <motion.img
      key={index}
      className="star"
      id="star3"
      src={Star3}
      alt="Star"
      initial={{ x: star.x, y: star.y, opacity: 0.2 }}
      animate={{ y: !isDarkTheme ? "90vh" : star.y, 
                opacity: 1,
                rotate: 180, }}
      transition={{ duration: star.duration, type: "spring",  bounce: 0.1 }}
    />
  ));

  const handleToggle = () => {
    toggleTheme(); // Call the toggleTheme function to change the theme
  };


  return (
    <div
      className={`hero-container ${isDarkTheme ? "dark-mode" : "light-mode"}`}
    >
      <div className="hero-grid">
        <div className="hero-text">
          {isDarkTheme ? 
            <h2>Designer by <a onClick={handleToggle}>day</a>, programmer by night.</h2> :
            <h2>Programmer by day, designer by <a onClick={handleToggle}>night</a>.</h2>
          }
        </div>
        <motion.div
          className="sun"
          initial={{ y: isDarkTheme ? "10vh" : "90vh", opacity: 0.2 }}
          animate={{ y: isDarkTheme ? "90vh" : "10vh", opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.div
          className="moon"
          initial={{ y: !isDarkTheme ? "10vh" : "90vh", opacity: 0.2 }}
          animate={{ y: !isDarkTheme ? "90vh" : "10vh", opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
      </div>

      {/* <motion.img
        className="stars"
        src={Stars}
        alt="Stars"
        initial={{ y: !isDarkTheme ? "10vh" : "90vh", opacity: 0.2 }}
          animate={{ y: !isDarkTheme ? "90vh" : "10vh", opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      /> */}
      <div>{stars}</div>
      <div>{stars2}</div>
      <div>{stars3}</div>
      <div>{clouds}</div>
    </div>
  );
}

export default Hero;
