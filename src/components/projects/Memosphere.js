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

// import memosphereStoryboard from "../../assets/projects/Memosphere/memosphereStoryboard.png";
import memosphereMoodboard from "../../assets/projects/Memosphere/memosphereMoodboard.png";
import memosphereGraphicProfile from "../../assets/projects/Memosphere/memosphereGraphicalProfile.png";
// import memosphereHiFi from "../../assets/projects/Memosphere/memosphereHiFi.png";
// import memosphereDatabase from "../../assets/projects/Memosphere/memosphereDatabase.png";
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
              <br/>
              <br/>
              I applikationen får man se sina vänner i en
              innovativ miljö där man istället för att se en lista av vänner,
              får se sina vänners karaktärer på en interaktiv canvas. Detta ska
              ge en unik och lekfull touch. Har kan man alltså navigera sig
              mellan sin egna profil och andras för att se deras
              veckosummeringar. 
              <br/>
              <br/>
              Vi hade även en tanke om att få in annan data
              från användarens enhet, exempelvis hälsodata, för att kunna ställa
              mer personliga frågor om detta.
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
        "Från Figmaprototyp till semifungerande applikation med användarhantering och kartfunktion i React Native och Firestore databas.",
      content: (
        <div>
          {/* <p>
            Under programmeringsfasen satt vi mycket tillsammans i gruppen i
            början för att planera och sätta upp en enhetlig struktur för
            projektet. Vi satte upp en kanban där alla fick ta egna uppgifter
            eftersom, då satt vi mycket enskilt. I slutet satt vi några dagar
            tillsammans för att koppla ihop alla delar och färdigställa det som
            inte blivit klart.
          </p>
          <div className="section-section">
            <h3>Databasen</h3>
            <p>
              Vi valde att använda Firestore som databas för vårt projekt på
              grund av dess skalbarhet och enkelhet samt dess stöd för
              realtidsuppdateringar. Detta var min första erfarenhet med en
              NoSQL-databas, vilket krävde en del research för att fastställa en
              databasstruktur vi var nöjda med. Vi övervägde två alternativ för
              att lagra vänlistor: antingen som en del av användardokumentet
              eller som en separat collection. Vi valde att skapa en separat
              collection för vänner. Detta förbättrar prestandan och
              skalbarheten genom att undvika att behöva läsa hela
              användardokumentet varje gång vi hämtar en användares vänlista,
              även om det gör querys lite mer komplexa.
              <br />
              <br />
              På samma sätt hanterar vi pins. Vi har en separat collection för
              användar-ID som innehåller en subcollection för pins, där varje
              dokument representerar en användares pin. Denna struktur
              underlättar hanteringen och hämtningen av pins samtidigt som den
              håller användardokumenten mer hanterbara.
            </p>
            <img
              src={memosphereDatabase}
              alt="Visualisation of the databasestructure."
            ></img>
          </div>
          <div className="section-section">
            <h3>Kartan och pins</h3>
            <p>
              Kartan och pins är centrala delar av Memosphere. För kartvisningen
              använder vi react-native-maps, som integrerar med Google Maps på
              Android och Apple Maps eller Google Maps på iOS. Aktuell plats
              bestäms med expo-location, vilket gör att kartan kan centreras på
              användarens position. För att snabbt söka efter och navigera till
              specifika platser använder vi
              react-native-google-places-autocomplete, som ger sökförslag medan
              användaren skriver.
              <br />
              <br />
              Pins på kartan placeras ut vid inladdning och representerar både
              användarens egna pins och deras vänners pins från databasen. Varje
              pin har en unik färg och ikon baserat på dess kategori, och
              användaren kan filtrera pins efter kategori, till exempel
              stränder.
              <br />
              <br />
              När en användare skapar en pin, lägger de till en bild, plats,
              beskrivning och titel. Den nya pinnen syns på både användarens
              egen och vänners kartor. Varje pin berikas med platsinformation
              från Google Places API. Om flera användare inom samma
              vänskapsgrupp skapar pins på samma plats, kommer dessa att
              grupperas under en gemensam pin, vilket förhindrar att flera pins
              skapas för samma favoritställe.
            </p>
          </div>
          <div className="section-section">
            <h3>Användare och vänner</h3>
            <p>
              För att skapa ett konto i appen behöver användaren ange en
              e-postadress, namn och lösenord. Användaren har även möjlighet att
              ladda upp en profilbild från sin kamerarulle. På sin profil kan
              användaren se sin egen information, ett flöde av sina pins, samt
              en förhandsvisning av sina vänner. Användaren kan också klicka för
              att gå till vänners profiler.
              <br />
              <br />
              När man navigerar till en vänsida laddar applikationen användarens
              vänlista. Vänförfrågningar visas högst upp på sidan, där endast en
              förfrågan visas initialt. Nedanför vänförfrågningarna visas en
              lista över användarens vänner. Sidan innehåller en sökruta högst
              upp där användaren kan söka efter användarnamn. Vid sökning visas
              matchande vänner först, följt av vänner till vänner och sist
              användare som inte har någon gemensam vän med sökaren.
              Profilkorten för vänner visar bild, namn och eventuell vänstatus.
              Användaren kan svepa på ett kort för att snabbt lägga till eller
              ta bort en vän, eller klicka på kortet för att komma åt en mer
              detaljerad vy med samma funktionalitet.
            </p>
          </div> */}
        </div>
      ),
    },
    {
      id: "results",
      title: "RESULTAT",
      subtitle: "Demovideo och länk till projektet på GitHub.",
      content: (
        <div className="section-section">
          <iframe
            src={`https://www.youtube.com/embed/1zZFFfUX72g`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <a href="https://github.com/OlleStrandberg/Pumaproject">
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
          {/*
          <div>
            <p>
              Designdelen gjorde vi mestadels tillsammans men jag hade mest
              fokus på vännersidan och knappar, vilket gjorde att dessa även
              blev mina fokus underutvecklingsfasen också. Det var en intressant
              sida att jobba med då den både innehöll svepanimationer,
              dropdowns, inladdning av data samt en lite mer avanerad
              sökfunktion. 
              <br />
              <br />
              Jag tog även på mig att fixa med databasen. Firebase
              var helt nytt för mig och det var en väldigt givande utmaning! Jag
              gjorde det mesta med databasen, från planering av struktur till
              ett service lager och testning. Under slutfasen av projektet såg
              jag till att integrera service-lagret med samtliga sidor i
              applikationen och såg till att datan flödade smidigt mellan alla
              komponenter så att applikationen fungerade som avsett. 
              <br />
              <br />
              Det
              roligaste med projektet var att vi som grupp kunde skapa så pass
              mycket funktionalitet på kort tid tack vare vårt samarbete. Jag
              fick även chansen att lära mig om NoSQL och Firebase och min roll
              gjorde att jag hade en rätt bra överblick över hur allt skulle
              hänga ihop i slutändan.
            </p>
          </div>
          <div className="section-section">
            <h3>Förbättringsmöjligheter</h3>
            <p>
              På grund av den begränsade tiden, plus att vi använde en del nya
              ramverk, hann vi inte göra en fullt fungerande applikation. Den
              saknar fortfarande mycket önskvärd funktionalitet som att filtrera
              pins efter vänner, eller lägga till en vän direkt från dennes
              profilsida. Det finns även en del buggar då vi inte hann testa
              applikationen i slutet, samt en del varningar som dyker upp i
              expo, dessa verkar dock inte påverka funktionaliteten. 
              <br />
              <br />
              Hade vi
              fått göra om projektet hade jag struntat i att försöka fixa google
              signin då det inte var kompatibelt med expo i slutändan. Jag hade
              även sett till att vi gjorde en ännu mer utförlig planering i
              början för att se till att alla delar passade ihop bättre i
              slutet. Kanske hade jag struntat i viss funktionalitet såsom login
              för att hinna med tester på slutet för att få bort ännu fler
              buggar och varningar. 
              <br />
              <br />
              Trots detta är jag väldigt stolt över
              resultatet och det var ett väldigt lärorikt projekt!{" "}
            </p>
          </div>
          <div className="space"></div>
          */}
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
