import "../../styles/Memosphere.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import memospherePriorities from "../../assets/projects/Memosphere/MemospherePriorities.png";
import arrowUpRight from "../../assets/projects/Hotspot/arrowUpRight.png";
import arrowDownRight from "../../assets/projects/Hotspot/arrowDownRight.png";
import idea from "../../assets/projects/Hotspot/Idea.png";
import HiFiExampleMemosphere from "../../assets/projects/Memosphere/HiFiExampleMemosphere.png";
import loFiExampleMemosphere from "../../assets/projects/Memosphere/loFiExampleMemosphere.png";
import LoFiSketchMemosphere from "../../assets/projects/Memosphere/LoFiSketchMemosphere.png";
import memosphereVersion2 from "../../assets/projects/Memosphere/memosphereVersion2.png";
import memosphereVersion3 from "../../assets/projects/Memosphere/memosphereVersion3.png";
import memosphereVersion1 from "../../assets/projects/Memosphere/memosphereVersion1.png";
import memosphereVersion4 from "../../assets/projects/Memosphere/memosphereVersion4.png";

import flowchartMemosphere from "../../assets/projects/Memosphere/flowchartMemosphere.png";

import memosphereHiFi1 from "../../assets/projects/Memosphere/memosphereHiFi1.png";
import memosphereHiFi2 from "../../assets/projects/Memosphere/memosphereHiFi2.png";
import memosphereHiFi3 from "../../assets/projects/Memosphere/memosphereHiFi3.png";
import memosphereHiFi4 from "../../assets/projects/Memosphere/memosphereHiFi4.png";
import memosphereHiFi5 from "../../assets/projects/Memosphere/memosphereHiFi5.png";
import memosphereHiFi6 from "../../assets/projects/Memosphere/memosphereHiFi6.png";
import memosphereHiFi7 from "../../assets/projects/Memosphere/memosphereHiFi7.png";
import memosphereHiFi8 from "../../assets/projects/Memosphere/memosphereHiFi8.png";
import memosphereHiFi9 from "../../assets/projects/Memosphere/memosphereHiFi9.png";
import memosphereHiFi10 from "../../assets/projects/Memosphere/memosphereHiFi10.png";
import memosphereHiFi11 from "../../assets/projects/Memosphere/memosphereHiFi11.png";
import memosphereHiFi12 from "../../assets/projects/Memosphere/memosphereHiFi12.png";
import memosphereHiFi13 from "../../assets/projects/Memosphere/memosphereHiFi13.png";
import memosphereHiFi14 from "../../assets/projects/Memosphere/memosphereHiFi14.png";

import memosphereHomeScreen from "../../assets/projects/Memosphere/memosphereHomeScreen.png";
import memosphereMoodboard from "../../assets/projects/Memosphere/memosphereMoodboard.png";
import memosphereGraphicProfile from "../../assets/projects/Memosphere/memosphereGraphicalProfile.png";
import memosphereCreateWeekScreen from "../../assets/projects/Memosphere/memosphereCreateWeekScreen.png";
import databaseMemosphere from "../../assets/projects/Memosphere/databaseMemosphere.png";

import memosphereCreateWeekScreen2 from "../../assets/projects/Memosphere/memosphereCreateWeekScreen2.png";
import memosphereProfileScreen from "../../assets/projects/Memosphere/memosphereProfileScreen.png";
//import memosphereGraphicProfile from "../../assets/projects/Memosphere/memosphereGraphicalProfile.png";

import ImageCarousel from "./Carousel";
import { FaGithub } from "react-icons/fa";

