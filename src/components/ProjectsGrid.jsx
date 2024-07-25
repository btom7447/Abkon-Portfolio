import React from 'react';
import projectsData from './ProjectsData';

const ProjectsGrid = () => {
  return (
    <div className="projects-grid">
      {projectsData.map(project => (
        <div key={project.id} className="project-item">
          <img src={project.image} alt={project.name} className="project-image" />
          <div className="project-info">
            <p>{project.type}</p>
            <h6>{project.name}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
