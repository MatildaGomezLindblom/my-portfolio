import React from "react";
import { useNavigate } from "react-router-dom";
import ModeToggler from "./ModeToggler";
import "../styles/Navbar.scss"; // Create a new stylesheet for Navbar styles
import logo from "../assets/logo.png";

import { motion} from "framer-motion";

function Navbar({ toggleTheme }) {
  const navigate = useNavigate();

  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

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
      <ul className="navbar-list">
        <li>
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
        <li>
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
        <li>
          <a href="./CV.pdf" download="CV.pdf">
            CV
          </a>
        </li>
        <li>
          <ModeToggler toggleTheme={toggleTheme} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
