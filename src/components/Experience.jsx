import React from 'react';
import './Experience.css';
import ExperienceData from '../Assets/ExperienceData.json';
import { companyImages } from '../Assets/imageImports';

const Experience = ({ isDarkMode, data }) => {
  // Sample experience data - replace this with your JSON import
  const experienceData = ExperienceData;

  // Calculate duration from start and end dates
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth());
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years > 0 && remainingMonths > 0) {
      return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    } else if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    } else {
      return `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
  };

  return (
    <div className="Experience">
      <h2 className="section-heading">Experience</h2>
      
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            {index !== experienceData.length - 1 && <div className="timeline-line"></div>}
            
            <div className="experience-card">
              <div className="card-header">
                <div className="company-logo">
                  <img src={companyImages[exp.logo] || exp.logo} alt={`${exp.company} logo`} />
                </div>
                <div className="header-content">
                    <div style={{display:'flex',alignItems:'center',gap:'20px',height:'40px',margin:'0px'}}>
                        <h3 className="company-name">{exp.company}</h3>
                        <p className="role">{exp.role}</p>
                    </div>
                  <p className="duration">
                    {exp.startDate} - {exp.endDate} • {calculateDuration(exp.startDate, exp.endDate)}
                  </p>
                </div>
              </div>
              
              <div className="work-description">
                <ul className="work-points">
                  {exp.workPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;