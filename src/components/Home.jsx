import React from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Certifications from './Certifications';
import Contact from './Contact';

import TutorialsCTA from './TutorialsCTA';

const Home = ({ setCurrentView }) => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TutorialsCTA onNavigate={setCurrentView} />
      <Certifications />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
