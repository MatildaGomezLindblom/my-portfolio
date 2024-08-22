import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary";
import "../../styles/Hotspot.scss";
import { useLayoutEffect } from "react";
import ButtonSecondary from "../ButtonSecondary";
import VerticalNavbar from "./VerticalNavbar";

function Hotspot() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const sections = [
    { id: "section1", title: "DESIGN" },
    { id: "section2", title: "UTVECKLING" },
    { id: "section3", title: "RESULTAT" },
    { id: "section4", title: "MITT BIDRAG" },
  ];

  return (
    <div className="hotspotContainer">
      <div className="heroContainer"></div>
      <div className="hero">

      </div>
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
