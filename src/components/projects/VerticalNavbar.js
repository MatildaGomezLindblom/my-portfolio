import React, { useEffect } from 'react';
import "../../styles/VerticalNavbar.scss"

function VerticalNavbar({ sections }) {

    function scrollToSection(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
      }

  useEffect(() => {
    const handleScroll = () => {
        //store sections and links
      const sectionElements = document.querySelectorAll('.section');
      const navLinks = document.querySelectorAll('.vertical-navbar a');

      let currentSection = '';

      //Determine if section is in view
      sectionElements.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      //set link as active if currently on that section
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `/#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="vertical-navbar-container">
      <div className="vertical-navbar-container-top"></div>
      <a onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }} >ÖVERSIKT</a>
      {sections.map((section, index) => (
        <a
        key={index} href={`/#${section.id}`} id={`nav-${section.id}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(section.id);
        }}
      >
          {section.title}
        </a>
      ))}
    </div>
  );
}

export default VerticalNavbar;
