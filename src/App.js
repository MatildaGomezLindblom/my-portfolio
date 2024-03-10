import React, { Suspense, useEffect,useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import './styles/global.scss';
import { useTheme } from './components/ThemeContext'; // Import the useTheme hook
//import Hero from './components/hero/Hero';
// Lazy load components
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/hero/Hero'));
const About = React.lazy(() => import('./components/about/About'));
const MoreAboutMe = React.lazy(() => import('./components/about/MoreAboutMe'));
const Contact = React.lazy(() => import('./components/contact/Contact'));
const Projects = React.lazy(() => import('./components/projects/Projects'));

function App() {
  const { isDarkTheme, toggleTheme } = useTheme(); // Access the theme and toggleTheme function

  const [isLoading, setIsLoading] = useState(true);
  const [projectIsLoading, setProjectIsLoading] = useState(true);

/*   useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 7000); // Adjust the delay as needed
  }, []); */

  useEffect(() => {
    if (!projectIsLoading) {
      setIsLoading(false);
    }
  }, [projectIsLoading]);

  return (
    <div className="app-container">
      <Router>
      <div
        className={isDarkTheme ? 'dark-mode' : 'light-mode'}
      >

        <Routes>
          <Route path="/MoreAboutMe" element={<MoreAboutMe />} />
          <Route
            path="/"
            element={
              <div>
                <section id="hero">
                  <Hero toggleTheme={toggleTheme}/>
                </section>
                <Suspense fallback={<Loading />}>
                {!isLoading && (
                  <>
                  <Navbar toggleTheme={toggleTheme} />
                  <section id="about">
                  <About />
                </section>
                <section id="projects">
                  <Projects doneLoading={setProjectIsLoading(false)}/>
                </section>
                <section id="contact">
                  <Contact />
                </section>
                  </>
                        )}
                  {isLoading && ( <>
                  <Loading/>
                  </>
                        )}   
                        </Suspense>   
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