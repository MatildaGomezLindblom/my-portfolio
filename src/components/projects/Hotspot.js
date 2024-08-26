import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary";
import "../../styles/Hotspot.scss";
import { useLayoutEffect } from "react";
import ButtonSecondary from "../ButtonSecondary";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";

function Hotspot() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "Hotspot",
    subtitle: "Appen för att spara och dela sina favoritställen.",
    sections: [
      {
        heading: "Utmaning",
        text: "I projekt designa och utveckla en interaktiv prototyp av en mobilapplikation, med extra fokus på tillgänglighet. Vi valde att lösa problemet med att hitta smultronställen på ett smidigt och pålitligt sätt.",
      },
      {
        heading: "Lösning",
        text: "En app med användarhantering och integrerad karta där man skapa pins för sina favoritplatser med kommentarer som delas mellan använarens vänner.",
      },
    ],
    buttonText: "Hoppa till resultatet",
    additionalInfo: [
      {
        heading: "Kontext",
        text: "Gruppprojekt 2023 i kursen Prototyputveckling för mobila applikationer.",
      },
      {
        heading: "Resurser",
        text: "5 veckor halvtid i grupp om 5 personer.",
      },
      {
        heading: "Vektyg",
        text: "Figma, VS Code, React Native.",
      },
    ],
    role: {
      heading: "Min roll och uppgift",
      tasks: [
        "UX/UI design",
        "Användartester av prototyper",
        "Designa och sätta upp databas (användare, vänner och pins)",
        "CRUD API till databasen",
        "Vännersidan",
        "Sökfunktion för vänner",
      ],
    },
  };

  const sections = [
    { id: "section1", title: "DESIGN" },
    { id: "section2", title: "UTVECKLING" },
    { id: "section3", title: "RESULTAT" },
    { id: "section4", title: "MITT BIDRAG" },
  ];

  return (
    <div className="hotspotContainer">
      <ProjectOverview projectData={projectData} />
      <div className="contentContainer">
        <div className="vertical-navbar">
          <VerticalNavbar sections={sections}></VerticalNavbar>
        </div>
        <div className="content">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="section">
              Innehåll för {section.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotspot;
