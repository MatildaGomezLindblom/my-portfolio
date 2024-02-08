/* import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/Projects.scss";
import ButtonPrimary from "../ButtonPrimary";
import { FaArrowRight } from "react-icons/fa";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";
import ProjectsCarousel from "./ProjectsCarousel";


function Projects() { 
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
    return (
      <div className="projects-container">
        <div className="project y mandatory-scroll-snapping" dir="ltr">
        <img className="carousel-image" src={`https://via.placeholder.com/600`} alt="A London skyscraper" />
        <img className="carousel-image" src={`https://via.placeholder.com/600`} alt="A London skyscraper" />
        <img className="carousel-image" src={`https://via.placeholder.com/600`} alt="A London skyscraper" />
        <img className="carousel-image" src={`https://via.placeholder.com/600`} alt="A London skyscraper" />
        </div>
      </div>
    );
  }

export default Projects; */

// Photos from https://citizenofnowhe.re/lines-of-the-city
/* import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={`https://via.placeholder.com/600`} alt={`A London skyscraper #00${id}`} />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

function Projects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="hej">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}

export default Projects; */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../styles/Projects.scss";
import DigitalPhotoWall from "../../assets/projects/DigitalPhotoWallHero.png";
import Hotspot from "../../assets/projects/HotspotHero.png";
import Luckan from "../../assets/projects/LuckanHero.png";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/scroll-linked-content-reveal-animation
 */
function Project() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const imageValueY = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    ["0%", "0%", "0%"]
  );
  const imageValueX = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    ["-100%", "0%", "-100%"]
  );

  const images = [
    { id: 1, src: DigitalPhotoWall },
    { id: 2, src: DigitalPhotoWall },
    { id: 1, src: DigitalPhotoWall },
  ];

  return (
    <section className="scroll-container" ref={containerRef}>
        <div className="img-container">
          <motion.div
            className="img-inner"
            style={{ translateX: imageValueX, translateY: imageValueY }}
          >
            <img
              className="project-image"
              src={DigitalPhotoWall}
              alt="a green plant"
            />
          </motion.div>
        </div>
        <div className="copy">
{/*text hereee*/}
        </div>
    </section>
  );
}

function Projects() {
  
    return (
      <>
      <Project/>
      <Project style={{marginTop: "100vh"}}/>
      <Project/>
      </>
    );
  }
  export default Projects;

  /* import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/Projects.scss";
import ButtonPrimary from "../ButtonPrimary";
import { FaArrowRight } from "react-icons/fa";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";
import ProjectsCarousel from "./ProjectsCarousel";


function Projects() { 
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
    return (
      <div className="projects-container">
        <div className="project y mandatory-scroll-snapping" dir="ltr">
        <img className="carousel-image" src={`https://via.placeholder.com/600`} alt="A London skyscraper" />
        <img className="carousel-image" src={`https://via.placeholder.com/600`} alt="A London skyscraper" />
        <img className="carousel-image" src={`https://via.placeholder.com/600`} alt="A London skyscraper" />
        <img className="carousel-image" src={`https://via.placeholder.com/600`} alt="A London skyscraper" />
        </div>
      </div>
    );
  }

export default Projects; */

// Photos from https://citizenofnowhe.re/lines-of-the-city
/* import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={`https://via.placeholder.com/600`} alt={`A London skyscraper #00${id}`} />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

function Projects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="hej">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}

export default Projects; */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../styles/Projects.scss";
import DigitalPhotoWall from "../../assets/projects/DigitalPhotoWallHero.png";
import Hotspot from "../../assets/projects/HotspotHero.png";
import Luckan from "../../assets/projects/LuckanHero.png";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/scroll-linked-content-reveal-animation
 */
function Project() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const imageValueY = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    ["0%", "0%", "0%"]
  );
  const imageValueX = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    ["-100%", "0%", "-100%"]
  );

  const images = [
    { id: 1, src: DigitalPhotoWall },
    { id: 2, src: DigitalPhotoWall },
    { id: 1, src: DigitalPhotoWall },
  ];

  return (
    <section className="scroll-container" ref={containerRef}>
        <div className="img-container">
          <motion.div
            className="img-inner"
            style={{ translateX: imageValueX, translateY: imageValueY }}
          >
            <img
              className="project-image"
              src={DigitalPhotoWall}
              alt="a green plant"
            />
          </motion.div>
        </div>
        <div className="copy">
{/*text hereee*/}
        </div>
    </section>
  );
}

function Projects() {
  
    return (
      <>
      <Project/>
      <Project style={{marginTop: "100vh"}}/>
      <Project/>
      </>
    );
  }
  export default Projects;

