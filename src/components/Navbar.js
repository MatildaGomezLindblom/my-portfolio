import React from "react";
import { useNavigate } from "react-router-dom";
import ModeToggler from "./ModeToggler";

function Navbar({toggleTheme}) {
  const navigate = useNavigate();

  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav>
      <ul>
      <li>
          <ModeToggler toggleTheme={toggleTheme}/>
        </li>
        <li>
          <a
            href="/#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            Hero
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
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
