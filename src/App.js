import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import MoreAboutMe from "./components/about/MoreAboutMe";

function App() {
  return (
    <Router>
      <div
        style={{ backgroundColor: "blue", width: "100vw", height: "100vh" }}
      >
        <Navbar></Navbar>

        <Routes>
          <Route path="/MoreAboutMe" element={<MoreAboutMe/>} />
          <Route
            path="/"
            element={
              <div>
                <section id="hero">
                  <Hero />
                </section>
                <section id="about">
                  <About />
                </section>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
