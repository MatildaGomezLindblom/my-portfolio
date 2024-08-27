import "../../styles/Hotspot.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import arrowUpRight from "../../assets/projects/Hotspot/arrowUpRight.png";
import arrowDownRight from "../../assets/projects/Hotspot/arrowDownRight.png";
import idea from "../../assets/projects/Hotspot/Idea.png";
import hotspotHiFiPreview from "../../assets/projects/Hotspot/HotspotHiFiPreview.png";
import hotspotLoFiPreview from "../../assets/projects/Hotspot/HotspotLoFiPreview.png";
import ImageCarousel from "./Carousel";
import hotspotVersion1 from "../../assets/projects/Hotspot/hotspotVersion1.png";
import hotspotVersion2 from "../../assets/projects/Hotspot/hotspotVersion2.png";
import hotspotVersion3 from "../../assets/projects/Hotspot/hotspotVersion3.png";
import hotspotFinalLoFi from "../../assets/projects/Hotspot/hotspotFinalLoFi.png";
function Hotspot() {
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

  const images = [
    { src: hotspotVersion1, legend: 'I version 1 har funktionen “lägg till pin” en egen knapp i navbaren, vännersidan ligger i profilsidan.' },
    { src:  hotspotVersion2, legend: 'I version 2 är lägg till pin en flytande knapp vilket ger plats för vänner i navbaren.' },
    { src: hotspotVersion3, legend: 'Version 3 har en navbar som ändrar funktionalitet beroende på vilken sida användaren befinner sig på.' },
  ];

  const sections = [
    {
      id: "section1",
      title: "DESIGN",
      subtitle: "Från idé till testad hi-fi i Figma på en vecka.",
      content: (
        <div>
          <div>
            <p>
              Tanken var att skapa en applikation som låter användaren pinna
              platser på kartan, både för sin egen skull, men även för att skapa
              ett rekommendationssystem för nära och kära.
            </p>
            <div className="design-overview">
              <div className="design-overview-content">
                <img id="idea" src={idea}></img>
                <img id="arrowDownRight" src={arrowDownRight}></img>
                <img id="hotspotLoFiPreview" src={hotspotLoFiPreview}></img>
                <img id="arrowUpRight" src={arrowUpRight}></img>
                <img id="hotspotHiFiPreview" src={hotspotHiFiPreview}></img>
              </div>
            </div>
          </div>
          <div className="section-section">
            <h3>Lo-fi</h3>
            <p>
              Vi visste att vi behövde en karta med sök- och
              filtreringsfunktion, skapandet och uppvisandet av pins, profiler,
              och funktionalitet för att logga in och ut samt hantera vänner.
              Utifrån detta skapades en lo-fi prototyp i Figma. Den största
              utmaningen var att lista ut vart alla dessa komponenter skulle
              vara placerade för att navigeringen skulle bli så intuitiv som
              möjligt. Därför gjordes 3 versioner som sedan testades på 6
              användare.
            </p>
            <div>
              <ImageCarousel className="carousel-container" images={images}></ImageCarousel>
            </div>
          </div>
          <div className="section-section hotspot-testing-results">
            <div>
              <h3>Resultat av testning</h3>
              <p>
                Testningen visade att det inte uppskattades när ikonen i
                navbaren ändrades beroende på vilken sida man var på. Därför var
                version 1 och 2 favoriterna. Vi valde att fortsätta med version
                1 då navigationen liknande andra populära appar såsom instagram,
                med en del justeringar efter feedback från testningen.{" "}
              </p>
              <p className="list-title">Ändringar som gjordes var följande:</p>
              <ul>
                <li>
                  Endast en karta istället för seperata för mina pins och
                  vänners pins.
                </li>
                <li>Inställningar i högra hörnet i profilen.</li>
                <li>
                  Preview på vänner i profilen, istället för knappen endast.
                </li>
              </ul>
            </div>
            <div>
              <img
                src={hotspotFinalLoFi}
                alt="finished lo-fi-proptotype after testing with friends under the users profile."
              ></img>
            </div>
          </div>
        </div>
      ),
    },
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
              <h2 className="project-section-title">{section.title}</h2>
              <h4 className="project-section-subtitle">{section.subtitle}</h4>
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotspot;
