import { motion, useTransform, useScroll, circOut } from "framer-motion";
import React, { useRef, Suspense } from "react";
import "../../styles/Projects.scss";
import Pill from "../Pill";
import ButtonPrimary from "../ButtonPrimary";
import { FaArrowRight } from "react-icons/fa";
import Loading from "../Loading";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Project({ title, description, url, pills, handleSplineLoad }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end start", "start end"],
    });
    const y = useTransform(
      scrollYProgress,
      [0, 0.4, 0.6, 1],
      [-400, -50,-50, 100],
      { ease: circOut }
    );
    return (
      <div className="project">
        <div ref={ref}>
        <Suspense fallback={<Loading/>}>
          <Spline className="mockup" scene={url} onLoad={handleSplineLoad}/>
          </Suspense>
        </div>
        <motion.div className="project-info" style={{ y }}>
          <h2>{title}</h2>
          <div className="tag-container">
            {pills && pills.map((pill, index) => (
              <Pill key={index} title={pill} />
            ))}
          </div>
          <p>{description}</p>
          <ButtonPrimary disabled={false}>Läs mer <FaArrowRight /></ButtonPrimary>
        </motion.div>
      </div>
    );
  }

  export default Project;