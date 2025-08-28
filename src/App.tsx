import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';
import { scrollToSection } from './utils/scrollTo';
import './styles/globals.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sections = ['hero', 'about', 'skills', 'experience', 'education', 'contact'];
  const activeSection = useScrollSpy(sections);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="portfolio">
      <Background />
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={scrollToSection} 
      />
      <Hero 
        isLoaded={isLoaded} 
        onScrollToSection={scrollToSection} 
      />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
