import React from 'react';

function Navbar() {
    function scrollToSection(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      }
      
    return (
      <nav>
        <ul>
          <li>
            <a href="#hero" onClick={() => scrollToSection('hero')}>Hero</a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
  

export default Navbar;
