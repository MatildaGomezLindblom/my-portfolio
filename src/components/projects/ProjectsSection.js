import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { delay, motion } from 'framer-motion';
import "../../styles/ProjectsSection.scss";

function ProjectsSection() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextPage, setNextPage] = useState('');
  const navigate = useNavigate();
  const [animationProps, setAnimationProps] = useState({ scale: 1, x: 0, y: 0 });

  // Function to handle the image click and start the transition
  const handleImageClick = (page) => {
    // Get properties of element
    const element = document.querySelector(".project-1");
    const elementRect = element.getBoundingClientRect();

    //get element and screen dimensions
    const elementWidth = elementRect.width;
    const elementHeight = elementRect.height;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    // Calculate the scale factor to cover the entire screen width
    const scaleFactor = screenWidth / elementWidth;
    console.log(scaleFactor);

        // Calculate translation to center the element
        const scaledWidth = elementWidth * scaleFactor;
        const scaledHeight = elementHeight * scaleFactor;
  
     // Calculate translation to center the element
     const translateX = (screenWidth - scaledWidth) / 2 - elementRect.left + elementWidth / 2;
     const translateY = (screenHeight - scaledHeight) / 2 - elementRect.top + elementHeight / 2;
      
     // Set the animation properties
     setAnimationProps({ scale: scaleFactor, x: translateX, y: translateY, zIndex: 10000 });
     setIsTransitioning(true);
  
    // Apply the calculated scale factor
    setTimeout(() => {
      navigate(page);
    }, 800); // Adjust the timeout to match the animation duration
  };

  return (
    <div className="projects-container">
      <div className="section-title">
        <div className="line"></div>
        <h3>Utvalda projekt</h3>
        <div className="line"></div>
      </div>
      <div className="featured-projects">
      <motion.div
          className="project project-1"
          initial={{ scale: 1, x: 0, y: 0, zIndex: 10 }}
          animate={isTransitioning ? animationProps : {scale: 1, x: 0, y: 0, zIndex: 10}}
          transition={{ duration: 0.8, type: "easeIn" }}
          onClick={() => handleImageClick('/Hotspot')}
        >
          {!isTransitioning && <div className="overlay"> 
            <p>React Native • Användarhantering • UX • Firebase</p>
            <h4>HOTSPOT - Appen för att spara och dela sina favoritplatser med vänner.</h4>
          </div>
          }
        </motion.div>
        <div className="project project-2">
          <Link
            to="/Project2" // Replace with your actual route
            onClick={() => handleImageClick('/Project2')}
          >
            <div className="overlay">
              <h4>Projekt 2</h4>
            </div>
          </Link>
        </div>
        <div className="project project-3">
          <Link
            to="/Project3" // Replace with your actual route
            onClick={() => handleImageClick('/Project3')}
          >
            <div className="overlay">
              <h4>Projekt 3</h4>
            </div>
          </Link>
        </div>
        <div className="project project-4">
          <Link
            to="/Project4" // Replace with your actual route
            onClick={() => handleImageClick('/Project4')}
          >
            <div className="overlay">
              <h4>Projekt 4</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;