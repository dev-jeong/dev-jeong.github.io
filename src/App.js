import React from "react";
import { Link } from "react-scroll";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
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
      <div className="profile-contact-mobile">
        <h3>정희원 | Jeong Hee Won</h3>
        <p className="hidden"> <AiFillPhone /> 010-4321-8693</p>
        <p> <AiOutlineMail /> need9306@gmail.com</p>
        <p> <SiGithub /> https://github.com/dev-jeong</p>
        <p> <SiTistory /> https://devjeong-note.tistory.com</p>
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
      탄탄하고 유연한 아키텍처를 지향하는 Back-end 개발자입니다.
      서비스의 신뢰도는 안정성과 확장성을 갖춘 설계에서 비롯된다고 생각합니다.
      최신 기술을 맹목적으로 사용하기보다는 서비스의 현재 규모와 목적을 명확히 정의하고
      향후 기능의 확장 가능성까지 면밀히 검토하여 최적의 기술을 도입하겠습니다.
      또한, 장애나 성능 저하 상황에서 데이터 기반의 분석을 통해 원인을 파악하고 해결하여
      사용자에게 끊임없는 가치를 제공하는 안정적인 Back-end 환경을 구축해 나가겠습니다.
    </>
  );

  return (
    <section id="intro">
      <div className="row">
        <h1>Intro</h1>
        <div>{intro}</div>
      </div>
    </section>
  );
}

