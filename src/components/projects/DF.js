import "../../styles/DF.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import ImageCarousel from "./Carousel";
import { FaGithub } from "react-icons/fa";
import DFPhotoWallFront from "../../assets/projects/DF/DFPhotoWallFront.png";
import DFPhotoWallBackside from "../../assets/projects/DF/DFPhotoWallBackside.png";

import LoFiExampleDF from "../../assets/projects/DF/LoFiExampleDF.png";
import arrowDownRight from "../../assets/projects/Hotspot/arrowDownRight.png";
import arrowUpRight from "../../assets/projects/Hotspot/arrowUpRight.png";
import idea from "../../assets/projects/Hotspot/Idea.png";
import HiFiExampleDF from "../../assets/projects/DF/HiFiExampleDF.png";

import DFotherServices from "../../assets/projects/DF/DFotherServices.png";
import DFpersona1 from "../../assets/projects/DF/DFpersona1.png";
import DFpersona2 from "../../assets/projects/DF/DFpersona2.png";
import DFimpactEffortMatrix from "../../assets/projects/DF/DFimpactEffortMatrix.png";

import DFLoFi1 from "../../assets/projects/DF/DFLoFi1.png";
import DFLoFi2 from "../../assets/projects/DF/DFLoFi2.png";
import DFLoFi3 from "../../assets/projects/DF/DFLoFi3.png";
import DFLoFi4 from "../../assets/projects/DF/DFLoFi4.png";
import DFLoFi5 from "../../assets/projects/DF/DFLoFi5.png";

import DFloFiResults1 from "../../assets/projects/DF/DFloFiResults1.png";
import DFloFiResults2 from "../../assets/projects/DF/DFloFiResults2.png";
import DFloFiResults3 from "../../assets/projects/DF/DFloFiResults3.png";
import DFloFiResults4 from "../../assets/projects/DF/DFloFiResults14.png";
import DFloFiResults5 from "../../assets/projects/DF/DFloFiResults5.png";

import DFKnightecInstagram from "../../assets/projects/DF/DFKnightecInstagram.png";
import DFKnightecWebsite from "../../assets/projects/DF/DFKnightecWebsite.png";
import DFIcons from "../../assets/projects/DF/DFIcons.png";
import DFGraphicProfile from "../../assets/projects/DF/DFGraphicProfile.png";

import DFChanges1 from "../../assets/projects/DF/DFChanges1.jpg";
import DFChanges2 from "../../assets/projects/DF/DFChanges2.jpg";
import DFChanges3 from "../../assets/projects/DF/DFChanges3.jpg";
import DFChanges4 from "../../assets/projects/DF/DFChanges4.jpg";
import DFChanges5 from "../../assets/projects/DF/DFChanges5.jpg";
import DFFinalHiFi from "../../assets/projects/DF/DFFinalHiFi.png";

