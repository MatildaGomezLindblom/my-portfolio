import "../../styles/ProjectsSection.scss";
import { Link } from "react-router-dom";

function ProjectsSection() {
  //determine if device is touch or not
  if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
  }

  return (
    <div class="projects-container">
      <div class="section-title">
        <div class="line"></div>
        <h3>Utvalda projekt</h3>
        <div class="line"></div>
      </div>
      <div class="featured-projects">
        <div class="project project-1">
          <Link
            to="/Hotspot"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <div class="overlay">
              <p>React Native • Användarhantering • UX • Firebase</p>
              <h4>
                HOTSPOT - Appen för att spara och dela sina favoritplatser med
                vänner.
              </h4>
            </div>
          </Link>
        </div>
        <div class="project project-2">
          <div class="overlay">
            <h4>Projekt 2</h4>
          </div>
        </div>
        <div class="project project-3">
          <div class="overlay">
            <h4>Projekt 3</h4>
          </div>
        </div>
        <div class="project project-4">
          <div class="overlay">
            <h4>Projekt 4</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
