import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";
import "../styles/Navbar.scss"; // Create a new stylesheet for Navbar styles
import logo from "../assets/logo.png";

import { FaBars } from "react-icons/fa";

import { motion } from "framer-motion";

function Navbar({ toggleTheme }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  const toggleMenu = () => {
    setShowNavbar(!showNavbar);
  };

  const removeActive = () => {
    setShowNavbar(false);
  };

  return (
    <nav className="navbar-container">
      <a
        className="hero-link"
        href="/#hero"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("hero");
        }}
      >
        <motion.div whileHover={{ scale: [null, 1.25, 1.25], rotate: -15 }}>
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </motion.div>
      </a>
      <ul className={`navbar-list  ${showNavbar && "active"}`}>
        <li onClick={removeActive}>
          <a
            href="/#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            OM MIG
          </a>
        </li>
        <li onClick={removeActive}>
          <a
            href="/#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            PROJEKT
          </a>
        </li>
        <li onClick={removeActive}>
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            KONTAKT
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="./CV.pdf" download="CV.pdf">
            CV
          </a>
        </li>
        <li onClick={removeActive}>
          <ModeSwitch toggleTheme={toggleTheme} />
        </li>
      </ul>
      <FaBars className="menu-toggle" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
