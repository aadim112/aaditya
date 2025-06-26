import React, { useEffect, useState } from 'react';
import './App.css'; // Move the styles to a separate CSS file
import Aos from 'aos';
import 'aos/dist/aos.css';
import ProjectsData from './Assets/ProjectDatabase'
import profileImage from './Assets/profile.jpg'
import Resume from './Assets/Resume.pdf'
import LightBulbToggle from './LightBulbToggle';
import pytorchDarkMode from './Assets/PyTorchDarkMode.png'
import flaskDarkMode from './Assets/flaskDarkMode.png'


function App() {

  const w = [0,1,2,3]
  const [windowWidth,setWindow] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Keep this state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  //Fetching the api key
  const response = fetch('https://aaditya-qpx9.onrender.com/')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Assuming it contains the API key
  })
  .catch(error => {
    console.error('Error fetching API key:', error);
  });
  console.log(response)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const handleWindow = (e) => {
    console.log(e);
    setWindow(e);
  };
  
  const handleProject = (project) => {
    setSelectedProject(project);
    console.log(selectedProject)
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
    
    // ////////////////////////////////////////////////////Components Here
    const ProjectOverview = ({SelectedProject}) => {
      if (!SelectedProject) return null;
      return(
        <div className='project-overview' style={{display:SelectedProject != null ? 'block' : 'none'}}>
          <p style={{margin:'0px',fontFamily:'poppins',fontWeight:'bold',color:'grey',fontSize:'19px'}}>Project Overview</p>
          <div className='prj-thumbnail'>
            <img src={require(`${SelectedProject.link}`)} alt={SelectedProject.title} />
          </div>
          <p style={{fontFamily:'poppins',fontSize:'19px',fontWeight:'bold',color:'grey'}}>{SelectedProject.title} </p>
          <div className='tect-lang'>
            {SelectedProject.technologies.map((tech,index)=>(
                <p key={index}>{tech}</p>
            ))}
          </div>
          <p style={{fontFamily:'poppins'}}>{SelectedProject.description}</p>
          <a href={SelectedProject.gitlink} style={{textDecoration:'none'}}><div className='git-link'>
            <i class="fa-brands fa-github fa-lg" style={{color: '#ffffff'}}></i>
            <p>Github</p>
          </div></a>
        </div>
      )
    }

    const ProjectCards = ({imgsrc,projectName,ProjectSummary,prj,github}) => {
      return (
      <div className="prj">
        <div className='prj-img-container'><a href={github}><img src={imgsrc} /></a></div>
        <h2>{projectName}</h2>
        <p style={{ width: '80%', fontFamily: 'poppins', fontSize: '14px' }}>{ProjectSummary}</p>
        <div className="view-prj" onClick={() => {handleProject(prj)}}><p style={{ fontFamily: 'poppins', margin: '10px' }}>View</p><i className="fa-solid fa-arrow-right" style={{ color: '#ffffff', marginRight: '10px' }}></i></div>
      </div>
      )
    };


    const Bargraph = ({w,tp}) => {
      return(
        <div className='topic-div'>
          <div style={{fontFamily:'poppins',fontWeight:'bold',fontSize:'14px',color:'rgb(89, 89, 89)',display:'flex',alignItems:'center'}}>{tp} </div>
          <div style={{fontFamily:'poppins',fontSize:'14px',width:`${w}%`,height:'95%',backgroundColor:'#1f0538',color:'white',textAlign:'center',fontWeight:'bold',marginLeft:'20px',borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px'}}>{w}</div>
        </div>
      )
    };

    const CertificateCard = ({imaglink,platform,credentials,title}) => {
      return(
        <div className='certficate-card'>
          <div className='cert-image'>
            <img style={{width:'100%',height:'100%'}} src={require(`${imaglink}`)} alt='certicate'></img>
          </div>
          <a href='#' style={{textDecoration:'none',color:'black',fontFamily:'poppins'}}>
            <div className='cert-info'>
              <p style={{fontWeight:'bold'}}>{title}</p>
              <p>From : {platform}</p>
              <p>Credentials : {credentials}</p>
            </div>
          </a>
        </div>
      )
    };
    /////////////////////////////////////////////////////////Components End/////////////

    return (
    <>
      <div className={`layout ${isDarkMode ? 'dark-mode' : ''}`}>
        <LightBulbToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <div className="static-layout">
          <div className="options">
            <div className="opt" onClick={ () => {handleWindow(0)}}><i className="fa-regular fa-address-card fa-lg"></i><p>About</p></div>
            <div className="opt" onClick={ () => {handleWindow(1)}}><i className="fa-solid fa-laptop fa-lg"></i><p>Projects</p></div>
            <div className="opt" onClick={ () => {handleWindow(2)}}><i class="fa-solid fa-trophy fa-lg"></i><p>Certifications</p></div>
            <div className="opt" onClick={ () => {handleWindow(3)}}><i className="fa-solid fa-file fa-lg"></i><p>CV/Resume</p></div>
          </div>
        </div>
        <div className="dynamic-layout" id="dynamic">
          <p style={{fontFamily:'Poppins',fontSize:'35px',marginBottom:'0px',fontWeight:'bold',marginLeft:'30px'}}>Aditya M Patil</p>
          <div className="home" style={{display:windowWidth === 0 ? 'block' : 'none'}}>
          <h2 style={{ fontFamily: 'Poppins', marginLeft: '30px', color:'grey'}}>Home</h2>
              <div className="banner-container">
                <div className="banner">
                  <div className="image-container">
                    <img src={profileImage} alt="image" width="100%" height="100%" style={{objectFit:'cover',borderRadius:'8px'}}/>
                  </div>
                  <div className="about-container">
                    <div className="about">
                      <p className='about-heading' style={{ color: '#FFD524', fontFamily: 'Poppins', fontWeight: 300, fontSize: '20px', marginBottom: '0px',marginTop:'10px'}}>Welcome to my little corner of the web</p>
                      <p style={{fontFamily: 'poppins', color: 'white', marginTop: '5px',fontSize:'13px', marginBottom:'10px'}}>Hello, I am Aditya Patil student at Dr. D. Y. Patil Institute of Engineering, Management and Research, Pune</p>
                      <p style={{fontFamily: 'poppins', color: 'white', marginTop: '5px',fontSize:'13px', marginBottom:'10px'}}>I always try to create solution on problems I notice. I love to solve those issues
                        using my technical skills and learn new technologies whenever needed. I have various projects in my bucket which are developed in order to solve such problems.
                      </p>
                      <p style={{fontFamily: 'poppins', color: 'white', marginTop: '5px',fontSize:'13px', marginBottom:'10px'}}>I have been doing web-development since 3 years and have good expertise in it. Many of my project are web platform based. Currently I am studying about Machine Learning and Advance Machine Learning concepts.</p>
                      <p style={{fontFamily: 'poppins', color: 'white', marginTop: '5px',fontSize:'13px', marginBottom:'10px'}}>Apart from technical things I like to play video games as they are entertaining also they impove reflexes and increases fast decision making power.</p>
                    </div>
                  </div>
                </div>
              </div>
            <div className="stats">
              <div className="stat-label">
                <p>Find Me</p>
              </div>
              <div className="find-me">
                <i className="fa-brands fa-github fa-lg" style={{ color:  isDarkMode ? 'white' : 'black' }}></i>
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
                <i className="fa-brands fa-linkedin fa-lg" style={{ color: 'rgba(25, 102, 204, 0.7)',scale:'1.2 ' }}></i>
                <a href='https://www.linkedin.com/in/adityapatilm/' style={{textDecoration:'none'}}><p style={{color:'black'}}>Linkedin</p></a>
              </div>
              <div className="find-me">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png" style={{ width: '30px', height: '30px',scale:'0.8' }} />
                <a href='https://www.kaggle.com/aaditya112' style={{textDecoration:'none'}}><p style={{color:'black'}}>Kaggle</p></a>
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
                    {isDarkMode ? <img src={flaskDarkMode} style={{objectFit:'cover'}}></img> : <img src='https://cdn.worldvectorlogo.com/logos/flask.svg'></img>}
                    <p>Flask</p>
                  </div>
                  <div className='tech'>
                    {isDarkMode ? <img src={pytorchDarkMode} style={{scale:'2.2',objectFit:'contain'}}></img> : <img src='https://cdn.worldvectorlogo.com/logos/pytorch-2.svg' style={{scale:'2.2'}}></img>}
                  </div>
                </div>
                <div className='tec-knowledge'>
                  <p style={{fontFamily:'Noto Serif JP',textAlign:'left',margin:'0px',fontSize:'19px'}}>Featured Projects</p>
                  <div className='tec-kn-container'>
                    <br></br>
                    <span style={{fontFamily:'poppins',fontWeight:'bold'}}>Canteen Webiste - </span><span style={{fontFamily:'Poppins'}}>Python (Backend) | HTML CSS JavaScript (Frontend) | Sqlite(Database)</span>
                    <br></br><br></br>
                    <span style={{fontFamily:'poppins',fontWeight:'bold'}}>Paking Space Detection And Booking - </span> <span style={{fontFamily:'Poppins'}}>React.js | Firebase | GoogleAuth | MapBox & HereweGo SDK</span>
                    <br></br><br></br>
                    <span style={{fontFamily:'poppins',fontWeight:'bold'}}>Hospital's ERP - </span><span style={{fontFamily:'Poppins'}}>Firebase(Database) | React.js (Frontend&Backend) | GoogeAuth | GoogleGemini</span>
                    <br></br>
                    <div style={{background:'white',fontFamily:'Poppins',color:'black',padding:'8px',width:'100px',borderRadius:'6px',alignItems:'center',justifyContent:'center',display:'flex',marginTop:'10px'}} onClick={ () => {handleWindow(1)}}>More</div>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className='card-label'><p>Competative</p></div>
                <div className='stat'>
                  <div className='total-questions'>
                    <p>Total Question</p>
                    <h2>110</h2>
                  </div>
                  <div className='total-questions'>
                  <p>Total Active day</p>
                  <h2>76</h2>
                  </div>
                  <div className='DAS-topics'>
                    <p style={{marginLeft:'20px',fontFamily:'Poppins',color:'grey',fontWeight:'bold',marginBottom:'0px'}}>DSA Topics Analysis</p>
                    <div className='topics'>
                      <Bargraph w={39} tp = 'Array'/>
                      <Bargraph w={13} tp = 'Sorting'/>
                      <Bargraph w={10} tp ='Greedy Algorithm'/>
                      <Bargraph w={10} tp ='Binary Tree'/>
                      <div style={{width:'100%',height:'30px',alignItems:'center',justifyContent:'center',display:'flex',fontFamily:'poppins',fontSize:'12px',marginTop:'10px'}}>show more</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Here will be the projects */}
          <div className="project-tab" style={{display:windowWidth === 1 ? 'block' : 'none'}}>
          <h2 style={{ fontFamily: 'Poppins', marginLeft: '30px',color:'grey'}}>Projects</h2>
            <div className='projects'>
              <div className='project-preview'>
                <p className='project-preview-heading'>Working on projects in my most liked work. I do spend lot of the time developing the Solutions on the problems I see around me. Some of my works are below.</p>
                <div className={isMobile? 'projects-container mobile-layout': selectedProject? 'projects-container three-': 'projects-container two-columns'}>
                  {ProjectsData.projects.map((projects, index) => (
                    <ProjectCards 
                        key={index} 
                        imgsrc={require(`${projects.link}`)} 
                        projectName={projects.title} 
                        ProjectSummary={projects.summary}
                        prj = {projects}
                        github = {projects.gitlink} 
                    />
                  ))}
                </div>
              </div>
              <ProjectOverview SelectedProject={selectedProject || ProjectsData.projects[0]} />
            </div>
          </div>
          <div className="Certification" style={{display:windowWidth === 2 ? 'block' : 'none'}}>
            <h2 style={{ fontFamily: 'Poppins', marginLeft: '30px',color:'grey'}}>Certifications</h2>
            <p style={{ fontFamily: 'poppins', marginLeft: '30px', textAlign: 'left', width: '90%' }}>Below are some of my certifications from some of the well-known websites and competitive websites.</p>
            <div className='certificate-container'>

              {ProjectsData.certifications.map((certificate,index) => (
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
          <div className="resume" style={{display:windowWidth === 3 ? 'block' : 'none'}}>
            <h2 style={{ fontFamily: 'Poppins', marginLeft: '30px',color:'grey'}}>Resume</h2>
            <div style={{width:'80%',height:'1000px',display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'30px'}}>
              <iframe src={Resume} style={{width:'100%',height:'1000px',outline:'none',border:'0px'}}/>
            </div>
          </div>
        </div>
      </div>
      <footer style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <p>© 2025 Aditya Patil. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
