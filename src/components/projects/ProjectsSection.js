import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/ProjectsSection.scss";

function ProjectsSection() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitioningProject, setTransitioningProject] = useState(null);
  const navigate = useNavigate();
  const [animationProps, setAnimationProps] = useState({
    scale: 1,
    x: 0,
    y: 0,
  });

  const projects = [
    { id: "project-1", page: "/Hotspot", tags: "React Native • Användarhantering • UX • Firebase", title: "HOTSPOT - Appen för att spara och dela sina favoritplatser med vänner."},
    { id: "project-2", page: "/Hotspot", tags: "", title: ""},
    { id: "project-3", page: "/Hotspot", tags: "", title: ""},
    { id: "project-4", page: "/Hotspot", tags: "", title: ""},
  ];

  // Function to handle the image click and start the transition
  const handleImageClick = (project) => {
    // Get properties of element
    const element = document.querySelector(`#${project.id}`);
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
    const translateX =
      (screenWidth - scaledWidth) / 2 - elementRect.left + elementWidth / 2;
    const translateY =
      (screenHeight - scaledHeight) / 2 - elementRect.top + elementHeight / 2;

    // Set the transitioning project and its animation properties
    setTransitioningProject({
      id: project.id,
      scale: scaleFactor,
      x: translateX,
      y: translateY,
      zIndex: 10000,
    });

    // Apply the calculated scale factor
    setTimeout(() => {
      navigate(project.page);
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
      {projects.map((project) => (
        <motion.div
        key={project.id} id={project.id}
        className="project"
        initial={{ scale: 1, x: 0, y: 0, zIndex: 10 }}
        animate={
          transitioningProject?.id === project.id
            ? {
                scale: transitioningProject.scale,
                x: transitioningProject.x,
                y: transitioningProject.y,
                zIndex: transitioningProject.zIndex,
              }
            : { scale: 1, x: 0, y: 0, zIndex: 10 }
        }
        transition={{ duration: 0.8, type: "easeIn" }}
        onClick={() => handleImageClick(project)}
      >
        {transitioningProject?.id !== project.id && (
          <div className="overlay">
            <p>{project.tags}</p>
            <h4>
              {project.title}
            </h4>
          </div>
        )}
      </motion.div>
          ))}
 {/*        


        <motion.div
          className="project project-2"
          initial={{ scale: 1, x: 0, y: 0, zIndex: 10 }}
          animate={
            isTransitioning
              ? animationProps
              : { scale: 1, x: 0, y: 0, zIndex: 10 }
          }
          transition={{ duration: 0.8, type: "easeIn" }}
          onClick={() => handleImageClick("/Hotspot")}
        >
          {!isTransitioning && (
            <div className="overlay">
              <p>React Native • Användarhantering • UX • Firebase</p>
              <h4>
                HOTSPOT - Appen för att spara och dela sina favoritplatser med
                vänner.
              </h4>
            </div>
          )}
        </motion.div>
        <motion.div
          className="project project-3"
          initial={{ scale: 1, x: 0, y: 0, zIndex: 10 }}
          animate={
            isTransitioning
              ? animationProps
              : { scale: 1, x: 0, y: 0, zIndex: 10 }
          }
          transition={{ duration: 0.8, type: "easeIn" }}
          onClick={() => handleImageClick("/Hotspot")}
        >
          {!isTransitioning && (
            <div className="overlay">
              <p>React Native • Användarhantering • UX • Firebase</p>
              <h4>
                HOTSPOT - Appen för att spara och dela sina favoritplatser med
                vänner.
              </h4>
            </div>
          )}
        </motion.div>
        <motion.div
          className="project project-4"
          initial={{ scale: 1, x: 0, y: 0, zIndex: 10 }}
          animate={
            isTransitioning
              ? animationProps
              : { scale: 1, x: 0, y: 0, zIndex: 10 }
          }
          transition={{ duration: 0.8, type: "easeIn" }}
          onClick={() => handleImageClick("/Hotspot")}
        >
          {!isTransitioning && (
            <div className="overlay">
              <p>React Native • Användarhantering • UX • Firebase</p>
              <h4>
                HOTSPOT - Appen för att spara och dela sina favoritplatser med
                vänner.
              </h4>
            </div>
          )}
        </motion.div> */}
      </div>
    </div>
  );
}

export default ProjectsSection;
