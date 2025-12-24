import React from 'react';
import './Navigation.css';

const Navigation = ({ handleWindow, isDarkMode }) => {
  return (
    <div className="static-layout">
      <div className="options">
        <div className="opt" onClick={() => { handleWindow(0) }}>
          <i className="fa-regular fa-address-card fa-lg"></i>
          <p>About</p>
        </div>
        <div className="opt" onClick={() => { handleWindow(1) }}>
          <i className="fa-solid fa-briefcase fa-lg"></i>
          <p>Experience</p>
        </div>
        <div className="opt" onClick={() => { handleWindow(2) }}>
          <i className="fa-solid fa-laptop fa-lg"></i>
          <p>Projects</p>
        </div>
        <div className="opt" onClick={() => { handleWindow(3) }}>
          <i className="fa-solid fa-certificate fa-lg"></i>
          <p>Courses</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