function Memosphere() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "Memosphere",
    subtitle: "Håll kontakt med nära och kära med hjälp av AI.",
    sections: [
      {
        heading: "Utmaning",
        text: "Designa och utveckla en mobil applikation med hjälp av någon typ av ny teknik på temat: “Ensure that family, friends & professionals who care for seniors receive the support they need?”.",
      },
      {
        heading: "Lösning",
        text: "En AI driven mobilapplikation som ska stärka relationen mellan äldre och deras nära och kära, genom att uppmuntra till veckovis kontakt där man delar med sig om sin vecka.",
      },
    ],
    buttonText: "Hoppa till resultatet",
    additionalInfo: [
      {
        heading: "Kontext",
        text: "Gruppprojekt 2023 i kursen Innovativa mobila tjänster och system.",
      },
      {
        heading: "Resurser",
        text: "5 veckor 30 % i grupp om 6 personer, handledning av Daresay.",
      },
      {
        heading: "Vektyg",
        text: "Figma, VS Code, React Native, OpenAI, Firestore.",
      },
    ],
    role: {
      heading: "Min roll och uppgift",
      tasks: [
        "UX/UI design",
        "Användartester av prototyper",
        "Designa och sätta upp databas",
        "Service layer till databasen",
        "Publiseringsflödet",
        "Research om OpenAI",
      ],
    },
  };

  const images = [
    {
      src: memosphereVersion1,
      legend:
        "I version 1 flyter användare runt fritt på hemskärmen i en rymdsetting, likt i spelet Among us. När man skapar en veckouppdatering får man 3 förlag för inspiration.",
    },
    {
      src: memosphereVersion2,
      legend:
        "I version 2 står användare utspridda på hemskärmen och en personligt genererad fråga ställs till användaren i veckouppdateringen.",
    },
    {
      src: memosphereVersion3,
      legend:
        "Version 3 har alla användare ett eget hus där veckouppdateringarna visas upp.",
    },
    {
      src: memosphereVersion4,
      legend:
        "Version 4 kan man själv välja kläder till sin användare som visas upp likt nintendos Mii's på hemskärmen.",
    },
  ];

  const hiFiImages = [
    memosphereHiFi1,
    memosphereHiFi2,
    memosphereHiFi3,
    memosphereHiFi4,
    memosphereHiFi5,
    memosphereHiFi6,
    memosphereHiFi7,
    memosphereHiFi8,
    memosphereHiFi9,
    memosphereHiFi10,
    memosphereHiFi11,
    memosphereHiFi12,
    memosphereHiFi13,
    memosphereHiFi14,
  ];

  const sections = [
    {
      id: "section1",
      title: "DESIGN",
      subtitle: "Från idé till design, riktigt snabbt.",
      content: (
        <div>
          <div>
            <p>
              Vi ville gärna använda oss av AI vilket ledde oss till idén om att
              skapa en applikation där man delar med sig om sin vecka med nära
              och kära. Varje vecka får användaren lägga in en bild från veckan
              som gått, eller generera en med AI utifrån text. Därefter kommer
              applikationen använda sig av openAIs (vid denna tid nya funktion)
              Vision samt en databas med frågor för att generera unika frågor
              för användaren att besvara. Detta gör varje veckosummering unik
              och intressant.
              <br />
              <br />
              I applikationen får man se sina vänner i en innovativ miljö där
              man istället för att se en lista av vänner, får se sina vänners
              karaktärer på en interaktiv canvas. Detta ska ge en unik och
              lekfull touch. Har kan man alltså navigera sig mellan sin egna
              profil och andras för att se deras veckosummeringar.
              <br />
              <br />
              Vi hade även en tanke om att få in annan data från användarens
              enhet, exempelvis hälsodata, för att kunna ställa mer personliga
              frågor om detta.
            </p>
            <img
              className="memosphere-storyboard"
              src={memospherePriorities}
              alt="functionality prioritized under must haves, want to haves and nice to haves."
            ></img>
            <div className="design-overview">
              <div className="design-overview-content">
                <img id="idea" src={idea}></img>
                <img id="arrowDownRight" src={arrowDownRight}></img>
                <img
                  id="memosphereLoFiPreview"
                  src={loFiExampleMemosphere}
                ></img>
                <img id="arrowUpRight" src={arrowUpRight}></img>
                <img
                  id="memosphereHiFiPreview"
                  src={HiFiExampleMemosphere}
                ></img>
              </div>
            </div>
          </div>
          <div className="section-section">
            <h3>Lo-fi skiss</h3>
            <p>
              För att bestämma en ungefärlig layout för appen gjordes en skiss
              gemensamt.
            </p>
            <img
              className="memosphere-storyboard"
              src={LoFiSketchMemosphere}
              alt="Lo-fi sketch with a few rough pages and some text and arrows."
            ></img>
            <p>Denna lade även grunden till vårt flöde.</p>
            <img
              className="memosphere-storyboard"
              src={flowchartMemosphere}
              alt="flow chart of the memosphere app."
            ></img>
          </div>
          <div className="section-section">
            <h3>Mid-fi</h3>
            <p>
              När vi hade en gemensam bild av vad som behövdes fick alla göra
              ett förslag var. Vissa valde att göra skisser, andra wireframes
              eller en mid-fi.
            </p>
            <div>
              <ImageCarousel
                className="carousel-container"
                images={images}
              ></ImageCarousel>
            </div>
          </div>
          <div className="section-section">
            <h3>Moodboard och grafisk profil</h3>
            <p>
              Vi gick igenom alla förslag tillsammans och kom fram till att gå
              vidare med rymdidén i version 1 i grunden. Vi hade många liknande
              idéer som tillsammans kom att inspirera den slutgiltiga designen.
            </p>
            <div className="mooadboard-graphicprofile-container">
              <img
                src={memosphereMoodboard}
                alt="Moodboard containing examples of apps and space like inspiration."
              ></img>
              <img
                src={memosphereGraphicProfile}
                alt="Graphic profile with typeface, color palette and different buttons."
              ></img>
            </div>
          </div>
          <div className="section-section">
            <h3>Hi-Fi</h3>
            <p>
              Utifrån moodboarden, den grafiska profilen och våra gemensamma
              förslag tog vi fram en hi-fi i Figma.
            </p>
            <div className="image-grid">
              {hiFiImages.map((src, index) => (
                <img
                  className="grid-images"
                  key={index}
                  src={src}
                  alt={`Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "section2",
      title: "UTVECKLING",
      subtitle:
        "Från Figmaprototyp till fungerande applikation med AI-stöd i React Native och Firestore databas.",
      content: (
        <div>
          <p>
            Under utvecklingen delade vi upp arbetet genom en kanban via GitHub.
            Vi började med att fördjupa oss i varsin ny teknik för att sedan
            presentera det vi tagit reda på för resten av gruppen. Därefter
            började vi programmera. Vi programmerade mycket enskilt men även en
            del tillsammans mot slutet.
          </p>
          <div className="section-section">
            <h3>Val av AI</h3>
            <p>
              Vi valde att använda oss av OpenAI då det är en användarvänlig och
              rätt billig lösning som några i gruppen redan hade använt sig av i
              tidigare projekt. När vi startade vårt projekt hade det även
              kommit en hel del uppdateringar till tjänsten som vi såg fram emot
              att utnyttja! Dessa var:
              <br />
              <br />
              <b>gpt-4-turbo:</b> en snabbare och billigare version av gpt-4.
              <br />
              <br />
              <b>DALL-E 3:</b> en AI-modell för bildgenerering som vid behov
              utvecklar användarens prompt för att skapa ännu mer detaljerade
              och kreativa bilder.
              <br />
              <br />
              <b>gpt-4-vision:</b> en avancerad AI-modell som kombinerar text-
              och bildbehandling för att analysera bilder. Den kan förstå och
              generera text baserat på visuella insikter, vilket gör den kapabel
              att analysera och svara på frågor om bilder samt skapa text som
              beskriver eller relaterar till bilder (sjukt coolt).
            </p>
          </div>
          <div className="section-section memosphere-text-and-image">
            <div>
              <h3>Databasen</h3>
              <p>
                På grund av den begränsade tiden i projektet valde vi att köra
                på en Firestore databas då det var något vi hade koll på sedan
                tidigare projekt.
                <br />
                <br />
                <b>Users</b> håller all användarinformation, bland annat färgen
                på ens karaktärs rymddräkt och en profilbild för en mer
                personlig touch.
                <br />
                <br />
                <b>Friends</b> håller koll på alla användarens vänner och
                vänförfrågningar.
                <br />
                <br />
                <b>Weeks</b> innehåller information om veckouppdateringarna för
                alla användare.
                <br />
                <br />
                För att sedan hämta och hantera informationen från databasen
                gjordes ett servicelager.
              </p>
            </div>
            <div>
              <img
                src={databaseMemosphere}
                alt="Visualisation of the databasestructure."
              ></img>
            </div>
          </div>
          <div className="section-section memosphere-text-and-image">
            <div>
              <img
                src={memosphereHomeScreen}
                alt="Homescreen with avatars in space and some buttons."
              ></img>
            </div>
            <div>
              <h3>Hemskärm med användare i rymdsetting</h3>
              <p>
                Hemskärmen visar dig och dina vänner som rymdavatarer. Du kan
                välja en profilbild och en färg för din avatar. För närvarande
                finns fyra färger, men fler kan läggas till. Avatarerna dyker
                upp slumpmässigt och din egen avatar är lite större och alltid
                centrerad. Du kan flytta runt avatarerna fritt på skärmen, och
                genom att klicka på en avatar går du till personens profil och
                veckoflödet.
                <br />
                <br />
                Menyknappen erbjuder tre alternativ: inställningar, hantera
                vänner, och en visselpipa. Dessa är inte implementerade men
                tanken med visselpipan var att den skulle samla alla vänners
                avatarer på ett organiserat sätt.
                <br />
                <br />
                Knappen "skapa vecka" leder till publiceringsflödet.
              </p>
            </div>
          </div>
          <div className="section-section memosphere-text-and-image">
            <div>
              <h3>Välja veckans bild</h3>
              <p>
                För att skapa en vecka kan man ta en egen bild från sin
                kamerarulle eller direkt med kameran, eller generera en med AI.
                För att ta egna bilder användes expo-picker och för att generera
                användes DALL-E 3 genom OpenAI.
                <br />
                <br />
                För att generera en bild skickar användaren själv in en prompt
                som skickas vidare till OpenAI som svarar med en bild. Medan en
                bild genereras får användaren en loading screen med förklarande
                text och en liten rymdlik animation för en ökad
                användarupplevelse och en minskad upplevd väntetid.
              </p>
            </div>
            <div>
              <img
                src={memosphereCreateWeekScreen}
                alt="Initial screens for creating a new week."
              ></img>
            </div>
          </div>
          <div className="section-section memosphere-text-and-image">
            <div>
              <img
                src={memosphereCreateWeekScreen2}
                alt="Initial screens for creating a new week."
              ></img>
            </div>
            <div>
              <h3>Skriva veckans text</h3>
              <p>
                När användaren valt bild skickas den till OpenAI's API som
                analyserar den för att generera inspiration till användaren. För
                denna analys används den då nya funktionen gpt-4-vision, en
                modell som kan förstå och generera text baserat på visuella
                insikter. Till denna modell skickade vi alltås bilden samt
                följande prompt:
                <br />
                <br />
                <i>
                  Can you generate three suggestions for captions to this image.
                  Respond in Swedish.
                </i>
                <br />
                <br />
                Tillbaka får användare 3 förslag på captions som vid klick förs
                in i inputfältet där den kan redigeras eller förlängas.
                <br />
                <br />
                Därefter får man skriva fritt om sin vecka och för detta ges 3
                förslag som plockas slumpmässigt ur en databas av inspiration.
              </p>
            </div>
          </div>
          <div className="section-section memosphere-text-and-image">
            <div>
              <h3>Profilsidan</h3>
              <p>
                När en avatar blir klickad visas en overlay med profilens namn,
                avatar, användarnamn och en sammanfattning av personens veckor.
                De senaste veckorna kan scrollas horizontellt men man kan även
                klicka på <i>visa alla</i> för att komma till en scrollbar lista
                av alla veckor.
                <br />
                <br />
                Klickar man på en vecka får man se hela veckosammanfattningen
                med text och bild.
              </p>
            </div>
            <div>
              <img
                src={memosphereProfileScreen}
                alt="Initial screens for creating a new week."
              ></img>
            </div>
          </div>
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
      content: (
        <div>
          <div>
            <p>
              Idén och den initiala skissen på appen kom vi fram till
              tillsammans. Därefter skapade vi egna tolkningar av skissen, här
              gjorde jag Version 1 som visades tidigare. I Hi-Fi:en gjorde vi
              mycket tillsammans men jag hade nog mest fokus på
              publiseringsflödet. Jag fick även ansvaret över att researcha
              OpenAi innan vi började använda det.
              <br />
              <br />
              Då jag precis jobbat med Firebase i kursen innan tog jag på mig
              att strukturera och sätta upp databasen samt göra ett service
              lager. Jag såg även till att appen kunde hantera bilder som
              base64, något vi inte lyckats med i ett tidigare projekt.
              <br />
              <br />
              Jag skapade även komponenten för knappar och progress dots för
              publiseringsflödet samt jobbade mycket på sammanställningen av
              detta flöde i slutet. Jag gjorde även komponenten för att visa upp
              och få in inspiration till inputfältet samt en del smågrejor som
              pop-ups och knappar.
              <br />
              <br />
              Detta projekt var särskilt kul eftersom att vi i gruppen redan
              kunde en del sedan tidigare projekt, vilket gjorde att vi hade tid
              att göra saker rätt bra. Det var extra kul att få använda sig av
              så pass ny teknik från OpenAI, Vision var faktiskt överraskande
              bra! Det roligaste i det här projektet var att jag kände mig rätt
            </p>
          </div>
          <div className="section-section">
            <h3>Förbättringsmöjligheter</h3>
            <p>
              På grund av den begränsade tiden hann vi inte göra en fullt
              fungerande applikation. Vi prioriterade bort inloggning, vänner
              och annan grundläggande funktionalitet för att kunna fokusera på
              det som kändes nytt och roligt, vilket var ett bra val.
              <br />
              <br />
              Hade vi fått mer tid hade vi velat göra en mer dynamisk bagrund på
              hemskärmen, en rörlig som användaren kan navigera runt mer inom.
              Vi hade även en tanke om att man skulle kunna låta användaren byta
              till andra teman än rymden. Vi hade även velat göra något mer med
              inspirationen som ges när man ska skriva om sin vecka. Vi hade
              bland annat en tanke om att appen ska hämta hälsodata som kan
              användas som förslag vid skapandet av veckosammanfattningarna,
              exempelvis: <i>I onsdags gick jag 15000 steg för att...</i>
              <br />
              <br />
              Hade vi fått göra om projektet hade jag kanske försökt se över
              designen en runda till för att göra en bättre lösning för
              profilsidorna. Designen var aldrig fokus i detta projekt, men en
              riktig användartestning hade inte skadat om mer tid fanns att
              tillgå.
              <br />
              <br />
              Med tanke på att Memosphere skapades under en rätt begränsad tid
              är jag väldigt stolt över resultatet. Det var ett väldigt lärorikt
              projekt där vi fick testa på många nya tekniker och utveckla de
              färdigheter vi redan besatt!
            </p>
            <p>
              <i>
                Stort tack till alla mina projektkamrater; Oscar Tideman, Lukas
                Nordangård, Joakim Lindfors, Moa Bergquist, och Linnéa Esberg!
              </i>
            </p>
          </div>
          <div className="space"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="memosphere-container">
      <div className="memosphere-hero-container">
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
