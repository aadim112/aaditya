import React from 'react';
import './Resume.css';
import Resume from '../Assets/Resume.pdf';

const ResumeSection = () => {
  return (
    <div className="resume">
      <h2 className="section-heading">Resume</h2>
      <div className="resume-container">
        <iframe src={Resume} style={{ width: '100%', height: '1000px', outline: 'none', border: '0px' }} title="Resume" />
      </div>
    </div>
  );
};

export default ResumeSection;

