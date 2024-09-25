import "../../styles/SoB.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import ImageCarousel from "./Carousel";
import { FaGithub } from "react-icons/fa";
import { PiPopcornFill } from "react-icons/pi";
import SoBBackground from "../../assets/projects/SoB/SoBBackground.png";
// import SoBPhotoWallBackside from "../../assets/projects/SoB/SoBPhotoWallBackside.png";

// import LoFiExampleSoB from "../../assets/projects/SoB/LoFiExampleSoB.png";
// import arrowDownRight from "../../assets/projects/Hotspot/arrowDownRight.png";
// import arrowUpRight from "../../assets/projects/Hotspot/arrowUpRight.png";
// import idea from "../../assets/projects/Hotspot/Idea.png";
// import HiFiExampleSoB from "../../assets/projects/SoB/HiFiExampleSoB.png";

// import SoBotherServices from "../../assets/projects/SoB/SoBotherServices.png";
// import SoBpersona1 from "../../assets/projects/SoB/SoBpersona1.png";
// import SoBpersona2 from "../../assets/projects/SoB/SoBpersona2.png";
// import SoBimpactEffortMatrix from "../../assets/projects/SoB/SoBimpactEffortMatrix.png";

// import SoBLoFi1 from "../../assets/projects/SoB/SoBLoFi1.png";
// import SoBLoFi2 from "../../assets/projects/SoB/SoBLoFi2.png";
// import SoBLoFi3 from "../../assets/projects/SoB/SoBLoFi3.png";
// import SoBLoFi4 from "../../assets/projects/SoB/SoBLoFi4.png";
// import SoBLoFi5 from "../../assets/projects/SoB/SoBLoFi5.png";

// import SoBloFiResults1 from "../../assets/projects/SoB/SoBloFiResults1.png";
// import SoBloFiResults2 from "../../assets/projects/SoB/SoBloFiResults2.png";
// import SoBloFiResults3 from "../../assets/projects/SoB/SoBloFiResults3.png";
// import SoBloFiResults4 from "../../assets/projects/SoB/SoBloFiResults14.png";
// import SoBloFiResults5 from "../../assets/projects/SoB/SoBloFiResults5.png";

// import SoBKnightecInstagram from "../../assets/projects/SoB/SoBKnightecInstagram.png";
// import SoBKnightecWebsite from "../../assets/projects/SoB/SoBKnightecWebsite.png";
// import SoBIcons from "../../assets/projects/SoB/SoBIcons.png";
// import SoBGraphicProfile from "../../assets/projects/SoB/SoBGraphicProfile.png";

// import SoBChanges1 from "../../assets/projects/SoB/SoBChanges1.jpg";
// import SoBChanges2 from "../../assets/projects/SoB/SoBChanges2.jpg";
// import SoBChanges3 from "../../assets/projects/SoB/SoBChanges3.jpg";
// import SoBChanges4 from "../../assets/projects/SoB/SoBChanges4.jpg";
// import SoBChanges5 from "../../assets/projects/SoB/SoBChanges5.jpg";
// import SoBFinalHiFi from "../../assets/projects/SoB/SoBFinalHiFi.png";

