const ProjectsData = {
    "projects": [
        {
            "title": "Personal Portfolio Website",
            "description": "A personal portfolio website to showcase my projects and skills.I created this website using HTML, CSS, JavaScript for managing the frontend and Flask for managing backend. The best part of the webiste is that every details of the website are editable due to backend.",
            "technologies": ["HTML", "CSS", "JavaScript","Flask"],
            "link": "./Assets/projectsimage/portfolio.png",
            "summary": "A website to display my professional portfolio and projects.",
            "gitlink" :'https://github.com/aadim112/aaditya'
        },
        {
            "title": "Canteen Website",
            "description": "A web application to work as online food serving for college. This web-app was designed to reduce waiting time, crowd and decrease food wastagel. This web-app also has functionality to book the table at the canteen site.",
            "technologies": ["HTML", "API", "CSS","Flask","SQLite Database"],
            "link": "./Assets/projectsimage/canteen.png",
            "summary": "Web Apllication for providing platform for canteens to establish online menu and transactions.",
            "gitlink" :'https://github.com/aadim112/Canteen-Website'
        },
        {
            "title" : "Home Assistant using Arduino",
            "description":"Home Assistant devloped using Arduino and various other modules. In this project we use google speech recognition to get the commands from the user and send the signal to the ardino using bluetooth module. We also created an app to manage various applications connected to the arduino and the app was build using logic blocks.",
            "technologies" : ["C++","Python","Speech Recognition"],
            "summary" : "An Arduino based project to controll varios home appliances.",
            "link":"./Assets/projectsimage/arduino.png",
            "gitlink" : 'https://github.com/aadim112/Home-Assistant'
        },
        {
            "title" : "Hospital Management(Medilog)",
            "description":"MEDILOG is a web-based platform designed to streamline the interaction between doctors and patients by offering an efficient appointment booking system, patient records management, and a user-friendly interface.Simple and intuitive UI for seamless navigation.Patients can book appointments online based on doctor availability.Doctors can search and access patient history easily.Fully optimized for mobile, tablet, and desktop users.Patient information is stored securely using Firebase.Doctors can prescribe medicines, and inventory updates in real-time.",
            "technologies" : ["React.js","firebase","Googe Gemini",'Google Authentication'],
            "summary" : "streamline the interaction between Hospital Staff and globalise the patient data ",
            "link":"./Assets/projectsimage/medilog.png",
            "gitlink" : 'https://github.com/aadim112/HM0055_Code200'
        },
        {
            "title" : "Parking Space detection and booking(RentPar)",
            "description":"RentPar is a website that helps you find parking location near to your destination. This is useful when you enter such place where finding best parking is difficult. This website helps you find free as well as paid space to park your vehicle.The site takes your destination co-ordinates and searches for the nearby co-ordinates in the database of the parking space and list those spaces on the site.User can select the spaces among the listed places and book the space by paying the fee for given amount of time in case if the space registered is free or paid.",
            "technologies" : ["React.js","firebase","Mapbox",'GoogeAuth',"HerweGo"],
            "summary" : "Web Solution to find parking location near destination place and public places",
            "link":"./Assets/projectsimage/rentpar.png",
            "gitlink" : 'https://github.com/aadim112/RentPar'
        },
        {
            "title" : "(CMate) AI Dictation & Assignment Tool",
            "description":"AI-powered educational platform to assist students in completing academic tasks efficiently. It features an AI Dictator that reads out assignment answers in a human-like voice and an Assignment Generator that produces notes and diagrams with customizable answer lengths. CMate also includes an interactive contest section, allowing students to participate in or view real-time academic challenges. Built with React.js, Firebase, Flask, Google Authentication, Cloudinary, and the Google Gemini API, CMate combines intelligent content generation with engaging student experiences.",
            "technologies" : ["React.js","firebase","Flask",'GoogeAuth',"Cloudnary","GeminiAPI"],
            "summary" : "AI Dictator and Assignment Generator(CMate)An AI that can dictate the student like a human and can provide you the notes and diagrams for the assigment with customisable answer length.",
            "link":"./Assets/projectsimage/cmate.png",
            "gitlink" : 'https://github.com/aadim112/CMate'
        },
        {
            "title" : "Drone Surveillnace System with RL",
            "description":"Drone Surveillance System is a solution to human error and inefficient decision-making in drone surveillance operations. This system leverages the capabilities of Artificial Intelligence and Reinforcement Learning to operate and utilize drones for surveillance. It enables autonomous navigation, intelligent target identification, and real-time decision-making with minimal human intervention. By integrating AI models, the system can adapt to dynamic environments and efficiently perform tasks such as anomaly detection, crowd monitoring, and search operations.",
            "technologies" : ["Pybullet","Gymnasium","Reinforcement/Supervised","Supervised"],
            "summary" : "The Drone Surveillance System enhances traditional surveillance by reducing human error ...",
            "link":"./Assets/projectsimage/drone-surveillnace.jpeg",
            "gitlink" : 'https://github.com/RohanSali/Drone-Surveillance-System'
        }

    ],
    "certifications": [
        {
            "title": "Core Concept of C++",
            "platform": "Devtown",
            "credential": "No Credentials",
            "link": "./Assets/certificateimage/c++ devtown.png"
        },
        {
            "title": "HTML",
            "platform": "Sololearn",
            "credential": "CT-OMQ0GWXF",
            "link": "./Assets/certificateimage/html.png"
        },
        {
            "title": "Python Basics",
            "platform": "Sololearn",
            "credential": "CC-OIOS0SWD",
            "link": "./Assets/certificateimage/python.png"
        },
        {
            "title":"Core Concept of JavaScript",
            "platform": "Sololearn",
            "credential":"CT-MLNXDENA",
            "link": "./Assets/certificateimage/javascript.jpg"
        },
        {
            "title":"HackerRank Skill Test",
            "platform":"HackerRank",
            "credential":'62C60659914C',
            "link":"./Assets/certificateimage/python hackerRank.png"
        },
        {
            "title":"Data Analytics",
            "platform":'Forage',
            "credential":"62C60659914C",
            "link":"./Assets/certificateimage/Deloitte.png"
        },
        {
            "title":"Data Pre-Processing for ML",
            "platform":'Udemy',
            "credential":"UC-83937212-5853-4bc8-8cdd-55ecc5712c56",
            "link":"./Assets/certificateimage/preprocessing.jpg"
        }
    ]
}

export default ProjectsData;