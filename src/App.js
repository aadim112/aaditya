import React, { useEffect, useState } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ProjectsData from './Assets/ProjectDatabase';
import LightBulbToggle from './LightBulbToggle';
import GridBackground from './GridBackground';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import NeuralNet from './Assets/neral.png'
import Japan from './Assets/japan.png'
import game from './Assets/game.png'




function App() {

  const w = [0,1,2,3]
  const [windowWidth,setWindow] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Keep this state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [data,setData] = useState({
    'Active Days': 0,
    'Total Contributions':0,
    'Total Days':176,
    'Total Questions':143
  });

useEffect(() => {
  fetch('https://aaditya-qpx9.onrender.com/')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('API Response:', data);
      setData({
        'Active Days': data['Active Days'],
        'Total Contributions': data['Total Contributions'],
        'Total Days': data['Total Days'],
        'Total Questions': data['Total Questions'],
      });
    })
    .catch(error => {
      console.error('Error fetching data from API:', error);
    });
}, []); 


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const handleWindow = (e) => {
    console.log(e);
    setWindow(e);
  };
  

    // Initialize AOS only once
    useEffect(() => {
      Aos.init({
        duration: 1000,
        offset: 50,
        easing: 'ease-in-out',
      });
    }, []);

    // Apply dark mode class to body
    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [isDarkMode]);
    


    return (
    <GridBackground isDarkMode={isDarkMode}>
      <LightBulbToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <div className={`layout ${isDarkMode ? 'dark-mode' : ''}`}>
          <Navigation handleWindow={handleWindow} isDarkMode={isDarkMode} />
          <div className="dynamic-layout" id="dynamic">
            <div className="main-heading">
              <p style={{marginBottom:'0px'}}>Aditya M Patil</p> 
              <div className="main-subheading">
                <div><img src={NeuralNet}></img>Machine Learning Student</div>
                <div style={{}}><img src={Japan}></img>Learning 日本語</div>
              </div>
            </div> 
            <div style={{display:windowWidth === 0 ? 'block' : 'none'}}>
              <About isDarkMode={isDarkMode} data={data} />
            </div>
            <div style={{display:windowWidth === 1 ? 'block' : 'none'}}>
              <Experience isDarkMode={isDarkMode} data={data} />
            </div>
            <div style={{display:windowWidth === 2 ? 'block' : 'none'}}>
              <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject} isMobile={isMobile} />
            </div>
            <div style={{display:windowWidth === 3 ? 'block' : 'none'}}>
              <Certifications />
            </div>
          </div>
        </div>
        <footer>
          <p>© 2025 Aditya Patil. All rights reserved.</p>
        </footer>
    </GridBackground>
  );
}

export default App;
