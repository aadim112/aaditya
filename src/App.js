import React, { useEffect, useState } from 'react';
import './App.css'; // Move the styles to a separate CSS file
import Aos from 'aos';
import 'aos/dist/aos.css';

const Bargraph = ({w,tp}) => {
  return(
    <div className='topic-div'>
      <div style={{fontFamily:'poppins',fontWeight:'bold',fontSize:'14px',color:'rgb(89, 89, 89)',display:'flex',alignItems:'center'}}>{tp} </div>
      <div style={{fontFamily:'poppins',fontSize:'14px',width:`${w}%`,height:'95%',backgroundColor:'#1f0538',color:'white',textAlign:'center',fontWeight:'bold',marginLeft:'20px',borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px'}}>{w}</div>
    </div>
  )
}

function App() {

  const w = [0,1,2,3]
  const [window,setWindow] = useState(0);

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
  return (
    <div className="layout">
      <div className="static-layout">
        <div className="left-controll">
        </div>
        <div className="options">
          <div className="opt" onClick={ () => {handleWindow(0)}}><i className="fa-regular fa-address-card fa-lg"></i><p>About</p></div>
          <div className="opt" onClick={ () => {handleWindow(1)}}><i className="fa-solid fa-laptop fa-lg"></i><p>Projects</p></div>
          <div className="opt" onClick={ () => {handleWindow(2)}}><i class="fa-solid fa-trophy fa-lg"></i><p>Certifications</p></div>
          <div className="opt" onClick={ () => {handleWindow(3)}}><i className="fa-solid fa-file fa-lg"></i><p>CV/Resume</p></div>
          <div className="opt"><p>Work in Progress</p></div>
        </div>
      </div>
      <div className="dynamic-layout" id="dynamic">
        <p style={{fontFamily:'Poppins',fontSize:'35px',marginBottom:'0px',fontWeight:'bold',marginLeft:'30px'}}>Aditya M Patil</p>
        <div className="home" style={{display:window === 0 ? 'block' : 'none'}}>
            <div className="banner-container">
              <div className="banner">
                <div className="image-container">
                  <img src="https://media.licdn.com/dms/image/v2/D4D35AQFR7yBIx2ugqQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1710594384324?e=1736319600&v=beta&t=bNexletunAqiaS_tztFuCoseH6zS73qpZNskFELKUNU" alt="image" width="100%" height="100%" style={{objectFit:'cover',borderRadius:'8px'}}/>
                </div>
                <div className="about-container">
                  <div className="about">
                    <p style={{ color: '#FFD524', marginLeft: '20px', fontFamily: 'Poppins', fontWeight: 300, fontSize: '20px', marginBottom: '0px'}}>Welcome to my little corner of the web</p>
                    <p style={{ marginLeft: '20px', fontFamily: 'poppins', color: 'white', marginTop: '5px',fontSize:'13px', marginBottom:'10px'}}>Hello, I am Aditya Patil student at Dr. D. Y. Patil Institute of Engineering, Management and Research, Pune</p>
                    <p style={{ marginLeft: '20px', fontFamily: 'poppins', color: 'white', marginTop: '5px',fontSize:'13px', marginBottom:'10px'}}>I always try to seek for solution any technical problems. I love to solve this issues
                      using my technical skills and learn them whenever needed.I have varius projects in my bucket which were devloped to solve such problems.
                    </p>
                    <p style={{ marginLeft: '20px', fontFamily: 'poppins', color: 'white', marginTop: '5px',fontSize:'13px', marginBottom:'10px'}}>I have good knowledge of website development and deployment. Many of my project use web platform. Currently I am studying about Machine Learning and Advance Machine Learning concepts.</p>
                    <p style={{ marginLeft: '20px', fontFamily: 'poppins', color: 'white', marginTop: '5px',fontSize:'13px', marginBottom:'10px'}}>Apart from technical things I like to play video games as they are entertaining also they impove reflexes and increases fast decision making power.</p>
                  </div>
                </div>
              </div>
            </div>
          <div className="stats">
            <div className="stat-label">
              <p>Find Me</p>
            </div>
            <div className="find-me">
              <i className="fa-brands fa-github fa-lg" style={{ color: 'black' }}></i>
              <a href='https://github.com/aadim112' style={{textDecoration:'none'}}><p  style={{color:'black'}}>Github</p></a>
            </div>
            <div className="find-me">
              <img src="https://user-images.githubusercontent.com/63964149/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png" style={{ width: '30px', height: '30px' }} />
              <a href='https://leetcode.com/u/aadi_m/' style={{textDecoration:'none'}}><p style={{color:'black'}}>leet Code</p></a>
            </div>
            <div className="find-me">
              <img src="https://codolio.com/codolio_assets/codolio.svg" style={{ width: '30px', height: '30px' }} />
              <a href='https://codolio.com/profile/Aaditya' style={{textDecoration:'none'}}><p style={{color:'black'}}>Codolio</p></a>
            </div>
            <div className="find-me">
              <i className="fa-brands fa-linkedin fa-lg" style={{ color: 'rgba(25, 102, 204, 0.7)' }}></i>
              <a href='www.linkedin.com/in/adityapatilm' style={{textDecoration:'none'}}><p style={{color:'black'}}>Linkedin</p></a>
            </div>
          </div>
          <p style={{ fontFamily: 'poppins', color: 'black', marginLeft: '30px', fontSize: '20px', fontWeight: 'bold' }}>Know my cards</p>
          <div className="tech-stack">
            <div className="cards">
              <div className='card-label'><p>Tech Stack</p></div>
              <div className='tec-container'>
                <div className='tech'>
                  <img src='https://cdn.worldvectorlogo.com/logos/python-5.svg'></img>
                  <p>Python</p>
                </div>
                <div className='tech'>
                  <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg'></img>
                  <p>React</p>
                </div>
                <div className='tech'>
                  <img src='https://cdn.worldvectorlogo.com/logos/html-1.svg'></img>
                  <p>HTML</p>
                </div>
                <div className='tech'>
                  <img src='https://cdn.worldvectorlogo.com/logos/css-3.svg'></img>
                  <p>CSS</p>
                </div>
                <div className='tech'>
                  <img src='https://cdn.worldvectorlogo.com/logos/flask.svg'></img>
                  <p>Flask</p>
                </div>
              </div>
              <div className='tec-knowledge'>
                <p style={{fontFamily:'Noto Serif JP',textAlign:'left',margin:'0px',fontSize:'19px'}}>Projects with the tech stack</p>
                <div className='tec-kn-container'>
                  <br></br>
                  <span style={{fontFamily:'poppins',fontWeight:'bold'}}>Canteen Webiste - </span><span style={{fontFamily:'Poppins'}}>Python (Backend) | HTML CSS JavaScript (Frontend) | Sqlite(Database)</span>
                  <br></br><br></br>
                  <span style={{fontFamily:'poppins',fontWeight:'bold'}}>Home Assistant - </span> <span style={{fontFamily:'Poppins'}}>Python (Void Recognision) | C++ (Arduino Programming)</span>
                  <br></br><br></br>
                  <span style={{fontFamily:'poppins',fontWeight:'bold'}}>Accomodation -  </span><span style={{fontFamily:'Poppins'}}>React(JavaScript) (Frontend) | Firebase (Database)</span>
                  <br></br><br></br>
                  <span style={{fontFamily:'poppins',fontWeight:'bold'}}>Portfolio Website - </span><span style={{fontFamily:'Poppins'}}>Python (Backend) | HTML CSS JavaScript (Frontend) | Sqlite(Database)</span>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className='card-label'><p>Competative</p></div>
              <div className='stat'>
                <div className='total-questions'>
                  <p>Total Question</p>
                  <h2>59</h2>
                </div>
                <div className='total-questions'>
                <p>Total Active day</p>
                <h2>30</h2>
                </div>
                <div className='DAS-topics'>
                  <p style={{marginLeft:'20px',fontFamily:'Poppins',color:'grey',fontWeight:'bold',marginBottom:'0px'}}>DSA Topics Analysis</p>
                  <div className='topics'>
                    <Bargraph w={20} tp = 'Array'/>
                    <Bargraph w={8} tp = 'Sorting'/>
                    <Bargraph w={8} tp ='Greedy Algorithm'/>
                    <Bargraph w={7} tp ='String'/>
                    <div style={{width:'100%',height:'30px',alignItems:'center',justifyContent:'center',display:'flex',fontFamily:'poppins',fontSize:'12px',marginTop:'10px'}}>show more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projects" style={{display:window === 1 ? 'block' : 'none'}}>
          <h2 style={{ fontFamily: 'Poppins', marginLeft: '30px' }}>Projects</h2>
          <p style={{ fontFamily: 'poppins', marginLeft: '30px', textAlign: 'left', width: '70%' }}>Working on projects in my most liked work. I do spend lot of the time developing the Solutions on the problems I see around me. Some of my works are below.</p>
          <div className="projects-container">
            <div className="prj">
              <div className='prj-img-container'><img src="https://images.unsplash.com/photo-1530546171585-cc042ea5d7ab?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
              <h2>Home Assistant Using Arduino</h2>
              <p style={{ width: '80%', fontFamily: 'poppins', fontSize: '14px' }}>Home Assistant was a simple model was created in intentions to serve as home member.</p>
              <div className="view-prj"><p style={{ fontFamily: 'poppins', margin: '10px' }}>View</p><i className="fa-solid fa-arrow-right" style={{ color: '#ffffff', marginRight: '10px' }}></i></div>
            </div>
            <div className="prj">
            <div className='prj-img-container'><img src="https://images.unsplash.com/photo-1530695801911-f188c516550a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
              <h2>Canteen Management Website</h2>
              <p style={{ width: '80%', fontFamily: 'poppins', fontSize: '14px' }}>This project was taken as a challenge to create a website to handle massive unorganized food serving techniques on college canteen.</p>
              <div className="view-prj"><p style={{ fontFamily: 'poppins', margin: '10px' }}>View</p><i className="fa-solid fa-arrow-right" style={{ color: '#ffffff', marginRight: '10px' }}></i></div>
            </div>
            <div className="prj">
            <div className='prj-img-container'><img src="https://figures.semanticscholar.org/fc3757fac22d5e0983baf60e82883455bbe88906/3-Figure2-1.png" /></div>
              <h2>Router</h2>
              <p style={{ width: '80%', fontFamily: 'poppins', fontSize: '14px' }}>This project is based on the ESP32 and object Detection in ML and guiding people who are unable to see clearly. This uses haptic feedback to the user at different positions on the hand.</p>
              <div className="view-prj"><p style={{ fontFamily: 'poppins', margin: '0px' }}>View</p><i className="fa-solid fa-arrow-right" style={{ color: '#ffffff', marginRight: '10px' }}></i></div>
            </div>
          </div>
        </div>
        <div className="Certification" style={{display:window === 2 ? 'block' : 'none'}}>
          <h2 style={{ fontFamily: 'Poppins', marginLeft: '30px', textAlign: 'center'}}>Certifications</h2>
          <p style={{ fontFamily: 'poppins', marginLeft: '30px',textAlign:'center' }}>Below are some of my certifications from some of the well-known websites and competitive websites.</p>
        </div>
      </div>
    </div>
  );
}

export default App;