function DF() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "Digital fotovägg",
    pillText: "! Pågående projekt",
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

  const carouselImages = [
    {
      src: DFLoFi1,
      legend:
        "Version 1 har en sidebar med filtreringsfunktionalitet och en karusell med alla aktuella anslag på rullning.",
    },
    {
      src: DFLoFi2,
      legend: "Verion 2 har profilen som en popup.",
    },
    {
      src: DFLoFi3,
      legend: "Version 3 har mycket funktionalitet uppe i en navbar.",
    },
    {
      src: DFLoFi4,
      legend:
        "Version 4 har initialt en rätt avancerad sökfunktion som sedan byttes till en utfällningsbar filtreringsruta.",
    },
    {
      src: DFLoFi5,
      legend:
        "Version 5 har stort fokus på en mer proffisionell framsida och en mer personlig baksida på profilen.",
    },
  ];

  const LoFiImages = [
    DFloFiResults1,
    DFloFiResults2,
    DFloFiResults3,
    DFloFiResults4,
    DFloFiResults5,
  ];

  const HiFiChangesImages = [
    DFChanges1,
    DFChanges2,
    DFChanges3,
    DFChanges4,
    DFChanges5,
  ];

  const sections = [
    {
      id: "section1",
      title: "DESIGNINTRO",
      subtitle: "En gedigen designprocess från koncept till interaktiv Hi-Fi i Figma.",
      content: (
        <div>
          <div className="design-overview">
              <div className="design-overview-content">
                <img id="idea" src={idea}></img>
                <img id="arrowDownRight" src={arrowDownRight}></img>
                <img id="DFLoFiPreview" src={LoFiExampleDF}></img>
                <img id="arrowUpRight" src={arrowUpRight}></img>
                <img id="DFHiFiPreview" src={HiFiExampleDF}></img>
              </div>
            </div>
        </div>
      )},
    {
      id: "section2",
      title: "FÖRSTUDIE",
      subtitle: "Projektetförberedelser och djupdykning i problemområdet.",
      content: (
        <div className="DF-section">
          <p>
            I sökandet efter ett spännande uppdrag träffade vi på ett gäng på
            Knightec som hade ett intressant förslag. De visade oss sin fysiska
            fotovägg på kontoret som består av bilder på alla kontorets
            medarbetare. Bilderna går i sin tur att vänta på för att få en kort
            introduktion skriven av personen själv. Förslaget var att göra en
            digital version av denna fotovägg, med samma syfte som dagens fast
            med ytterligare funktionalitet och mer interaktivitet.
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
                Slutsatserna av detta var att det verkar finnas flera företag
                som har stora skärmar med bilder på alla kontorets anställda,
                men ingen digital lösning likt den våra beställare önskade
                verkade finnas. Däremot undersöktes olika typer av HR
                plattformar där anställda visas upp och sorteras på olika sätt.
                Det fanns även en del stora skärmar som sitter uppe på kontor
                som kan användas för att uppmärksamma anställda, visa upp
                företagets prestationer och sociala medier etc.
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
              till grund för 2 personas vi tyckte var extra intressanta att ha i
              åtanke. Det är en för en mer erfaren anställd som för tillfället
              jobbar på distans och har lite svårt att hänga med på kontorets
              förändringar från hemmet. Den andra är yngre och representerar nya
              på arbetsplatsen samt exjobbare. Detta är en person som vill
              använda tjänsten för att lära känna kollegor och känna sig
              inkluderad på arbetsplatsen.
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
              Intervjuerna var semistrukturerade och tog upp frågor kring vad de
              önskar göra med produkten, hur profiler ska se ut och fungera samt
              vilken skärmstorlek man föredrar. Resultatet sammanfattades i
              kategorier och svaren jämfördes.
              <br />
              <br />
              De största skillnaderna mellan deltagarna var ifall syftet med
              tjänsten skulle fungera som reklam utåt, eller vara en rolig
              tjänst för medarbetarna. En åsikt var att tjänsten helt skulle
              ersätta den analoga fotoväggen och slås ihop med infoskärmen i
              entren till varje kontor i form av en stor touchskärm, medan
              tanken från beställarens håll var att tjänsten skulle vara ett
              digitalt komplement, på en lite mindre skärm.
            </p>
          </div>
          <div>
            <div className="highlighted-section">
              <h3>Slutsatser från intervjuer</h3>
              <p>
                Efter diskusion med beställare beslutades det att tjänstens
                syfte är att vara ett roligt komplement till fotoväggen, för
                medarbetarna, det vill säga inte reklam utåt. Däremot
                diskuterades det att tjänsten senare kunde utvecklas att även
                fungera som ansiktet utåt genom att kombinera denna med
                infoskärmen i entren. Skärmen ska ha roliga features, men även
                viktig och användbar funktionalitet såsom att se vem som jobbar
                vart, grupperingar, kontaktuppgifter etc. Tjänsten ska designas
                för en mindre skärm så som en iPad eller större datorskärm.
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
      id: "section3",
      title: "LO-FI",
      subtitle: "Från idé till ett testat första förslag.",
      content: (
        <div className="DF-section">
          <div>
            <h3>Lo-Fi</h3>
            <p>
              Varje gruppmedlem fick först göra var sin tolkning av de
              prioriterade idéerna genom skapandet av Lo-Fi's. Efter detta
              skedde en ny iteration av samma fas där alla i gruppen återigen
              individuellt fick göra digitala wireframes inspirerade av
              föregående skisser, detta för att kunna skapa gemensamma
              wireframes sammanställda utifrån alla individuella skisser.
            </p>
            <div>
              <ImageCarousel
                className="carousel-container"
                images={carouselImages}
              ></ImageCarousel>
            </div>
          </div>
          <div className="section-section">
            <h3>Wireframes</h3>
            <p>
              Efter andra individuella iterationen gjordes en gemensam
              interation där wireframes skapades utifrån det vi gillade ur våra
              förslag. Nedan är några av dem:
            </p>
            <div className="image-grid">
              {LoFiImages.map((src, index) => (
                <img
                  className="grid-images"
                  key={index}
                  src={src}
                  alt={`Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div>
            <h3>Testning av wireframes</h3>
            <p>
              Testningen genomfördes på beställare och handledare på Knightec
              och var utformad för att fånga deras initiala reaktion.
              <br />
              <br />
              Testningen resulterade i en del förändringar:
            </p>
            <ul>
              <li>Det ska gå att kombinera taggar i filtreringen.</li>
              <li>
                Bannern på den personliga profilen ska kunna vara en bild.
              </li>
              <li>Randomisera vilka som syns på förstasidan.</li>
              <li>
                Man ska kunna söka på olika titlar, som senior consultant eller
                team managers.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "section4",
      title: "HI-FI",
      subtitle: "Den slutgiltiga hi-fi-prototypen i Figma.",
      content: (
        <div className="DF-section">
          <p>
            HiFi prototypen gjordes i Figma. Designen utgår från de uppdaterade
            wireframsen och lägger till färg och form samt en del extra
            funktionalitet som uppstod under testningen.
          </p>
          <div className="">
            <h3>Grafisk profil</h3>
            <p>
              Den grafiska profilen är inspirerad av Knightecs nuvarande
              webbplats och instagramflöde:
            </p>
            <div className="DF-split-view">
              <img
                src={DFKnightecInstagram}
                alt="Screenshots from Knightecs instagram."
              ></img>
              <img
                src={DFKnightecWebsite}
                alt="Screenshot from Knightecs website."
              ></img>
            </div>
            <div className="DF-text-and-image">
              <div>
                <p>
                  Font och annan styling togs från webbplatsen så gott det gick.
                  Färgpaletten består till till största del av vitt och svart,
                  med mycket inslag av bilder, främst på natur. Därför valdes
                  vitt och svart till designens primära/neutrala färger, med en
                  viss nedtoning för att kontrasten inte ska bli för hög.
                  Naturbilder togs både från Knightecs webbplats men också från
                  diverse gratisplattformar. Komponenter såsom knappar och
                  navigations-baren försökte imiteras för att skapa en
                  enhetlighet mellan fotoväggskomplementet och resten av
                  företagets grafiska identitet.
                  <br />
                  <br />
                  Till detta valde vi att lägga till en grå och en lila för att
                  ha mer färg att jobba med för att framhäva vissa aspekter. För
                  att markera destruktiva handlingar såsom delete valdes en lite
                  nedtonad röd färg. Generellt sett är knapparna svarta, men
                  dessa extra färger hjälper till att guida ögat till rätt
                  ställe under interaktionen. Det är även lättare för användaren
                  att förstå knappens innebörd med färg, inte bara med ord.
                </p>
              </div>
              <img
                src={DFGraphicProfile}
                alt="The graphical profile inspired by Knightecs graphical identity."
              ></img>
            </div>
            <div className="DF-text-and-image">
              <img
                src={DFIcons}
                alt="The graphical profile inspired by Knightecs graphical identity."
              ></img>
              <div>
                <p>
                  Den enda ikonen som kunde tas från Knightecs egna webbplats
                  var en “fälla ner pil”. Denna användes sedan för att skapa en
                  “gå tillbaka pil” samt ett “ta bort kryss”. Resterande togs
                  från ett ikonbibliotek och modifierades för att se mer
                  enhetliga ut. Olika versioner för varje ikon togs fram för att
                  sedan välja ut den som känns mest relevant för syftet.
                </p>
              </div>
            </div>
          </div>
          <div className="section-section">
            <h3>Testning av Hi-Fi-prototyp</h3>
            <p>
              Testningen utfördes på plats med beställare (som varit med under
              hela processen) och en exjobbare inom UX (som var helt ny till
              konceptet). Prototypen skickades även till en annan grupp på
              kursen som utvärderade den utefter{" "}
              <a
                href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                target="_blank"
              >
                10 Usability Heuristics for User Interface Design av Jakob
                Nielsen
              </a>
              .
              <br />
              <br />
              Denna feedback ledde till en del förändringar. De största förändringarna är visualiserade nedan där grönt markerar det nya och rött det gamla:
            </p>
            <div className="image-grid">
              {HiFiChangesImages.map((src, index) => (
                <img
                  className="grid-images"
                  key={index}
                  src={src}
                  alt={`Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="section-section">
            <h3>Slutgiltig HiFi</h3>
            <a href="https://www.figma.com/proto/ChfODED8YAIHhoZB7INNGf/Digital-Fotov%C3%A4gg?node-id=377-3971&node-type=canvas&t=QzIQgLg49YoH5Sbj-1&scaling=min-zoom&content-scaling=fixed&page-id=365%3A3118&starting-point-node-id=377%3A3971&show-proto-sidebar=1">Länkt till prototyp i Figma här!</a>
            <img
            src={DFFinalHiFi}
            alt="The graphical profile inspired by Knightecs graphical identity."
            >
            </img>
          </div>
        </div>
      ),
    },
    {
      id: "section5",
      title: "UTVECKLING",
      subtitle: "Från Figmaprototyp till en utvecklad touchvy.",
      content: (
        <div className="DF-section">
          <p>
            Utvecklingen av designen sker nu HT24 i en projektkurs som
            planerades av en av gruppmedlemmarna under ett sommarjobb hos
            Knightec förra sommaren. Denna projektkurs på 7,5hp pågår just nu
            sååå fortsättning följer...
          </p>
        </div>
      ),
    },
    {
      id: "results",
      title: "RESULTAT",
      subtitle: "Kommer snart.",
      content: (
        <div className="DF-section">
          <p><i>Projektet görs tillsammans med mina skickliga gruppmedlemmar och goda vänner Ebba Backlund, Moa Berquist, Melker Henriksson och Gustav Bolén!</i></p>
        </div>
      ),
    },
    {
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
export default DF;
