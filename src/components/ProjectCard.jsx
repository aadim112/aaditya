import React from 'react';
import './Projects.css';

const ProjectCard = ({ imgsrc, projectName, ProjectSummary, prj, github, handleProject }) => {
  return (
    <div className="prj">
      <div className="prj-img-container">
        <a href={github}>
          <img src={imgsrc} alt={projectName} />
        </a>
      </div>
      <h2>{projectName}</h2>
      <p style={{ width: '80%', fontFamily: 'poppins', fontSize: '14px' }}>{ProjectSummary}</p>
      <div className="view-prj" onClick={() => { handleProject(prj) }}>
        <p style={{ fontFamily: 'poppins', margin: '10px' }}>View</p>
        <i className="fa-solid fa-arrow-right" style={{ color: '#ffffff', marginRight: '10px' }}></i>
      </div>
    </div>
  );
};

export default ProjectCard;


