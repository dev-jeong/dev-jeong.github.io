import React from 'react';
import { Link } from 'react-scroll';

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { AiOutlineMail } from "react-icons/ai";
import { SiGithub, SiTistory } from "react-icons/si";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-img">
        <img alt="profile-img" src="images/profile.png" />
      </div>
      <div className="profile-contact">
        <h2>정희원</h2>
        <h5>Jeong Hee Won</h5>
        <a href="mailto:need9306@gmail.com"><AiOutlineMail /></a>
        <a href="https://github.com/dev-jeong"><SiGithub /></a>
        <a href="https://devjeong-note.tistory.com"><SiTistory /></a>
      </div>
      <nav>
        <ul>
          <li><Link to="intro" smooth={true} duration={0}>Intro</Link></li>
          <li><Link to="skills" smooth={true} duration={0}>Skills</Link></li>
          <li><Link to="history" smooth={true} duration={0}>Career & Edu</Link></li>
          <li><Link to="project" smooth={true} duration={0}>Project</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

function Intro() {
  const intro = (
    <>
      Back-end 개발자에게 가장 중요한 역량은 무엇일까요?<br />
      저는 안정적이고 효율적인 서비스를 만들어 내는 능력이라고 생각합니다.<br />
      모든 플랫폼에 영향을 줄 수 있는 Back-end Part의 신뢰도는 곧 서비스 그 자체의 신뢰도와 직결됩니다.<br />
      면밀한 코드 검토, 엄격한 테스트, 최신 기술 및 최적화된 알고리즘의 적용을 통해 사용자의 경험을 향상시키고<br />
      고객에게 신뢰도 높은 서비스를 제공할 수 있도록 노력하겠습니다.
    </>
  );

  return (
    <section id="intro">
      <div className="row row-bottom-padded-sm">
        <h1>Intro</h1>
        <div>{intro}</div>
      </div>
    </section>
  );
}

function Skills() {
  const advenced = [
    { name: "Node.js", code: "339933" },
    { name: "Express", code: "000000" },
    { name: "MySQL", code: "4479A1" },
    { name: "MongoDB", code: "47A248" },
    { name: "Redis", code: "DC382D" },
    { name: "GitHub", code: "181717" },
    { name: "Elasticsearch", code: "005571" },
    { name: "Jenkins", code: "D24939" }
  ];

  const developing = [
    { name: "JAVA", code: "f89820" },
    { name: "Python", code: "3776AB" },
    { name: "Spring", code: "6DB33F" },
    { name: "apachekafka", code: "231F20" },
    { name: "amazonSQS", code: "FF4F8B" },
    { name: "gRPC", code: "4285F4"}
  ];

  const describe = (
    <>
      저는 Restful API 개발 및 운영, MSA 구축 및 분산 처리, 그리고 다양한 Tool들을 활용한 CI/CD이라는 세 가지 핵심 역량을 보유하고 있습니다.
      이러한 역량을 바탕으로 빠르고 안정적인 개발과 배포를 수행하고자 하며, 더불어 기술적 도전도 마다하지 않는 개발자입니다.<br/><br />

      <strong>첫째</strong>, NodeJS의 Express 프레임워크를 활용하여 Restful API를 개발하고 운영하는 업무를 주요 업무로 수행해 왔습니다.
      RESTful 디자인 패턴을 준수하여 API의 주요 기능을 개발하고 유지보수하며, 성능 개선을 위해 다양한 시도와 성과를 이루어냈습니다. 
      또한 Wowza Streaming Engine을 활용해 실시간 미디어 스트림을 제공한 적도 있습니다.<br /><br />

      <strong>둘째</strong>, 마이크로 서비스 아키텍처(MSA) 운영 및 관리에 장점이 있습니다.
      서비스의 전반적인 아키텍처를 이해하고, 분산 처리를 통해 서비스의 안정성과 확장성을 향상시키고자 노력하였습니다. 
      이 과정에서 gRPC 프로토콜을 통한 성능 최적화를 시도한 경험이 있으며, 
      또한 MSA와 함께 수반될 수 있는 AutoScale, DataBase Replication에 대해서도 높은 이해도를 보유하고 있습니다.<br /><br />

      <strong>마지막으로</strong>, Git(flow), Jenkins, AWS CodePipeline 등을 활용한 CI/CD 경험이 있습니다.
      테스트, 코드 빌드, 배포를 자동화하고 다른 개발자들과 협업을 통해 서비스 코드를 지속해서 통합하고 관리한 경험이 있습니다. 
      또한 서비스 장애를 탐지하고 이를 발빠르게 대처를 위해 ELK, DataDog등의 모니터링 Tool을 활용해 본 경험도 있습니다.
    </>
  );

  return (
    <section id="skills">
      <div className="row row-bottom-padded-sm">
        <h1>Skills</h1>
        <div className="col-sm-6">
          <h4>ADVANCED</h4>
          <p> 
          {
            advenced.map((element) => (
              <img
                src={`https://img.shields.io/badge/${element.name}-${element.code}?style=round-square&logo=${element.name}&logoColor=white`}
                alt={`${element.name} badge`}
              />
            ))
          }
          </p>
        </div>
        <div className="col-sm-6">
          <h4>DEVELOPING</h4>
          <p>
          {
            developing.map((element) => (
              <img
                src={`https://img.shields.io/badge/${element.name}-${element.code}?style=round-square&logo=${element.name}&logoColor=white`}
                alt={`${element.name} badge`}
              />
            ))
          }
          </p>
        </div>
        <div>{describe}</div>
      </div>
    </section>
  );
}

