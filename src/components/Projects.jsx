import React from 'react';
import ProjectsGrid from './ProjectsGrid';
import Testimonial from './Testimonial';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-caption">
        <h1>Featured Brand Designs</h1>
        <p>
          A curated display of my ingenius brand designs, highlighting my expertise in creating compelling visual identities that capture the heart of each brand. From logos to integrated brand systems, I've selected these projects to demonstrate my ability to deliver creative, results-driven design solutions that elevate brands and drive business growth.
        </p>
      </div>
      <ProjectsGrid />
      <Testimonial />
    </section>
  );
};

export default Projects;
