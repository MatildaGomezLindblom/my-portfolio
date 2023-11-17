import { React, useState } from "react";
import "../../styles/About.scss";
import ButtonPrimary from "../ButtonPrimary";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import star from "../../assets/about/buttonStar.svg";
import { Link, useHistory } from 'react-router-dom';

function MoreButton() {
  const [isHovered, setIsHovered] = useState(false);

  const showHead = {
    y: -75,
    rotate: -15,
    zIndex: -2,
  };

  const hideHead = {
    y: -67,
  };

  const showHand = {
    y: [
      -80, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100,
      -100,
    ],
    zIndex: -2,
    rotate: [15, 30, 15, -15, 15, 30, 15, -15, 15, 30, 15, -15, 15],
    x: 40,
    transition: {
      times: [
        0, 0.8, 1.6, 2.4, 2.2, 2.0, 2.8, 2.6, 2.4, 2.2, 4.0, 4.0, 4.0, 4.0,
      ],
      duration: 1.7,
    },
  };

  const hideHand = {
    y: -80,
    x: 40,
  };

  const showStar = {
    y: -150,
    x: -30,
    rotate: -25,
    zIndex: -2,
    scale: 1,
  };

  const hideStar = {
    y: -110,
    scale: 0.5,
  };

  const showStar2 = {
    y: -160,
    x: 130,
    rotate: 45,
    zIndex: -2,
    scale: 1.2,
  };

  const hideStar2 = {
    y: -110,
    scale: 0.5,
  };

  const showStar3 = {
    y: -60,
    x: 20,
    rotate: 65,
    zIndex: -2,
    scale: 1,
  };

  const hideStar3 = {
    y: -110,
    scale: 0.5,
  };

  const showStar4 = {
    y: -50,
    x: -80,
    rotate: 65,
    zIndex: -2,
    scale: 0.7,
  };

  const hideStar4 = {
    y: -110,
    scale: 0.1,
  };

  return (
    <div>
      <div className="about-button">
      <Link to="/MoreAboutMe">
      <ButtonPrimary
          id="moreButton"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Mer om mig
          <FaArrowRight />
        </ButtonPrimary>
        <motion.img
          src={logo}
          width="40"
          height="40"
          className="avatarHead"
          alt="Logo"
          animate={isHovered ? showHead : hideHead}
          transition={{ duration: 0.3 }}
        />
        <motion.div id="hand" animate={isHovered ? showHand : hideHand} />
        <motion.img
          src={star}
          className="starBehindButton1"
          alt="Star"
          animate={isHovered ? showStar : hideStar}
          transition={{ duration: 0.2, type: "spring", stiffness: 80 }}
        />
        <motion.img
          src={star}
          className="starBehindButton1"
          alt="Star"
          animate={isHovered ? showStar2 : hideStar2}
          transition={{ duration: 0.3, type: "spring", stiffness: 70 }}
        />
        <motion.img
          src={star}
          className="starBehindButton1"
          alt="Star"
          animate={isHovered ? showStar3 : hideStar3}
          transition={{ duration: 0.25, type: "spring", stiffness: 50 }}
        />
        <motion.img
          src={star}
          className="starBehindButton1"
          alt="Star"
          animate={isHovered ? showStar4 : hideStar4}
          transition={{ duration: 0.35, type: "spring", stiffness: 70 }}
        />
      </Link>
        
      </div>
    </div>
  );
}

export default MoreButton;