function History() {
  const history = [
    {
      title: "(주)토스랩",
      duration: "2023.7 ~ 현재 ",
      subtitle: "Back-end Team",
      details: [
        "NodeJS 기반의 Back-end서버 개발 및 유지보수",
        "Spring & gRPC를 활용한 MSA 운영",
        "Redis Cache를 활용한 서비스 속도 개선",
        "Kafka, SQS를 이용한 메세지 분산 시스템 경험",
        "Git(flow), Jenkins, AWS CodePipe을 활용한 CI/CD",
      ],
      tags: ["NodeJS", "JAVA", "gRPC", "Redis", "Jenkins", "Code Pipeline"],
    },
    {
      title: "(주)원트리즈뮤직",
      duration: "2017.7 ~ 2023.5",
      subtitle: "IT개발운영팀",
      details: [
        "NodeJS 기반의 API서버 개발 및 유지보수",
        "Wowza Streaming Engine Server 운영",
        "사용자 데이터 분석 및 최적화",
        "Microsoft Azure, AWS를 이용한 사내 솔루션 인프라 구축",
      ],
      tags: ["NodeJS", "Python", "Wowza Streaming Engine"],
    },
    {
      title: "성공회대학교",
      subtitle: "컴퓨터공학과",
      duration: "2012.3 ~ 2018.2",
      details: [
        "자료구조, 운영체제, 알고리즘 등 프로그래밍의 기초 내용을 수강",
        "C, C++, JAVA 등 다양한 프로그래밍 언어에 대한 강의를 이수",
        "데이터베이스 수업을 통해 RDMS와 MySQL에 대한 내용을 습득",
        "임베디드 리눅스 수업을 통해 Linux 운영체제 사용 방법을 학습",
        "모바일 및 웹 프로그래밍 수업을 통해 애플리케이션 개발에 관련된 내용을 습득",
        '"웹 기반 라디오 스트리밍 서비스"라는 주제로 프로젝트를 진행',
      ],
      tags: [],
    },
  ];

  return (
    <section name="history">
      <div className="row row-bottom-padded-sm">
        <h2>Career & Education</h2>
        <section>
          <div className="container">
            <div className="main-timeline">
              {history.map((element, index) => (
                <div className={`timeline ${index % 2 === 1 ? "right" : "left"}`} key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5>{element.title}</h5>
                      <p> {element.subtitle} | {element.duration}</p>
                      <p>
                        {element.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </p>
                      {element.tags.map((tag, tagIndex) => (
                        <span class="badge badge-pill" key={tagIndex}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function Projects() {
  const accordionData = [
    {
      id: "panel1",
      heading: "(주)토스랩",
      contents: [
        {
          title: "Content 1 Title",
          describe: "This is the content of the first accordion panel.",
        },
        {
          title: "Content 2 Title",
          describe: "This is the content of the second accordion panel.",
        },
      ],
    },
    {
      id: "panel2",
      heading: "(주)원트리즈뮤직",
      contents: [
        {
          title: "Content 3 Title",
          describe: "This is the content of the third accordion panel.",
        },
        {
          title: "Content 4 Title",
          describe: "This is the content of the fourth accordion panel.",
        },
      ],
    },
    {
      id: "panel3",
      heading: "개인 프로젝트",
      contents: [
        {
          title: "Content 3 Title",
          describe: "This is the content of the third accordion panel.",
        },
        {
          title: "Content 4 Title",
          describe: "This is the content of the fourth accordion panel.",
        },
      ],
    },
  ];

  return (
    <section name="project">
      <div className="row row-bottom-padded-sm">
        <h1>Project</h1>
        <div className="accordion mt-3" id="myAccordion">
          {accordionData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading-${item.id}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${item.id}`}
                  aria-expanded={false}
                  aria-controls={`collapse-${item.id}`}
                >
                  {item.heading}
                </button>
              </h2>
              <div
                id={`collapse-${item.id}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                aria-labelledby={`heading-${item.id}`}
                data-bs-parent="#myAccordion"
              >
                {item.contents.map((content, contentIndex) => (
                  <div className="accordion-body">
                    <div key={contentIndex}>
                      <h5>{content.title}</h5>
                      <p>{content.describe}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <Intro />
        <Skills />
        <History />
        <Projects />
      </div>
    </div>
  );
}

export default App;