function SoB() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "Värdeskapande digitala tjänster i vården",
    subtitle:
      "Ett utredande arbete och förslag på hur regionen kan öka användningen av e-tjänsten Stöd och Behandling.",
    sections: [
      {
        heading: "Utmaning",
        text: "Region Västernorrland är en av de regioner som använder Stöd och Behandling minst till förhållandet invånare.",
      },
      {
        heading: "Lösning",
        text: "Indentifiering och synliggörande av problem och lösningar, bland annat i form av ett processförslag och ett marknadsföringsmaterial.",
      },
    ],
    buttonText: "Hoppa till resultatet",
    additionalInfo: [
      {
        heading: "Kontext",
        text: "Sommarinternship 2024 som konsult hos CGI med Region Västernorrland som kund, parallelt med en kurs på 7.5hp i Design thinking via Mittuniversitetet.",
      },
      {
        heading: "Resurser",
        text: "8 veckor heltid tillsammans med en annan civilingenjörsstudent.",
      },
      {
        heading: "Vektyg",
        text: "Figma, Teams, Microsoft Forms.",
      },
    ],
    role: {
      heading: "Min roll och uppgift",
      tasks: ["Verksamhetsutveckling", "Konsult", "UX/UI design", "Intervjuer", "Enkäter"],
    },
  };

  const carouselImages = [
    // {
    //   src: SoBLoFi1,
    //   legend:
    //     "Version 1 har en sidebar med filtreringsfunktionalitet och en karusell med alla aktuella anslag på rullning.",
    // },
    // {
    //   src: SoBLoFi2,
    //   legend: "Verion 2 har profilen som en popup.",
    // },
    // {
    //   src: SoBLoFi3,
    //   legend: "Version 3 har mycket funktionalitet uppe i en navbar.",
    // },
    // {
    //   src: SoBLoFi4,
    //   legend:
    //     "Version 4 har initialt en rätt avancerad sökfunktion som sedan byttes till en utfällningsbar filtreringsruta.",
    // },
    // {
    //   src: SoBLoFi5,
    //   legend:
    //     "Version 5 har stort fokus på en mer proffisionell framsida och en mer personlig baksida på profilen.",
    // },
  ];

  const LoFiImages = [
    // SoBloFiResults1,
    // SoBloFiResults2,
    // SoBloFiResults3,
    // SoBloFiResults4,
    // SoBloFiResults5,
  ];

  const HiFiChangesImages = [
    // SoBChanges1,
    // SoBChanges2,
    // SoBChanges3,
    // SoBChanges4,
    // SoBChanges5,
  ];

  const sections = [
    {
      id: "section1",
      title: "BAKGRUND",
      subtitle: "Om internshipet, uppdraget och e-tjänsten i fokus.",
      content: (
        <div className="SoB-section">
          {/* <div className="quotes">
            <div className="speech-bubble">"hej"</div>
            <div className="speech-bubble">hej</div>
            <div className="speech-bubble">hej</div>
          </div> */}
          <h3>Internshipet</h3>
          <p>
            Mittuniversitetets Internship för blivande civilingenjörer erbjuder
            civilingenjörsstudenter i årskurs 3 och 4 en chans att arbeta med
            riktiga uppdrag hos företag eller myndigheter under sommaren.
            Programmet kombinerar praktiskt arbete med en sommarkurs i Design
            Thinking (7,5 hp). Jag sökte till Region Västernorrland och CGI's
            uppdrag på temat <i>Värdeskapande digitala tjänster i vården</i> och
            blev, tillsammans med en annan student, utvald till uppdraget.
          </p>

          <h3>Uppdraget</h3>
          <p>
            Vi blev tilldelade 2 handledare på CGI och 4 handledare på regionen.
            Två av handledarna på regionen var objektspecialiser för e-tjänsten
            Stöd och Behandling. De var tydliga med att vi skulle få fria tyglar
            men föreslog att vi jobbade med fokus på ett riktigt problem, vilket
            i detta fall var att Stöd och behandling inte används lika mycket
            som önskat.
          </p>

          <h3>Vad är Stöd och Behandling</h3>
          <p>
            Det är en e-tjänst som finns tillgänglig via 1177.se. Det är kort
            sagt en plattform där vårdgivare kan erbjuda kompletterande stöd och
            behandling digitalt till sina patienter, via olika program.
            Plattformen i sig ägs av Inera och finns tillgänglig för alla
            regioner, men det är regionerna själva som förvaltar tjänsten
            regionalt. Syftet med Stöd och Behandling är att tjänsten ska göra
            vården mer tillgänglig och patienten mer delaktig, samt att
            vårdgivare ska få tid för fler patienter. Hur kommer det sig då att
            vårdgivare inte ordinerar de program som reginen skapar och köper
            in?
          </p>
          <a href="https://www.inera.se/tjanster/alla-tjanster-a-o/stod-och-behandling/">
            Mer om Stöd och Behandling här
          </a>
          <img
            src={SoBBackground}
            alt="An illustration of Stöd och Behandling."
          ></img>
        </div>
      ),
    },
    {
      id: "results",
      title: "HELA PROCESSEN",
      subtitle:
        "Från problemdefinition, genom hela designprocessen till det slutgilitga resultatet.",
      content: (
        <div className="SoB-section">
          <p>
            Arbetet avslutades med en presentation för kursen, för CGI och för
            Region Västernorrland. På den sistnämda bjöd vi in alla som på något
            sätt deltagit i vårt arbete. Två av dessa var de regionala
            förvaltarna av Stöd och Behandling i Västerbotten, och de bjöd in
            oss att delta i ett webbinarium där vi återigen körde igenom
            presentationen.
            <br />
            <br />
            Denna presentation spelades in så istället för att återberätta hela
            processen och resultatet i text lägger jag in presentationen här!
          </p>
          <div>
            <iframe
              src={`https://www.youtube.com/embed/P9VEM8QGNog`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      ),
    },
    {
      id: "section3",
      title: "AVSLUTANDE TANKAR",
      subtitle: "Ett toppenuppdrag!",
      content: (
        <div className="SoB-section">
          <p>
            Internshipet var väldigt givande. Jag fick chansen att
            applicera mina kunskaper på ett verklig problem, samtidigt som jag
            fick lära mig en hel del nya grejer också! Förutom att få en bättre
            inblick i hur Stöd och Behandling fungerar och hur vården är
            uppbyggd i stort fick jag även erfarenhet att jobba mot en kund. Det
            var en väldigt spännande process där den utforskande delen fick ta
            mycket plats. Vi fick fria tyglar och samlade in data på flera olika
            sätt för att lyckas fånga problemet och dess lösning, samtidigt som
            vi hela tiden hade en dialog med våra handledare.
            <br />
            <br />
            Vårt arbete verkar uppskattat och vi fick mycket fina ord på
            slutpresenationen, både från CGI och Region Västernorrlands håll,
            men även ifrån andra aktörer som varit delaktiga i processen. Allt
            material har överlämnats till regionen och förhoppningsvis kommer
            det till nytta framöver!
            <br />
            <br />
            <a href="https://www.miun.se/utbildning/civing/internship/intervjusida/matilda-gomez-lindblom-och-joline-hellstrom/">
            Läs mer om vårt internship på miun.se
          </a>
          </p>
          <p><i>Stort tack till Joline Hellström som varit min fantastiska partner i projektet!</i></p>
        </div>
      ),
    }
  ];

  return (
    <div className="SoB-container">
      <div className="SoB-hero-container">
        <ProjectOverview projectData={projectData} />
      </div>
      <div className="content-container">
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

export default SoB;
