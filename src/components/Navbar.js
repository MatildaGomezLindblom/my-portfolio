import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";
import "../styles/Navbar.scss"; // Create a new stylesheet for Navbar styles
import logo from "../assets/logo.png";

import { FaBars } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";

function Navbar({ toggleTheme }) {
  const navigate = useNavigate();
  const location = useLocation();
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

  // Determine the current route
  const [currentPath, setCurrentPath] = useState(location.hash); // Initialize the current path based on hash

  useEffect(() => {
    setCurrentPath(location.pathname); // Update the path whenever the location changes
    console.log(location.pathname); // Log the current path
  }, [location]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Render content based on the current route
  const renderNavbarContent = () => {
    switch (currentPath) {
      case "/":
        console.log(currentPath);
        return (
          <div className="navbar-container">
            <a
              className="hero-link"
              href="/#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <motion.div
                whileHover={{ scale: [null, 1.25, 1.25], rotate: -15 }}
              >
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
                  href="/#projectsSection"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projectsSection");
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
                <a href="./CV.pdf" download="CV.pdf" className="CV">
                  CV <IoMdDownload />
                </a>
              </li>
              <li onClick={removeActive}>
                <ModeSwitch toggleTheme={toggleTheme} />
              </li>
            </ul>
            <FaBars className="menu-toggle" onClick={toggleMenu} />
          </div>
        );
      default:
        return <div className="goBack">
        <button onClick={() => navigate(-1)}><FaArrowLeft /> TILLBAKA</button>
        </div>;
    }
  };

  return <nav className="navbar">{renderNavbarContent()}</nav>;
}

export default Navbar;
