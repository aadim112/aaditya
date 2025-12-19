import React from 'react';
import './Projects.css';
import { projectImages } from '../Assets/imageImports';

const ProjectOverview = ({ SelectedProject }) => {
  if (!SelectedProject) return null;
  
  return (
    <div className="project-overview" style={{ display: SelectedProject != null ? 'block' : 'none' }}>
      <p style={{ margin: '0px', fontFamily: 'poppins', fontWeight: 'bold', color: 'grey', fontSize: '19px' }}>Project Overview</p>
      <div className="prj-thumbnail">
        <img src={projectImages[SelectedProject.link] || SelectedProject.link} alt={SelectedProject.title} />
      </div>
      <p style={{ fontFamily: 'poppins', fontSize: '19px', fontWeight: 'bold', color: 'grey' }}>{SelectedProject.title}</p>
      <div className="tect-lang">
        {SelectedProject.technologies.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
      </div>
      <p style={{ fontFamily: 'poppins' }}>{SelectedProject.description}</p>
      <a href={SelectedProject.gitlink} style={{ textDecoration: 'none' }}>
        <div className="git-link">
          <i className="fa-brands fa-github fa-lg" style={{ color: '#ffffff' }}></i>
          <p>Github</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectOverview;

