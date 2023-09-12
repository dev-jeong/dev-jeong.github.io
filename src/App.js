import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "./App.css";

import { AiFillGithub } from "react-icons/ai";
import { SiTistory, SiApachekafka } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

function Sidebar() {  
  return (
    <aside className="sidebar">
      <div className="profile-img">
        <img alt="profile-img" src="images/profile.png" />
      </div>
      <div className="text-center">
        <h2>정희원</h2>
        <h5>Jeong Hee Won</h5>
        <a href="https://github.com/dev-jeong"><AiFillGithub/></a>
        <a href="https://devjeong-note.tistory.com"><SiTistory/></a>
      </div>
      <nav className="navbar">
        <div id="navbar" className="collapse">
          <ul>
            <li><a href="#" data-nav-section="intro">Intro</a></li>
            <li><a href="#" data-nav-section="skills">Skills</a></li>
            <li><a href="#" data-nav-section="experience">Work Experience</a></li>
            <li><a href="#" data-nav-section="education">Education</a></li>
            <li><a href="#" data-nav-section="projects">Projects</a></li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

function About() {
  const intro = 
    `백엔드 개발자에게 가장 중요한 역량은 무엇일까요?
     저는 안정성과 효율성이라고 생각합니다. 
     모든 서비스에 영향을 줄 수 있는 백엔드라는 포지션의 신뢰도는 즉 서비스의 신뢰도와 직결된다고 생각합니다. 
     무수히 많은 IT서비스들 사이에서 가장 신뢰도가 높은 서비스가 되기 위해 노력하겠습니다`;

  return (
    <section name="intro">
      <div className="row row-bottom-padded-sm animate__animated animate__fadeInDown">
        <h1>Intro</h1>
        <div>{intro}</div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section>
      <div className="row row-bottom-padded-sm animate__animated animate__fadeInDown">
        <h1>Skills</h1>
          <div className='col-sm-6'>
            <h4>ADVANCED</h4>
            <p><DiNodejs/></p>
          </div>
          <div class='col-sm-6'>
            <h4>DEVELOPING</h4>
            <p><SiApachekafka/></p>
          </div>
      </div>
    </section>
  );
}

function Experience() {
  const experience = [
    {
      title: "Biofourmis India Pvt. Ltd.",
      duration: "April 2022 - Present",
      subtitle: "Software Engineer",
      details: [
        "Currently involved in developing healthcare and digital therapeutics products.",
      ],
      tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
      icon: "heartbeat",
    },
    {
      title: "Novopay Solutions Pvt. Ltd.",
      duration: "June 2020 - April 2022",
      subtitle: "Software Engineer",
      details: [
        "Successfully implemented Aadhaar Enabled Payment services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements, and Money Transfer, achieving more than 20 story points in each sprint.",
        "Streamlined the process of loading money into the wallet by integrating QR Code, which reduced the time required by 50%. Also implemented Clevertap events to track user actions, Freshdesk ticketing service, and chat-bot services. Contributed to user onboarding, approval, and finance interfaces.",
        "Collaborated closely with cross-functional teams such as product, backend, android, and QA, ensuring timely delivery of product builds to meet deadlines",
      ],
      tags: [
        "JavaScript",
        "Angular",
        "React",
        "Bootstrap",
        "Nodejs",
        "Jenkins",
      ],
      icon: "qrcode",
    }
  ];

  return (
    <section>
      <div className="row row-bottom-padded-sm animate__animated animate__fadeInDown">
        <h1>Work Experience</h1>
        <div class="timeline-centered"> 
          {
            experience.map((element, index) => (
                <article className="timeline-entry animate-box" key={index}>
                  <div className="timeline-entry-inner" >
                    <div class="timeline-icon color-2">
                      <i class="fa fa-graduation-cap"></i>
                    </div>
                    <div class="timeline-label">
                      <h2>{element.title}</h2>
                      <span class="timeline-sublabel">{element.subtitle}</span>
                      <ul>
                        {
                          element.details.map((detail, index) => (
                            <li class="timeline-text" key={index}>{detail}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  );
}

function Education() {
  const education = [
    {
      title: "Bachelors in Computer Science and Engineering",
      duration: "",
      subtitle: "National Institute of Technology, Warangal",
      details: [
        "I successfully qualified GATE-2020, demonstrating my aptitude and expertise in the field.",
        "As an active competitive programmer, I have achieved a CodeChef rating of 1841*, showcasing my skills in solving complex programming problems.",
        "My GitHub projects have earned over 1k stars and forks, a testament to my ability to create high-quality and impactful code.",
      ],
      tags: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management System",
        "Computer Networks",
        "Compiler Designing",
        "Cloud Computing",
      ],
      icon: "graduation-cap",
    },
  ];
  return (
    <section>
      <div className="row row-bottom-padded-sm animate__animated animate__fadeInDown">
        <h1>Education</h1>
        <div class="timeline-centered"> 
          {
            education.map((element, index) => (
                <article className="timeline-entry animate-box" key={index}>
                  <div className="timeline-entry-inner" >
                    <div class="timeline-icon color-2">
                      <i class="fa fa-graduation-cap"></i>
                    </div>
                    <div class="timeline-label">
                      <h2>{element.title}</h2>
                      <span class="timeline-sublabel">{element.subtitle}</span>
                      <ul>
                        {
                          element.details.map((detail, index) => (
                            <li class="timeline-text" key={index}>{detail}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = {
    disclaimer:
      "*** All the projects I listed were completed during my college-level development journey. As for my work at the industry level, those projects are confidential and cannot be disclosed.",
    webProjects: [
      {
        projectName: "Programming Diaries",
        image: "images/programmingdiaries.png",
        summary:
          "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
        preview: "https://programmingdiaries.herokuapp.com/",
        techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
      },
      {
        projectName: "Find Your Bank",
        image: "images/findyourbank.png",
        summary:
          "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
        preview: "https://clever-fermi-0d5d76.netlify.app",
        techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
      },
      {
        projectName: "Web Portfolio",
        image: "images/portfolio.png",
        summary:
          "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
        preview: "https://github.com/vinaysomawat/Travographer-Portal",
        techStack: ["HTML", "Bootstrap", "JavaScript"],
      },
      {
        projectName: "Resume Builder",
        image: "images/resume-builder.png",
        summary:
          "Browser based editor to build and download Resumes in a customizable templates.",
        preview: "https://vinaysomawat.github.io/Resume-Builder",
        techStack: ["HTML", "Bootstrap", "JavaScript"],
      },
    ],
    softwareProjects: [
      {
        projectName: "Pizza Ordering ChatBot",
        image: "images/pizzaorderchatbot.png",
        summary:
          "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
        preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
        techStack: ["Dailogflow", "Firebase"],
      },
      {
        projectName: "WhatsApp-Bot",
        image: "images/whatsappbot.jpg",
        summary:
          "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
        preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
        techStack: ["Selenium", "Chrome Webdriver", "Python"],
      },
      {
        projectName: "Bill Generator",
        image: "images/billgenerator.png",
        summary:
          "GUI to transfer data to excel sheets and generate bills on the local shops.",
        preview: "https://github.com/vinaysomawat/Bill-Generator",
        techStack: ["Tkinter", "Openxlpy", "Python"],
      },
    ],
    androidProjects: [
      {
        projectName: "NITW-CSE",
        image: "images/nitwcse.jpg",
        summary:
          "The Application display details of Department courses, reference books, research, publication and faculty profile.",
        preview: "https://github.com/vinaysomawat/NITW-CSE",
        techStack: ["JAVA", "XML", "Android"],
      },
      {
        projectName: "CareerHigh-App",
        image: "images/carrerhigh.png",
        summary:
          "The Application display the webpages of website careerhigh.in in android devices.",
        preview: "https://github.com/vinaysomawat/CareerHigh-Android",
        techStack: ["JAVA", "XML", "Android"],
      },
    ],
    freelanceProjects: [
      {
        projectName: "SnylloAir.com",
        image: "images/snylloair.png",
        summary:
          "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
        preview: "https://www.snylloair.com/",
        techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
      },
      {
        projectName: "Delivery+",
        image: "images/AM-Logo-.png",
        summary: "Android Application to display website in android devices.",
        preview:
          "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
        techStack: ["Android", "JAVA", "Play Store"],
      },
    ],
  };

  return (
    <section className="colorlib-projects no-print" data-section="projects">
      <div className="colorlib-narrow-content">
        <div
          className="row row-bottom-padded-sm animate-box"
          data-animate-effect="fadeInLeft"
        >
          <div class="about-desc">
            <h1>Projects</h1>
          </div>
        </div>
        <ul
          id="accordion"
          className="accordion animate-box"
          data-animate-effect="fadeInLeft"
        >
          <li>
            <div class="link">
              <p>Web Projects</p>
              <i class="fa fa-chevron-down"></i>
            </div>
            <ul class="submenu">{projects.webProjects[0].projectName}</ul>
          </li>
          <li>
            <div class="link">
              <p>Software Projects</p>
              <i class="fa fa-chevron-down"></i>
            </div>
            <ul class="submenu">{projects.softwareProjects[0].projectName}</ul>
          </li>
          <li>
            <div class="link">
              <p>Android Projects</p>
              <i class="fa fa-chevron-down"></i>
            </div>
            <ul class="submenu">{projects.androidProjects[0].projectName}</ul>
          </li>
          <li>
            <div class="link">
              <p>Freelance Projects</p>
              <i class="fa fa-chevron-down"></i>
            </div>
            <ul class="submenu">{projects.freelanceProjects[0].projectName}</ul>
          </li>
        </ul>
        <p id="project-disclaimer"></p>
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </div>
    </div>
  );
}

export default App;
