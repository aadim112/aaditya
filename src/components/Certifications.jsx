import React from 'react';
import './Certifications.css';
import ProjectsData from '../Assets/ProjectDatabase';
import CertificateCard from './CertificateCard';

const Certifications = () => {
  return (
    <div className="Certification">
      <h2 className="section-heading">Certifications</h2>
      <p className="cert-description">Below are some of my certifications from some of the well-known websites and competitive websites.</p>
      <div className="certificate-container">
        {ProjectsData.certifications.map((certificate, index) => (
          <CertificateCard
            key={index}
            title={certificate.title}
            imaglink={certificate.link}
            platform={certificate.platform}
            credentials={certificate.credential}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;



