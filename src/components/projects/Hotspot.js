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
import hotspotStoryboard from "../../assets/projects/Hotspot/hotspotStoryboard.png";
import hotspotMoodboard from "../../assets/projects/Hotspot/hotspotMoodboard.png";
import hotspotGraphicProfile from "../../assets/projects/Hotspot/hotspotGraphicProfile.png";
import hotspotHiFi from "../../assets/projects/Hotspot/hotspotHiFi.png";
import hotspotDatabase from "../../assets/projects/Hotspot/hotspotDatabase.png";
import { FaGithub } from "react-icons/fa";

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
        "Service layer till databasen",
        "Vännersidan",
        "Sökfunktion för vänner",
      ],
    },
  };

  const images = [
    {
      src: hotspotVersion1,
      legend:
        "I version 1 har funktionen “lägg till pin” en egen knapp i navbaren, vännersidan ligger i profilsidan.",
    },
    {
      src: hotspotVersion2,
      legend:
        "I version 2 är lägg till pin en flytande knapp vilket ger plats för vänner i navbaren.",
    },
    {
      src: hotspotVersion3,
      legend:
        "Version 3 har en navbar som ändrar funktionalitet beroende på vilken sida användaren befinner sig på.",
    },
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
            <h3>Storyboard</h3>
            <p>För att visualisera användarresan.</p>
            <img
              className="hotspot-storyboard"
              src={hotspotStoryboard}
              alt="Storyboard showing Emilia who goes to a new city and uses the app Hotspot to find restaurant recomendations."
            ></img>
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
              <ImageCarousel
                className="carousel-container"
                images={images}
              ></ImageCarousel>
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
          <div className="section-section">
            <h3>Moodboard och grafisk profil</h3>
            <p>
              Då vår applikation skulle innehålla en karta med pins samt många
              bilder valde vi att hålla oss till få färger och ett ljust tema.
              Vi valde en nedtonad röd för framhävda element såsom knappar, samt
              en beige-gul som komplement för att kunna skapa en snygg gradient.
            </p>
            <div className="mooadboard-graphicprofile-container">
              <img
                src={hotspotMoodboard}
                alt="Moodboard containing warm images of graphical interfaces and city locations."
              ></img>
              <img
                src={hotspotGraphicProfile}
                alt="Graphic profile with typeface, color palette and different button states."
              ></img>
            </div>
          </div>
          <div className="section-section">
            <h3>Hi-Fi</h3>
            <p>
              Utifrån moodboarden, den grafiska profilen och den uppdaterade
              lo-fien skapades en hi-fi i Figma, nedan är några av sidorna vi
              gjorde.
            </p>
            <img
              className="hotspotHiFi"
              src={hotspotHiFi}
              alt="5 of the screens of the final hi-fi prototype."
            ></img>
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
          <p>
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
              src={hotspotDatabase}
              alt="Visualisation of the databasestructure."
            ></img>
          </div>
          <div className="section-section">
            <h3>Kartan och pins</h3>
            <p>
              Kartan och pins är centrala delar av Hotspot. För kartvisningen
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
              Jag tog även på mig att fixa med databasen. Firebase var helt nytt
              för mig och det var en väldigt givande utmaning! Jag gjorde det
              mesta med databasen, från planering av struktur till ett service
              lager och testning. Under slutfasen av projektet såg jag till att
              integrera service-lagret med samtliga sidor i applikationen och
              såg till att datan flödade smidigt mellan alla komponenter så att
              applikationen fungerade som avsett.
              <br />
              <br />
              Det roligaste med projektet var att vi som grupp kunde skapa så
              pass mycket funktionalitet på kort tid tack vare vårt samarbete.
              Jag fick även chansen att lära mig om NoSQL och Firebase och min
              roll gjorde att jag hade en rätt bra överblick över hur allt
              skulle hänga ihop i slutändan.
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
              Hade vi fått göra om projektet hade jag struntat i att försöka
              fixa google signin då det inte var kompatibelt med expo i
              slutändan. Jag hade även sett till att vi gjorde en ännu mer
              utförlig planering i början för att se till att alla delar passade
              ihop bättre i slutet. Kanske hade jag struntat i viss
              funktionalitet såsom login för att hinna med tester på slutet för
              att få bort ännu fler buggar och varningar.
              <br />
              <br />
              Trots detta är jag väldigt stolt över resultatet och det var ett
              väldigt lärorikt projekt!{" "}
            </p>
            <p>
              <i>
                Hotspot gjordes tillsammans med Vilma Christensen, Linnea
                Nilsson, Olle Strandberg och Malin Ramstedt.
              </i>
            </p>
          </div>
          <div className="space"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="hotspotContainer">
      <div className="hotspot-hero-container">
        <ProjectOverview projectData={projectData} />
      </div>
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
