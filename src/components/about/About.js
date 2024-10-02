import React, { useEffect, useRef, useState } from 'react';
import "../../styles/About.scss";
import MoreButton from "./MoreButton";
import Me from "../../assets/about/MatildaCutOut.png";
import MySkills from "./MySkills";

function About() {
  const matildaRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); //stop observing after the first intersection
        }
      },
      { threshold: 0.3 } 
    );

    if (matildaRef.current) {
      observer.observe(matildaRef.current);
    }

    return () => {
      if (matildaRef.current) {
        observer.unobserve(matildaRef.current);
      }
    };
  }, []);
  
  return (
    <div className="about-container">
      {/* <div class="custom-shape-divider-bottom-1699302488">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div> */}
      <div className="space"></div>
      <div className="fade-divider"></div>
      <div className="about-grid">
        <div  ref={matildaRef}
      className={`matilda-cut-out ${inView ? 'in-view' : ''}`}>
          <img src={Me} alt="Matilda" />
        </div>
        <div className={`about-text-section ${inView ? 'in-view' : ''}`}>
          <h2>
            Hej! Mitt namn är <mark>Matilda Gomez Lindblom</mark>
          </h2>
          <p>
            Som civilingenjörsstudent i interaktion och design kombinerar jag
            mina intressen för skapande och problemlösning med min breda
            kompetens för att skapa meningsfulla användarupplevelser där
            användaren står i centrum.
          </p>
          {/* <MoreButton></MoreButton> */}
        </div>
      </div>
      <MySkills></MySkills>
      <div className="space"></div>
    </div>
  );
}

export default About;
