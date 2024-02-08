import { motion, useTransform, useScroll, circOut } from "framer-motion";
import { useRef } from "react";
import "../../styles/Projects.scss";
import Spline from "@splinetool/react-spline";
import Pill from "../Pill";
import ButtonPrimary from "../ButtonPrimary";
import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "MemoSphere",
    description:
      "AI driven applikation för att hålla kontakten med nära och kära genom veckovisa inlägg.",
      pills: ["#Apputveckling", "#UX/UI"],
    url: "https://draft.spline.design/PqRZgX9zUPXYP5iD/scene.splinecode",
  },
  {
    id: 2,
    title: "MemoSphere",
    description:
      "AI driven applikation för att hålla kontakten med nära och kära genom veckovisa inlägg.",
      pills: ["#Apputveckling", "#UX/UI"],
    url: "https://draft.spline.design/PqRZgX9zUPXYP5iD/scene.splinecode",
  },
  /*{
    id: 3,
    text: "Forest",
    url: "https://draft.spline.design/K3MDvklANI32PQMH/scene.splinecode",
  },
  {
    id: 4,
    text: "Vietnam",
    url: "https://draft.spline.design/K3MDvklANI32PQMH/scene.splinecode",
  }, */
];

function Images({ title, description, url, pills }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-300, -100,-100, 100],
    { ease: circOut }
  );
  return (
    <div className="project">
      <div ref={ref}>
        <Spline className="mockup" scene={url} />
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

function Projects() {
  return (
    <div className="projects-container">
      {data.map((img) => (
        <Images
          className="project-image"
          key={img.id}
          description={img.description}
          title={img.title}
          url={img.url}
          pills={img.pills}
        />
      ))}
    </div>
  );
}

export default Projects;
