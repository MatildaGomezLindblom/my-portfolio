import "../../styles/DF.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import ImageCarousel from "./Carousel";
import { FaGithub } from "react-icons/fa";
import DFPhotoWallFront from "../../assets/projects/DF/DFPhotoWallFront.png";
import DFPhotoWallBackside from "../../assets/projects/DF/DFPhotoWallBackside.png";
// import arrowDownRight from "../../assets/projects/Hotspot/arrowDownRight.png";
// import idea from "../../assets/projects/Hotspot/Idea.png";
// import HiFiExampleDF from "../../assets/projects/DF/HiFiExampleDF.png";
import DFotherServices from "../../assets/projects/DF/DFotherServices.png";
import DFpersona1 from "../../assets/projects/DF/DFpersona1.png";
import DFpersona2 from "../../assets/projects/DF/DFpersona2.png";
import DFimpactEffortMatrix from "../../assets/projects/DF/DFimpactEffortMatrix.png";
//import LoFiSketchDF from "../../assets/projects/DF/LoFiSketchDF.png";
//import LoFiSketchDF from "../../assets/projects/DF/LoFiSketchDF.png";

function Memosphere() {
  const projectData = {
    title: "Digital fotovägg",
    subtitle:
      "Ett digitalt och interaktivt komplement till Knightecs fysiska fotovägg.",
    sections: [
      {
        heading: "Utmaning",
        text: "Designa och utveckla en digital version av den analoga fotovägg som finns på Knightecs kontor med syfte att förstärka intrycket av att företaget ligger i framkant tekniskt samt att öka gemenskapen på kontoret.",
      },
      {
        heading: "Lösning",
        text: "En webbapplikation i 2 delar, en touch-vy för kontoret och en datorvy. I applikationen kan man se proffisionell och personlig information om alla kontorets medarbetare, sortera och filtrera efter olika grupper samt sprida information om event och liknande.",
      },
    ],
    buttonText: "Hoppa till resultatet",
    additionalInfo: [
      {
        heading: "Kontext",
        text: "Gruppprojekt 2023 i kursen Produktutveckling i medieteknik med metoden Design-Build-Test.",
      },
      {
        heading: "Resurser",
        text: "15 veckor 25 % i grupp om 5 personer (omfattningen av ett exjobb ungefär), handledning av Knightec.",
      },
      {
        heading: "Vektyg",
        text: "Figma, VS Code, Next, DevOps, Supabase.",
      },
    ],
    role: {
      heading: "Min roll och uppgift",
      tasks: ["UX/UI design", "Användartester av prototyper", "Akritektur"],
    },
  };

  const sections = [
    {
      id: "section1",
      title: "DESIGN",
      subtitle:
        "Hela designprocessen, från Knightecs beställning, till interaktiv prototyp i Figma.",
      content: (
        <div>
          <p>
            I vårat sökande efter ett spännande uppdrag träffade vi på ett gäng
            på Knightec som hade ett intressant förslag. De visade oss sin
            fysiska fotovägg på kontoret som består av bilder på alla kontorets
            medarbetare. Bilderna går i sin tur att vänta på för att få en kort
            introduktion skriven av personen själv. Tanken var att göra en
            digital version av denna fotovägg, med samma syfte fast med
            ytterligare funktionalitet.
          </p>
          <div className="DF-split-view">
            <img
              src={DFPhotoWallFront}
              alt="Knightecs photo wall today from the front."
            ></img>
            <img
              src={DFPhotoWallBackside}
              alt="Knightecs photo wall, example from the back of one of the picture frames."
            ></img>
          </div>

          <div className="DF-text-and-image">
            <div>
              <h3>Omvärldsanalys</h3>
              <p>
                Efter en planeringsfas med en SWOT-analys och planering av det
                agila projektet genom ett GANTT-schema gjordes en omvärdsanalys
                där alla i gruppen enskilt fick kolla upp liknande tjänster.
                Bilder och länkar samlades in för att skapa boards med
                inspiration att använda framåt.
                <br />
                <br />
                Slutsatserna av detta var att det verkar finnas företag som har
                stora skärmar med bilder på alla kontorets anställda, men inget
                digitalt komplement till en analog fotovägg hittades. Däremot
                undersöktes olika typer av HR plattformar där anställda visas
                upp och sorteras på olika sätt. Det fanns även en del stora
                skärmar som sitter uppe på kontor som kan användas för att
                uppmärksamma anställda, visa upp företagets prestationer och
                sociala medier etc.
              </p>
            </div>
            <img
              src={DFotherServices}
              alt="Knightecs photo wall today from the front."
            ></img>
          </div>
          <div className="section-section">
            <h3>Personas</h3>
            <p>
              För att få grepp om vilka olika typer av personer som ska använda
              tjänsten fixade projektets beställare lite olika use-cases som låg
              till grund för 2 personas. Det är en för en mer erfaren anställd
              som för tillfället jobbar på distans och har lite svårt att hänga
              med på kontorets förändringar från hemmet. Den andra är yngre och
              representerar nya på arbetsplatsen samt exjobbare. Detta är en
              person som vill använda tjänsten för att lära känna kollegor och
              känna sig inkluderad på arbetsplatsen.
            </p>
          </div>
          <div className="DF-split-view">
            <img
              src={DFpersona1}
              alt="Persona 1, consultant working remotely."
            ></img>
            <img src={DFpersona2} alt="Persona 2, new at the workplace."></img>
          </div>
          <div className="section-section">
            <h3>Intervjuer</h3>
            <p>
              Intervjuer genomfördes för att skapa kontext kring målgruppen och
              ta reda på mer om deras önskemål och behov. För att få en så bra
              bild av målgruppen som möjligt intervjuades, förutom våra 2
              beställare, även 3 andra anställda.
              <br />
              <br />
              <b> Person 1:</b> gruppchef som varit på Knightec i 2.5 år med
              arbetsuppgifter såsom rekrytering och säljmöten.
              <br />
              <br />
              <b> Person 2:</b> rätt ny konsult som jobbat ca ett halvår.
              <br />
              <br />
              <b> Person 3:</b> senior konsult som jobbat på företaget i 6 år.
              <br />
              <br />
              Intervjuerna var semistrukturerade och tog upp ämnen om vad de
              önskar göra med produkten, hur profiler ska se ut och fungera samt
              vilken skärmstorlek man föredrar. Resultatet sammanfattades i
              kategorier och svaren jämfördes.
              <br />
              <br />
              De största skillnaderna var ifall syftet med tjänsten skulle
              fungera som reklam utåt, eller vara en rolig tjänst för
              medarbetarna. En åsikt var att tjänsten helt skulle ersätta den
              analoga fotoväggen och slås ihop med infoskärmen i entren till
              varje kontor i form av en stor touchskärm, medan tanken från
              beställarens håll var att tjänsten skulle vara ett digitalt
              komplement, på en lite mindre skärm.
            </p>
          </div>
          <div>
            <div className="highlighted-section">
            <h3>Slutsatser från intervjuer</h3>
            <p>
              Efter diskusion med beställare beslutades det att tjänstens syfte
              är att vara ett roligt komplement till fotoväggen, för
              medarbetarna, det vill säga inte reklam utåt. Däremot diskuterades
              det att tjänsten senare kunde utvecklas att även fungera som
              ansiktet utåt genom att kombinera denna med infoskärmen i entren.
              Skärmen ska ha roliga features, men även viktig och användbar
              funktionalitet såsom att se vem som jobbar vart, grupperingar,
              kontaktuppgifter etc. Tjänsten ska designas för en mindre skärm så
              som en iPad eller större datorskärm.
            </p>
            </div>
          </div>
          <div className="section-section">
            <div>
              <h3>Brainstorm och prioritering</h3>
              <p>
                Vi använde brainstorming för idégenerering av olika funktioner
                lösningen skulle kunna innehålla. Dessa skrevs ner på
                post-it-lappar som därefter prioriterades i en 
                <a
                  href="https://www.nngroup.com/articles/prioritization-methods/"
                  target="_blank"
                >
                   impact-effort-matrix
                </a>
                .
              </p>
            </div>
            <img
              src={DFimpactEffortMatrix}
              alt="Prioritized ideas in an impact-effort-matrix."
            ></img>
          </div>
        </div>
      ),
    },
    {
      id: "section2",
      title: "UTVECKLING",
      subtitle: "Från Figmaprototyp till utvecklad touchvy.",
      content: (
        <div>
          <p>
            Utvecklingen av designen skulle egentligen göras som ett sommarjobb,
            men i slutändan blev det att en i gruppen fick sommarjobba med att
            planera upp projektet, som sedan genomfördes i en projektkurs. Denna
            projektkurs på 7,5hp pågår just nu sååå fortsättning följer...
          </p>
        </div>
      ),
    },
    {
      id: "results",
      title: "RESULTAT",
      subtitle: "Demovideo och länk till GitHub repo.",
      content: (
        <div className="section-section">
          <iframe
            src={`https://www.youtube.com/embed/fiObRnq3OsM`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <a href="https://github.com/OscarTideman/MemoSphere">
            {" "}
            <FaGithub /> GitHub repo här
          </a>
        </div>
      ),
    },
    {
      id: "section4",
      title: "MITT BIDRAG",
      subtitle: "Vad jag gjort i projektet samt lite avslutande tankar.",
      content: <div></div>,
    },
  ];

  return (
    <div className="DF-container">
      <div className="DF-hero-container">
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
export default Memosphere;
