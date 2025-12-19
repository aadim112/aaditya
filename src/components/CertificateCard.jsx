import React from 'react';
import './Certifications.css';
import { certificateImages } from '../Assets/imageImports';

const CertificateCard = ({ imaglink, platform, credentials, title }) => {
  return (
    <div className="certficate-card">
      <div className="cert-image">
        <img style={{ width: '100%', height: '100%' }} src={certificateImages[imaglink] || imaglink} alt="certificate" />
      </div>
      <a href="#" style={{ textDecoration: 'none', color: 'black', fontFamily: 'poppins' }}>
        <div className="cert-info">
          <p style={{ fontWeight: 'bold' }}>{title}</p>
          <p>From : {platform}</p>
          <p>Credentials : {credentials}</p>
        </div>
      </a>
    </div>
  );
};

export default CertificateCard;

