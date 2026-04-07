// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import imgLogo from "./assets/education_logo/img_logo.png";
// Project Section Logo's
import civicLogo from './assets/work_logo/civic.png';
import weatherLogo from './assets/work_logo/weather.png';
import passwordGenerator from './assets/work_logo/Password_generator.png';
import modalLogo from './assets/work_logo/modal.png';
import counterLogo from './assets/work_logo/counter.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];
 
  export const education = [
    {
      id: 0,
  img: imgLogo, // you can replace this later with your college logo if needed
  school: "JSPM BSIOTR College, Pune,Maharastra (Savitribai Phule Pune University)",
  date: "Dec 2021 - June 2025",
  grade: "7.72 CGPA",
  desc: "I have completed my Bachelor of Engineering (BE) from JSPM BSIOTR College, Pune under Savitribai Phule Pune University. During my academic journey, I built a strong foundation in core engineering concepts along with practical knowledge in software development. I gained hands-on experience in technologies like web development, databases, and programming, and worked on various academic projects that enhanced my technical and problem-solving skills.",
  degree: "Bachelor of Engineering - BE"
    },
    {
    id: 1,
  img: null,
  school: "Bharat Bharati Junior College, Parbhani, Maharashtra",
  date: "Apr 2020 - May 2021",
  grade: "95.33", 
  desc: "I completed my Higher Secondary Certificate (HSC) from Bharat Bharati Junior College, Parbhani, Maharashtra, where I studied Physics, Chemistry, and Mathematics (PCM).",
  degree: "Higher Secondary Certificate(XII) - PCM"
    },
    {
      id: 2,
  img: null,
  school: "Gandhi Vidyalaya, Parbhani, Maharashtra",
  date: "Apr 2018 - June 2019",
  grade: "90.2%",
  desc: "I completed my Secondary School Certificate (SSC) from Gandhi Vidyalaya, Parbhani, Maharashtra, under the SSC board.",
  degree: "Secondary School Certificate(X)"
    },
  ];
  
  export const projects = [
    {
       id: 0,
  title: "Citizen Feedback System for Public Domain",
  description:
    "A QR code-based citizen feedback system that enables users to submit feedback for public departments such as municipal services and police. The system includes an admin dashboard to analyze feedback using sentiment analysis and visualize data through charts and graphs. Built using the MERN stack, it helps improve transparency and service quality in public domains.",
  image: civicLogo,
  tags: ["HTML", "CSS", "JavaScript", "React JS", "Node.js", "MongoDB"],
  github: "https://github.com/SudhirKadam1802/civic-pulse-Project",
  webapp: "https://civic-pulse-sage.vercel.app/",
    },
    {
      id: 1,
  title: "Weather App",
  description:
    "A responsive weather application that provides real-time weather updates for any city using API integration. It displays temperature, humidity, wind speed, and weather conditions with a clean and user-friendly interface. Built using React.js and external weather APIs to deliver accurate and dynamic data.",
  image: weatherLogo,
  tags: ["API", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/SudhirKadam1802/DOM-Weather-App",
    },
  {
  id: 2,
  title: "Password Generator",
  description:
    "A JavaScript-based password generator that dynamically creates strong and secure passwords using DOM manipulation. Users can customize password length and include uppercase, lowercase, numbers, and special characters. The application updates the UI in real-time, providing an interactive and user-friendly experience.",
  image: passwordGenerator,
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/SudhirKadam1802/Password-Generator-using--js",
},
    {
      id: 3,
  title: "Modal Profile",
  description:
    "A JavaScript-based modal profile component built using DOM manipulation. It displays user profile details in a popup modal with smooth open and close interactions. Implemented using HTML, CSS, and JavaScript with event handling for an interactive user experience.",
  image: modalLogo, 
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/SudhirKadam1802/Modal-Project-Using-JS-",
    },
    {
     id: 4,
  title: "Counter App",
  description:
    "A simple and interactive counter application built using JavaScript DOM manipulation. It allows users to increment, decrement, and reset the counter value in real-time. Designed with a clean UI and responsive controls to demonstrate event handling and dynamic updates.",
  image: counterLogo, 
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/SudhirKadam1802/counter-Project-Using-JS-",
    },
  ];  