import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero"; // Updated component name
import About from './components/about/About';

function App() {
  return (
    <div style={{ backgroundColor: "yellow", width: "100vw", height: "100vh" }}>
      <Navbar></Navbar>

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

    </div>

    /*  <div>
      
      <Navbar />
      <Router>
        <Routes>
        <Route path="/">
            <section id="hero">
              <Hero />
            </section>

            <div class="Divider"></div>
      
            <section id="about">
              <About />
            </section>
          </Route>
        </Routes>
      </Router> 
    </div> */
  );
}

export default App;
