import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import MoreAboutMe from './components/about/MoreAboutMe';
import Contact from './components/contact/Contact';


import './styles/global.scss';
import { useTheme } from './components/ThemeContext'; // Import the useTheme hook

function App() {
  const { isDarkTheme, toggleTheme } = useTheme(); // Access the theme and toggleTheme function

  return (
    <div className="app-container">
      <Router>
      <div
        className={isDarkTheme ? 'dark-mode' : 'light-mode'}
      >
        <Navbar toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/MoreAboutMe" element={<MoreAboutMe />} />
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
                <section id="contact">
                  <Contact />
                </section>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>

    </div>
  );
}

export default App;