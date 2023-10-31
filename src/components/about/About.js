import React from 'react';
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{  width: '100vw', height: '100vh',backgroundColor: 'yellow' }}>
     <Link to="/MoreAboutMe">More About Me</Link>
    </div>
  );
}

export default About;
