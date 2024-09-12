import React from "react";
import "../../styles/Hotspot.scss";
import ButtonSecondary from "../ButtonSecondary";
import "../../styles/ProjectOverview.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

function ProjectOverview({ projectData }) {
  const [isVisible, setIsVisible] = useState(false);
  const [applyStyles, setApplyStyles] = useState(false);

  //timer for show overlay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  //timer for allow scroll animation
  useEffect(() => {
    if (isVisible) {
      const styleTimer = setTimeout(() => {
        setApplyStyles(true);
      }, 1000);

      return () => clearTimeout(styleTimer);
    }
  }, [isVisible]);

  //change styles on scroll
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]); // Scales down the div
  const y = useTransform(scrollYProgress, [0, 0.1, 1], [0, -200, 100]); // Moves the div upwards to simulate rolling back into the background

  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="heroContainer">
      <motion.div
        style={applyStyles ? { scale, y } : {}}
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: isVisible ? 0 : "100vh", opacity: isVisible ? 1 : 0 }}
        transition={{
          type: "spring",
          stiffness: 30,
          damp: 10,
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="projectOverview">
          <div className="overviewSection">
            <div>
              <h2>{projectData.title} {projectData.pillText && <span className="projectBadge">{projectData.pillText}</span>}</h2>
              <h4>{projectData.subtitle}</h4>
            </div>
            {projectData.sections.map((section, index) => (
              <div key={index}>
                <h3>{section.heading}</h3>
                <p>{section.text}</p>
              </div>
            ))}
            <div>
              <ButtonSecondary
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("results");
                }}
              >
                {projectData.buttonText}
              </ButtonSecondary>
            </div>
          </div>
          <div className="line"></div>
          <div className="overviewSection side">
            <div>
              {projectData.additionalInfo.map((info, index) => (
                <div key={index}>
                  <h3>{info.heading}</h3>
                  <p>{info.text}</p>
                </div>
              ))}
            </div>
            <div>
              <div>
                <h3>{projectData.role.heading}</h3>
                <ul>
                  {projectData.role.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectOverview;
