import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const Main = () => {
  return (
    <div className="main-content">
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
};

export default Main;
