import React, { useEffect, useState } from 'react';
import './About.css';
import profileImage from '../Assets/profile.jpg';
import profileImage2 from '../Assets/profile2.png'
import back1 from '../Assets/back1.jpg';
import back2 from '../Assets/back2.jpg';
import back3 from '../Assets/back3.jpg';
import pytorchDarkMode from '../Assets/PyTorchDarkMode.png';
import flaskDarkMode from '../Assets/flaskDarkMode.png';
import droneSurvillance from '../Assets/projectsimage/drone-surveillnace.jpeg'
import purechange from '../Assets/projectsimage/purechange.png'
import medilog from '../Assets/projectsimage/medilog.png'
import credly from '../Assets/credly.png'


const About = ({ isDarkMode, data }) => {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject,setSelectedProject] = useState(null);

  function showFeaturedProject(number) {
    setSelectedProject(number);
    setShowPopup(true);
  }
  const featuredProjectInfoDict = {"Drone":"Why Drone Surveillance System?Because of it's versatile use cases and Capabilities with AI. Drone are the mobile devices and best suite for surveillance. They can cover wide area for surveillance. Incorporating AI with drone opens door for many ideas and increases the efficiency and ensure continuous monitoring of specific area. By this system one person can manage multiple areas.So we created an Interface using .NET framework, a Server with MongoDB database, Fast API and Websocket for real time communication of application with drone, Created various supervised models and train them on synthetic data/images we generated from stable diffusion and used datasets from kaggle and Roboflow. We used about 50,000+ images to train and finetune the models to predict the Anomaly, Face detection in crowd, Threat detection etc. Since we didn't had any physical drone we used pyBullet,Gymnasium and gym-pybullet library to simulate the drone.We trained the drone to control the flight using Reinforcement Learning in the simulation.",
    "PureChnage" : "Pure Change is a structured self‑improvement platform that helps people build discipline, break unhealthy compulsive habits (especially excessive masturbation and digital distractions), and maintain healthy routines. It combines tracking, motivation, education, community and AI guidance so users can stay focused, increase self-control, and improve productivity and mental clarity.",
    "Medilog": "MEDILOG is a web-based platform designed to streamline the interaction between doctors and patients by offering an efficient appointment booking system, patient records management, and a user-friendly interface.Patients can register and log in to book appointments with their preferred doctors.Doctors can access patient history and manage appointments.The platform securely stores medical records and prescriptions for easy access.Reduces paperwork by digitizing patient records.Enhances the efficiency of scheduling appointments.Improves doctor-patient interaction by providing a centralized medical record system."
  }
  return (
    <div className="home">
      <h2 className="section-heading">Home</h2>
      <div className="banner-container">
        <div className="banner">
          <div className="image-container">
            <img src={profileImage2} alt="profile" width="100%" height="100%" style={{ objectFit: 'cover', borderRadius: '8px' }} />
          </div>
          <div className="about-container">
            <div className="about">
              <p className="about-heading">Welcome to my little corner of the web</p>
              <p className="about-text">Hello, I am Aditya Patil student at Dr. D. Y. Patil Institute of Engineering, Management and Research, Pune</p>
              <p className="about-text">I always try to create solution on problems I notice. I love to solve those issues
                using my technical skills and learn new technologies whenever needed. I have various projects in my bucket which are developed in order to solve such problems.
              </p>
              <p className="about-text">I have been doing web-development since 3 years and have good expertise in it. Many of my project are web platform based. Currently I am studying about Machine Learning and Advance Machine Learning concepts.</p>
              <p className="about-text">Apart from technical things I like to play video games as they are entertaining also they impove reflexes and increases fast decision making power.</p>
              <a href="" download className="resume-download-btn">
                <p>Resume</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="stat-label">
          <p>Find Me</p>
        </div>
        <div className="find-me">
          <i className="fa-brands fa-github fa-lg" style={{ color: isDarkMode ? 'white' : 'black' }}></i>
          <a href="https://github.com/aadim112" style={{ textDecoration: 'none' }}>
            <p style={{ color: 'black' }}>Github</p>
          </a>
        </div>
        <div className="find-me">
          <img src="https://user-images.githubusercontent.com/63964149/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png" style={{ width: '30px', height: '30px' }} alt="leetcode" />
          <a href="https://leetcode.com/u/aadi_m/" style={{ textDecoration: 'none' }}>
            <p style={{ color: 'black' }}>leet Code</p>
          </a>
        </div>
        <div className="find-me">
          <img src="https://codolio.com/codolio_assets/codolio.svg" style={{ width: '30px', height: '30px' }} alt="codolio" />
          <a href="https://codolio.com/profile/Aaditya" style={{ textDecoration: 'none' }}>
            <p style={{ color: 'black' }}>Codolio</p>
          </a>
        </div>
        <div className="find-me">
          <i className="fa-brands fa-linkedin fa-lg" style={{ color: 'rgba(25, 102, 204, 0.7)', scale: '1.2' }}></i>
          <a href="https://www.linkedin.com/in/adityapatilm/" style={{ textDecoration: 'none' }}>
            <p style={{ color: 'black' }}>Linkedin</p>
          </a>
        </div>
        <div className="find-me">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png" style={{ width: '30px', height: '30px', scale: '0.8' }} alt="kaggle" />
          <a href="https://www.kaggle.com/aaditya112" style={{ textDecoration: 'none' }}>
            <p style={{ color: 'black' }}>Kaggle</p>
          </a>
        </div>
        <div className="find-me">
          <img src={credly} style={{ width: '30px', height: '30px', scale: '0.8' }} alt="kaggle" />
          <a href="https://www.credly.com/users/aaditya-patil.bb99cd11" style={{ textDecoration: 'none' }}>
            <p style={{ color: 'black' }}>Credly</p>
          </a>
        </div>
      </div>
      <div className="tech-stack">
        <div className="cards">
          <div className="card-label"><p>Tech Stack</p></div>
          <div className="tec-container">
            <div className="tech">
              <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="python" />
              <p>Python</p>
            </div>
            <div className="tech">
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react" />
              <p>React</p>
            </div>
            <div className="tech">
              <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="html" />
              <p>HTML</p>
            </div>
            <div className="tech">
              <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="css" />
              <p>CSS</p>
            </div>
            <div className="tech">
              {isDarkMode ? <img src={flaskDarkMode} style={{ objectFit: 'cover' }} alt="flask" /> : <img src="https://cdn.worldvectorlogo.com/logos/flask.svg" alt="flask" />}
              <p>Flask</p>
            </div>
            <div className="tech">
              {isDarkMode ? <img src={pytorchDarkMode} style={{ scale: '2.2', objectFit: 'contain' }} alt="pytorch" /> : <img src="https://cdn.worldvectorlogo.com/logos/pytorch-2.svg" style={{ scale: '2.2' }} alt="pytorch" />}
            </div>
            <div className="tech">
              {isDarkMode ? <img src="https://img.icons8.com/?size=96&id=xSkewUSqtErH&format=png" style={{ objectFit: 'cover' }} alt="pandas" /> : <img src="https://img.icons8.com/?size=96&id=xSkewUSqtErH&format=png" alt="pandas" />}
              <p>Pandas</p>
            </div>
            <div className="tech">
              {isDarkMode ? <img src="https://gymnasium.farama.org/_static/img/gymnasium_white.svg" style={{ objectFit: 'cover' }} alt="gymnasium" /> : <img src="https://gymnasium.farama.org/_static/img/gymnasium_black.svg" alt="gymnasium" />}
              <p>Gymnasium</p>
            </div>
          </div>
        </div>
      </div>
      <p className="section-subheading">Featured Projects</p>
      <div className="featuredProjects">
        <div className="featureDiv1" onClick={() => showFeaturedProject({"BannerImage":droneSurvillance,"Title":"VIRA","Description":featuredProjectInfoDict.Drone})}></div>
        <div className="featureDiv2" onClick={() => showFeaturedProject({"BannerImage":medilog,"Title":"Medilog","Description":featuredProjectInfoDict.Medilog})}></div>
        <div className="featureDiv3" onClick={() => showFeaturedProject({"BannerImage":purechange,"Title":"Purechange","Description":featuredProjectInfoDict.PureChnage})}></div>
      </div>
      <p className="section-subheading-black">Know my cards</p>
      <div className="tech-stack">
        <div className="cards">
          <div className="card-label"><p>Competative</p></div>
          <div className="stat">
            <div className="total-questions">
              <p>Total Question</p>
              <h2>{data['Total Questions']}</h2>
            </div>
            <div className="total-questions">
              <p>Total Active day</p>
              <h2>{data['Total Days']}</h2>
            </div>
          </div>
        </div>
        <div style={{ height: '30px' }}></div>
      </div>
      
      {showPopup && (
      <div className="popup-overlay" onClick={() => setShowPopup(false)}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <div className='featuredProjectImage'>
            <img src={selectedProject.BannerImage}/>
          </div>
          <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>
          <div className='featuredProjectInfo'>
            <h3>{selectedProject.Title}</h3>
            <p>{selectedProject.Description}</p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default About;

