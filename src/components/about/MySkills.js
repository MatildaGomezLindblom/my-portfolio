import React from "react";
import "../../styles/MySkills.scss";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { FaBrain } from "react-icons/fa6";

function About() {
  return (
    <div className="my-skills-container">
      <div className="title">
        <h2>Tre kompetensområden</h2>
        <i>Ett helhetsperspektiv.</i>
      </div>
      <div className="skills">
        <div className="skill skill-1">
          <IoHeart className="skills-icon icon1" />
          <div className="skills-title">
            <h3>Användarupplevelse (UX)</h3>
            <p>
              Användarupplevelsen är kärnan i min skapandeprocess. Att
              identifiera och förstå sig på sin målgrupp är kritsikt för att
              skapa tillgängliga och värdeskapande lösningar. Därför strävar jag
              alltid efter att förstå användarnas önskningar och behov genom att
              kombinera kvalitativ och kvantitativ data.
            </p>
          </div>
        </div>
        <div className="skill skill-2">
          <FaBrain className="skills-icon icon2" />
          <div className="skills-title">
            <h3>Utveckling</h3>
            <p>
              Jag har erfarenhet av allt ifrån systemnära programmering i C och
              machine learning i Python, till Webbutveckling med JavaScript i
              React och androidutevckling i Kotlin. Med min erfarenhet av både
              backend och frontend kan jag bidra till hela utvecklingsprocessen
              och lätt sätta mig in i nya språk och ramverk.
            </p>
          </div>
        </div>
        <div className="skill skill-3">
          <FaFireFlameCurved className="skills-icon icon3" />
          <div className="skills-title">
            <h3>Grafisk Design</h3>
            <p>
              Med mitt öga för färg och form, samt kunskap inom typografi och
              visuell hierarki, är jag skicklig på att kommunicera mina ideér
              visuellt och skapa tilltalande material för att effektivt skapa
              förståelse och förmedla buskap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
