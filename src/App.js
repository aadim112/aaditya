import React from 'react';
import './App.css'; // Move the styles to a separate CSS file

function App() {
  return (
    <div className="layout">
      <div className="static-layout">
        <div className="left-controll">
          <div className="controll">
            <div style={{ width: '30px', height: '5px', backgroundColor: 'white', borderRadius: '2px' }}></div>
            <div style={{ width: '30px', height: '5px', backgroundColor: 'white', borderRadius: '2px' }}></div>
            <div style={{ width: '30px', height: '5px', backgroundColor: 'white', borderRadius: '2px' }}></div>
          </div>
          <p>Aditya M Patil</p>
        </div>
        <div className="options">
          <div className="opt"><i className="fa-regular fa-address-card fa-lg"></i><p>About</p></div>
          <div className="opt"><i className="fa-solid fa-laptop fa-lg"></i><p>Projects</p></div>
          <div className="opt"><i class="fa-solid fa-trophy fa-lg"></i><p>Certifications</p></div>
          <div className="opt"><i className="fa-solid fa-file fa-lg"></i><p>CV/Resume</p></div>
        </div>
      </div>
      <div className="dynamic-layout" id="dynamic">
        <div className="home">
          <div className="banner-container">
            <div className="banner">
              <div className="image-container">
                <img src="https://media.licdn.com/dms/image/v2/D4D35AQFR7yBIx2ugqQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1710594384324?e=1736319600&v=beta&t=bNexletunAqiaS_tztFuCoseH6zS73qpZNskFELKUNU" alt="image" width="100%" height="100%" style={{objectFit:'cover',borderRadius:'8px'}}/>
              </div>
              <div className="about-container">
                <div className="about">
                  <p style={{ color: '#FFD524', marginLeft: '20px', fontFamily: 'Poppins', fontWeight: 300, fontSize: '20px', marginBottom: '0px' }}>Aditya Patil</p>
                  <p style={{ marginLeft: '20px', fontFamily: 'poppins', color: 'white', marginTop: '5px' }}>Here is all about me and my tech stack and we will write this very quick.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="stat-label">
              <p>Find Me</p>
            </div>
            <div className="find-me" style={{ marginLeft: '20px' }}>
              <i className="fa-brands fa-github fa-lg" style={{ color: 'black' }}></i>
              <p>Github</p>
            </div>
            <div className="find-me">
              <img src="https://user-images.githubusercontent.com/63964149/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png" style={{ width: '30px', height: '30px' }} />
              <p>leet Code</p>
            </div>
            <div className="find-me">
              <img src="https://codolio.com/codolio_assets/codolio.svg" style={{ width: '30px', height: '30px' }} />
              <p>Codolio</p>
            </div>
            <div className="find-me">
              <i className="fa-brands fa-linkedin fa-lg" style={{ color: 'rgba(25, 102, 204, 0.7)' }}></i>
              <p>Linkedin</p>
            </div>
          </div>
          <p style={{ fontFamily: 'poppins', color: '#FFD524', marginLeft: '60px', fontSize: '20px', fontWeight: 400 }}>Know my cards</p>
          <div className="tech-stack">
            <div className="cards">
              <div className='card-label'><p>Tech Stack</p></div>
              <div className='tec-container'>
                <div className='tech'>
                  <p>Python</p>
                  <img src='https://cdn.worldvectorlogo.com/logos/python-5.svg'></img>
                </div>
                <div className='tech'>
                  <p>React</p>
                  <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg'></img>
                </div>
                <div className='tech'>
                  <p>HTML</p>
                  <img src='https://cdn.worldvectorlogo.com/logos/html-1.svg'></img>
                </div>
                <div className='tech'>
                  <p>CSS</p>
                  <img src='https://cdn.worldvectorlogo.com/logos/css-3.svg'></img>
                </div>
                <div className='tech'>
                  <p>Flask</p>
                  <img src='https://cdn.worldvectorlogo.com/logos/flask.svg'></img>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className='card-label'><p>Competative</p></div>
            </div>
          </div>
        </div>
        <div className="projects">
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
        <div className="Certification">
          <h2 style={{ fontFamily: 'Poppins', marginLeft: '30px', textAlign: 'center' }}>Certifications</h2>
          <p style={{ fontFamily: 'poppins', marginLeft: '30px', textAlign: 'left', width: '70%', textAlign: 'center' }}>Below are some of my certifications from some of the well-known websites and competitive websites.</p>
        </div>
      </div>
    </div>
  );
}

export default App;