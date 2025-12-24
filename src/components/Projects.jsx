import React from 'react';
import './Projects.css';
import ProjectsData from '../Assets/ProjectDatabase';
import ProjectCard from './ProjectCard';
import ProjectOverview from './ProjectOverview';
import { projectImages } from '../Assets/imageImports';

const Projects = ({ selectedProject, setSelectedProject, isMobile }) => {
  const handleProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="project-tab">
      <h2 className="section-heading">Projects</h2>
      <div className="projects">
        <div className="project-preview">
          <p className="project-preview-heading">Working on projects in my most liked work. I do spend lot of the time developing the Solutions on the problems I see around me. Some of my works are below.</p>
          <div className={isMobile ? 'projects-container mobile-layout' : selectedProject ? 'projects-container three-' : 'projects-container two-columns'}>
            {ProjectsData.projects.map((projects, index) => {
              const imageSrc = projectImages[projects.link] || projects.link;
              return (
                <ProjectCard
                  key={index}
                  imgsrc={imageSrc}
                  projectName={projects.title}
                  ProjectSummary={projects.summary}
                  prj={projects}
                  github={projects.gitlink}
                  handleProject={handleProject}
                />
              );
            })}
          </div>
        </div>
        <ProjectOverview SelectedProject={selectedProject || ProjectsData.projects[0]} />
      </div>
    </div>
  );
};

export default Projects;

