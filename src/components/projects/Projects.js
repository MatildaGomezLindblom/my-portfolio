import React, { Suspense } from 'react';
import "../../styles/Projects.scss";
const Project = React.lazy(() => import('./Project'));

const projectData = [
  {
    id: 1,
    title: "MemoSphere",
    description:
      "AI driven applikation för att hålla kontakten med nära och kära genom veckovisa inlägg.",
      pills: ["#Apputveckling", "#UX/UI", "#React Native"],
    url: "https://draft.spline.design/PqRZgX9zUPXYP5iD/scene.splinecode",
  },
  {
    id: 2,
    title: "Hotspot",
    description:
      "Appen för att spara och dela sina favoritplatser med sina vänner.",
      pills: ["#Apputveckling", "#UX/UI", "#React Native"],
    url: "https://draft.spline.design/8ItPHvy9WpNfyv6u/scene.splinecode",
  },
  {
    id: 3,
    title: "Digital fotovägg",
    description:
      "Ett digitalt och interaktivt komplement till Knightecs fysiska fotovägg.",
      pills: [ "#UX/UI", "#Figma", "#Användarstudier"],
    url: "https://draft.spline.design/DaQZdZYfoCbEBsrg/scene.splinecode",
  },
];

function Projects(doneLoading) {

  const projectSum = projectData.map((project)=> (projectSum + project.id));

  const handleDoneLoading = (id) => {
    doneLoading();
    console.log('current id', id);
    const currentSum = currentSum + id;
    if (currentSum === projectSum) {
      doneLoading();
    }
  };

  return (
    <div className="projects-container">
       <Suspense fallback={<div>Loading...</div>}>
       {projectData.map((project) => (
        <Project
          className="project-image"
          key={project.id}
          description={project.description}
          title={project.title}
          url={project.url}
          pills={project.pills}
          handleSplineLoad={handleDoneLoading(project.id)}
        />
      ))}
       </Suspense>
    </div>
  );
}

export default Projects;
