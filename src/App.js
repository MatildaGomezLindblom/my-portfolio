import {React, useState, useEffect} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import MoreAboutMe from './components/about/MoreAboutMe';
import Contact from './components/contact/Contact';
import ProjectsSection from './components/projects/ProjectsSection';
import Hotspot from './components/projects/Hotspot';
import Memosphere from './components/projects/Memosphere';
import DF from './components/projects/DF';
import SoB from './components/projects/SoB';

import './styles/global.scss';
import { useTheme } from './components/ThemeContext'; 
import Loading from './components/Loading';

function App() {
  const { isDarkTheme, toggleTheme } = useTheme(); 
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  //simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => setIsLoading(false), 800); 
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Router>
      {isLoading ? (
          <Loading  fadeOut={fadeOut}/>
        ) : (
      <div
        className={isDarkTheme ? 'dark-mode' : 'light-mode'}
      >
        <Navbar toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/MoreAboutMe" element={<MoreAboutMe />} />
          <Route path="/Hotspot" element={<Hotspot />} />
          <Route path="/Memosphere" element={<Memosphere />} />
          <Route path="/DF" element={<DF />} />
          <Route path="/SoB" element={<SoB />} />
          <Route
            path="/"
            element={
              <div>
                <section id="hero">
                  <Hero toggleTheme={toggleTheme}/>
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="projectsSection">
                  <ProjectsSection />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </div>
            }
          />
        </Routes>
      </div>
      )}
    </Router>

    </div>
  );
}

export default App;