function Skills() {
  const advenced = [
    { name: "NodeJS", code: "5FA04E" },
    { name: "ExpressJS", code: "000000" },
    { name: "Serverless", code: "FD5750" },
    { name: "AWS Lambda", code: "FF9900" },
    { name: "MySQL", code: "4479A1" },
    { name: "DynamoDB", code: "0d416d" },
    { name: "MongoDB", code: "47A248" },
    { name: "Redis", code: "DC382D" },
    { name: "GitHub", code: "181717" },
    { name: "Jenkins", code: "D24939" },
  ];

  const applicable = [
    { name: "TypeScript", code: "3178C6" },
    { name: "NestJS", code: "E0234E" },
    { name: "JAVA", code: "007396" },
    { name: "SpringBoot", code: "6DB33F" },
    { name: "apachekafka", code: "231F20" },
    { name: "amazonSQS", code: "FF9900" },
  ];

  const describe = (
    <>
      <strong>Restful API 개발 및 운영, MSA 기반 분산 시스템 구축, CI/CD 환경 운영</strong>을 핵심 역량으로 보유하고 있습니다.<br /><br />

      <strong>1. Restful API 개발 및 운영</strong><br />
      NodeJS를 활용하여 ExpressJS 기반의 어플리케이션 API 서버 구축뿐만 아니라
      Serverless 프레임워크를 활용하여 AWS Lambda 기반의 함수 단위 API를 운용해 본 실무 경험을 갖추고 있습니다.
      단순한 기능 구현에 그치지 않고, 실시간 요청 처리 효율과 운영 안정성을 여러모로 검토하여 서비스 성격에 최적화된 방식을 선택·적용해 왔습니다.
      또한 미디어 스트리밍과 같은 특수 목적 서버 환경을 운영해 본 경험도 있습니다.<br /><br />

      <strong>2. MSA 기반 분산 시스템 구축</strong><br />
      마이크로서비스 환경에서 서비스 간 책임을 명확히 분리하고, REST 및 gRPC 기반 통신 방식을 상황에 맞게 선택하여 적용한 경험이 있습니다.
      서비스 간 호출 관계와 데이터 흐름을 사전에 정리하고, DB Replication 구조를 함께 고려함으로써 분산 환경에서도 각 서비스의 역할과 데이터 경계가 명확하게 유지되도록 시스템을 구성해 왔습니다.<br /><br />

      <strong>3. CI/CD 환경 운영</strong><br />
      GitHub 기반 Git-flow 전략을 적용한 협업 환경에서 Jenkins 등을 활용해 빌드·배포 과정을 자동화하고,
      운영 중인 서비스에서 변경 사항을 안정적이고 일관되게 반영할 수 있는 CI/CD 환경을 운영해 왔습니다.
    </>

  );

  return (
    <section id="skills">
      <div className="row">
        <h1>Skills</h1>
        <div className="col-sm-6 mt-3">
          <h4>ADVANCED</h4>
          <p>
            {advenced.map((element, index) => (
              <img
                key={index}
                src={`https://img.shields.io/badge/${element.name}-${element.code}?style=round-square&logo=${element.name}&logoColor=white`}
                alt={`${element.name} badge`}
              />
            ))}
          </p>
        </div>
        <div className="col-sm-6 mt-3">
          <h4>APPLICABLE </h4>
          <p>
            {applicable.map((element, index) => (
              <img
                key={index}
                src={`https://img.shields.io/badge/${element.name}-${element.code}?style=round-square&logo=${element.name}&logoColor=white`}
                alt={`${element.name} badge`}
              />
            ))}
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
      title: "LG전자",
      duration: "2024.5 ~ 현재",
      subtitle: "B2B클라우드 솔루션 개발팀",
      details: [
        "LG Pro:Centric Cloud 솔루션 Back-end 개발 및 운영",
        "디지털 사이니지용 클라우드 솔루션의 서버 아키텍처 및 API 개발",
        "Serverless 기반 API 개발 및 유지보수",
        "AWS Lambda, DynamoDB를 활용한 데이터 및 디바이스 관리"
      ],
      tags: ["NodeJS", "TypeScript", "Serverless", "AWS Lambda", "DynamoDB", "S3"],
    },
    {
      title: "(주)토스랩",
      duration: "2023.7 ~ 2023.10 (1년 3개월)",
      subtitle: "Back-end Team",
      details: [
        "\"업무용 메신저 Jandi\" Back-end서버 개발 및 유지보수",
        "NodeJS(express.js)기반의 RESTful API 서버 운영 ",
        "Java Spring & gRPC를 활용한 MSA 운영",
        "MongoDB, MySQL, Redis 데이터베이스 활용",
        "Kafka, SQS를 이용한 메세지 분산 시스템 경험"
      ],
      tags: ["NodeJS", "ExpressJS", "JAVA", "Spring", "gRPC", "MySQL", "MongoDB", "Redis"],
    },
    {
      title: "(주)원트리즈뮤직",
      duration: "2017.7 ~ 2022.5 (4년 10개월)",
      subtitle: "IT개발운영팀",
      details: [
        "\"매장음악서비스 Rhymeduck\" API서버 개발 및 유지보수",
        "Wowza Streaming Engine 기반의 Media stream 관리",
        "MySQL 데이터베이스 활용",
        "Python Script를 이용한 사용자 데이터 분석 최적화",
        "Microsoft Azure, AWS를 이용한 솔루션 인프라 구축"
      ],
      tags: ["NodeJS", "ExpressJS", "Python", "MySQL", "Wowza Streaming Engine", "Microsoft Azure", "AWS"],
    },
    {
      title: "성공회대학교",
      subtitle: "컴퓨터공학과",
      duration: "2012.3 ~ 2018.2",
      details: [
        "프로그래밍의 기초인 자료구조, 운영체제, 알고리즘을 수강",
        "C, C++, JAVA 등 다양한 프로그래밍 언어에 대한 강의를 이수",
        "Database 강의를 통해 RDMS와 MySQL에 대한 내용을 습득",
        "임베디드 리눅스 수업을 통해 Linux 운영체제 사용 방법을 학습",
        "모바일, 웹 프로그래밍 수업을 통해 APP개발 관련 내용 습득",
        '"웹 기반 라디오 스트리밍 서비스"라는 주제로 프로젝트를 진행',
      ],
      tags: [],
    },
  ];

  return (
    <section name="history">
      <div className="row">
        <h1>Career & Education</h1>
        <section>
          <div className="main-timeline">
            {history.map((element, index) => (
              <div className={`timeline ${index % 2 === 1 ? "right" : "left"}`} key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5>{element.title}</h5>
                    <h6> {element.subtitle} | {element.duration}</h6>
                    <div>
                      {element.details.map((detail, detailIndex) => (
                        <p key={detailIndex}><strong>&#183;</strong> {detail}<br /></p>
                      ))}
                    </div>
                    <div>
                      {element.tags.map((tag, tagIndex) => (
                        <span className="badge badge-pill" key={tagIndex}> {tag} </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
      heading: "LG전자",
      contents: [
        {
          title: "[ LG Pro:Centric Cloud 솔루션 Back-end 개발 및 유지보수 ]",
          describe: (
            <ul>
              <li>LG Pro:Centric Cloud는 사용자가 디지털 사이니지용 Web App을 직접 제작·배포하고 디바이스를 중앙에서 관리할 수 있는 클라우드 기반 솔루션</li>
              <li>해당 솔루션의 Back-end를 담당하여 Serverless 프레임워크 기반 TypeScript API를 설계·개발함</li>
              <li>AWS Lambda를 활용하여 이벤트 기반 로직을 구현하고, 기존 Lambda 함수와 API의 성능 모니터링, 장애 대응, 코드 최적화를 수행함</li>
              <li>TV 배포 및 디바이스 관리를 위해 AWS DynamoDB 기반 데이터 관리 수행함</li>
              <li>배포에 필요한 이미지·파일 등 리소스를 AWS S3 스토리지와 연동하여 관리함</li>
            </ul>
          ),
        },
        {
          title: "[ 유저 초기 데이터 구조 개선 및 DynamoDB 스토리지 최적화 ]",
          describe: (
            <>
              <strong>문제점</strong><br />
              유저 생성 시 공통 초기 데이터를 유저별로 복제하여 DynamoDB에 저장하는 구조로 인해,
              유저 수 증가에 따라 중복 데이터가 반복 저장되며 스토리지 사용량 증가, 공통 데이터 변경 시 대규모 수정이 필요한 유지보수·운영 리스크,
              그리고 DynamoDB 파티션 효율 및 확장성 저하 문제가 발생함.<br /><br />
              <strong>문제 해결</strong><br />
              유저 생성 시 초기 데이터를 복제하는 로직을 제거하고, 공통 초기 데이터를 단일 DynamoDB 테이블로 중앙화하여 관리하는 구조로 개선함.
              유저 데이터 조회(GET) 시 공통 데이터와 유저 개인 데이터를 서버 단에서 조합하여 응답하도록 API 로직을 수정했으며,
              기존에 저장되어 있던 중복 데이터를 제거하기 위한 데이터 마이그레이션 및 후속 정리 작업을 수행함.
              해당 개선을 통해 스토리지 사용량을 약 80% 감소시켰으며, 데이터 구조 단순화로 인해 조회 로직의 일관성과 시스템 확장성을 크게 향상시킴.<br /><br />
            </>
          ),
        },
      ],
    },
    {
      id: "panel2",
      heading: "(주)토스랩",
      contents: [
        {
          title: "[ 온/오프라인 유저 개선 ]",
          describe: (
            <>
              <strong>문제점</strong><br />
              온라인/오프라인을 나타내는 "Green-dot"기능에서 간헐적으로 일관성이 깨지는 문제가 발생<br /><br />
              <strong>문제 해결</strong><br />
              소켓 통신의 연결 상태를 기준으로 Redis Cache의 데이터를 갱신하는 방법으로 기능이 구현되어 있었음.
              우선은 Redis Cache에 불필요하게 중복된 데이터가 다수 존재하였고, 해당 부분을 정리.
              "Green-dot"기능에 시간 차가 존재하더라도 정확성이 우선시 되어 일정 시간마다 API를 호출하는 방식으로 변경하고 TTL을 짧게 설정하여 해결.<br /><br />
            </>
          ),
        },
        {
          title: "[ 대용량 데이터 분산 처리 ]",
          describe: (
            <>
              <strong>문제점</strong><br />
              협업용 메신저 “잔디(Jandi)”에서는 채팅방을 들어가고 나갈 수 있음.
              이때 많은 인원이 채팅방을 나가게 되면 삭제해야 하는 데이터가 상당수 존재하여 속도 저하 문제가 발생<br /><br />
              <strong>문제 해결</strong><br />
              즉시 처리해야 하는 데이터를 제외한 나머지 데이터를 후처리하는 방식을 선정하여,
              AWS SQS에 메세지를 queuing하고 Consumer Batch를 제작하여 해소하는 방식으로 변경<br /><br />
              <strong>성과</strong><br />
              1,000명 기준 3분 정도 걸리던 프로세스가 20~30초로 단축
            </>
          ),
        },
        {
          title: "[ Module Version Up ]",
          describe: (
            <>
              <strong>문제점</strong><br />
              NodeJS의 버전업에 있어서 호환되지 않는 module이 존재.<br /><br />
              <strong>업무 내용</strong><br />
              타깃 버전에 적합한 module의 버전을 확인하고 버전업을 진행하려 했으나 현재 버전과 최신 버전 간의 사용 방식이 크게 변경되어 불가능.
              사용 방식 차이점을 비교, 분석한 내용을 기반으로 코드를 수정.
            </>
          ),
        },
      ],
    },
    {
      id: "panel3",
      heading: "(주)원트리즈뮤직",
      contents: [
        {
          title: "[ Media Streaming API ]",
          describe: (
            <ul>
              <li>Window Client인 "매장 음악 플레이어"의 API 서버 개발 및 유지 보수</li>
              <li>Wowza Streaming Engine 기반의 실시간 미디어 스트림을 제공</li>
              <li>Transcoder 지원에도 안정적인 서비스를 받지 못하는 고객을 위해 다운로드 & 플레이 방식의 API를 구축</li>
              <li>CDN Stroge와 DB를 활용하여 미디어 파일 및 스트림 관리 등을 수행</li>
            </ul>
          ),
        },
        {
          title: "[ 사용자 데이터 분석 프로세스 리뉴얼 ]",
          describe: (
            <>
              <strong>문제점</strong><br />
              기존에 저장되던 사용자 데이터는 Raw text로 기록되어 정형화되지 않았으며, 불필요한 데이터를 많이 포함하고 있어 <br />
              분석하는 데 오랜 시간이 걸릴 뿐만 아니라 백업 및 파일 이동과 같은 관리 업무에도 많은 불편함이 존재<br /><br />
              <strong>개선 및 성과</strong><br />
              Raw text로 저장하던 기존의 LogAPI를 정형화된 CSV 형태로 저장하게끔 개선.
              분석에 필요한 데이터만 저장함으로써 데이터 용량을 약 80% 이상 축소.
              또한 변경된 포맷에 맞추어 스크립트를 수정하였고, 데이터를 분석하는데 소요되는 시간을 대폭 낮추었음.
              분석된 데이터는 담당 부서로 전달되어 서비스 품질향상에 크게 이바지했을 뿐만 아니라,
              한국 저작권 협회, 음반 산업 협회 등에 전달되어 활용됨.
            </>
          ),
        },
        {
          title: "[ 전자서류 통합 시스템 개발 ]",
          describe: (
            <>
              <strong>문제점</strong><br />
              B2B 계약에 대한 처리 프로세스는 체계적으로 진행되는 반면에 B2C 계약에 대한 처리 프로세스가
              확립되지 않아 업무의 효율성이 떨어졌음. 또한, 계약서를 비롯한 회사에서 관리 되는
              여러 서류가 다양한 형태(지류, 파일 등)로 파편화되어 관리되는 문제가 존재<br /><br />
              <strong>개선 및 성과</strong><br />
              웹페이지를 제작하여, 개인 고객들이 "웹페이지 접속" - "필요 정보입력" - "계정 및 계약서 생성" -
              "자동 결제 등록"의 절차를 통해 서비스를 사용할 수 있게끔 B2C 계약 프로세스 확립.
              또한, Cloud Storage 리소스를 활용하여 해당 프로세스를 통해 만들어진 계약서가 자동으로
              저장되고, 담당자들이 조회할 수 있도록 인프라를 구축. 파편화되던 모든 파일을 일괄적으로 정리할 수 있는 기반을 마련.
            </>
          ),
        },
        {
          title: "[ 매장음악용 셋톱박스 유지보수 ]",
          describe: (
            <>
              <strong>개요 및 특징</strong><br />
              라즈베리파이에 Python 기반의 펌웨어를 탑재하여, 매장 음악용 셋톱박스를 운영 및 유지 보수<br /><br />
              <strong>개선 1 - MQTT 프로토콜</strong><br />
              셋톱박스의 설정값(재생 곡, 볼륨)을 수령하기 위해 DB에 일정 주기로 접근하는 Polling 방식을 사용.
              하지만, 이는 서버에 부하를 줄 수 있는 방식으로 개선이 필요하였고, 메세지 기반의 MQTT프로토콜을 사용하여
              발행(publish)과 구독(subscribe)의 형태로 변경하여 서버 트래픽을 개선.<br /><br />
              <strong>개선 2 - 자동 펌웨어 업데이트</strong><br />
              기존에는 셋톱박스의 펌웨어 업데이트를 위해서는 "셋톱박스 회수" -
              "사내에서 펌웨어를 업데이트" - "재분출"의 절차를 겪어야 하는 불편함이 있었음
              이에 펌웨어를 수정하여 플레이어 실행 전 버전 확인 및 업데이트 체크 로직을 추가하고
              이에 필요한 DB 테이블과 CDN Storage 추가하고 API 개발 등의 업무를 수행<br /><br />
            </>
          ),
        },
      ],
    },
    {
      id: "panel4",
      heading: "개인 프로젝트",
      contents: [
        {
          title: "Naver Search AD",
          describe: (
            <ul>
              <li>네이버 광고는 클릭당 단가가 높은 광고가 페이지 상위에 노출되게끔 구성되어 있음</li>
              <li>광고주는 최대한 낮은 금액으로 페이지 상단에 노출 시키기 위해 클릭당 단가를 소폭 높이고 낮추는 작업을 반복함</li>
              <li>이러한 작업을 네이버 OPEN API와 연동하여 반복적으로 수행하는 Python 스크립트를 제작</li>
            </ul>
          ),
          gitLink: "https://github.com/dev-jeong/NaverSearchAD",
          blogLink: "https://devjeong-note.tistory.com/21",
        },
        {
          title: "Update Macro",
          describe: (
            <ul>
              <li>개인 쇼핑몰의 상품정보를 업로드 & 업데이트해 주는 사이트가 존재</li>
              <li>하지만 자동으로 동작하지 않고 해당 사이트에서 일렬의 작업들을 직접 진행해야 함</li>
              <li>해당 작업을 주기적으로 하지 않으면 상품정보의 일관성이 깨져 쇼핑몰 운영에 차질이 발생</li>
              <li>Handless Browser인 Puppeteer를 활용해 이러한 일렬의 작업을 자동으로 반복해 줄 수 있는 스크립트를 제작</li>
            </ul>
          ),
          gitLink: "https://github.com/dev-jeong/UpdateMacro",
          blogLink: "https://devjeong-note.tistory.com/42",
        },
      ],
    },
  ];

  return (
    <section name="project">
      <div className="row row-bottom-padded-sm">
        <h1>Project</h1>
        <div className="accordion accordion-flush mt-3" id="projectAccordion">
          {accordionData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading-${item.id}`}>
                <button
                  className="accordion-button collapsed"
                  aria-expanded="false"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${item.id}`}
                  aria-controls={`collapse-${item.id}`}
                >
                  {item.heading}
                </button>
              </h2>
              <div
                id={`collapse-${item.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${item.id}`}
                data-bs-parent="#projectAccordion"
              >
                {item.contents.map((content, contentIndex) => (
                  <React.Fragment key={contentIndex}>
                    <div className="accordion-body">
                      <div>
                        <h5>{content.title}</h5>
                        <p>{content.describe}</p>
                        <div className="contentLink">
                          {content.gitLink && <a href={content.gitLink}>GitHub 바로가기</a>}
                          {content.blogLink && <a href={content.blogLink}>Blog 바로가기</a>}
                        </div>
                      </div>
                    </div>
                    {contentIndex !== item.contents.length - 1 && <hr />}
                  </React.Fragment>
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
