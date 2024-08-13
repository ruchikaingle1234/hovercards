import React, { useRef } from "react";
import "./index.css";
import { Link } from "react-router-dom";


const Mani = [
  {
    title: "HR",
    content:
      "Master HR skills with clear and specialized workshop and become an human resource expert.",
    anchor: "https://hubnex.in/",

    title2: "About this workshop",
    para: "This workshop is an introduction to Human Resources (HR). We will cover the fundamentals, including what HR is, how to manage human capital, and how to develop effective HR strategies and practices.",
    p1: "What you'll learn",
    c1: (
      <>
        HR <br /> Fundamentals
      </>
    ),
    c2: (
      <>
        Performance <br /> Management
      </>
    ),
    c3: (
      <>
        Employee <br /> Relation
      </>
    ),
    c4: (
      <>
        HR Compliance <br /> and Policies
      </>
    ),
    link: "/hr",
    button: "Enroll Now",
  },
  {
    title: "Data Science",
    content:
      "Master HR skills with clear and specialized workshop and become an human resource expert.",
    anchor: "https://hubnex.in/",
    link: "/ds",
    title2: "About this workshop",
    para: "This is an introduction to data science and machine learning. We will cover the basics, including what data science is, how to analyze data, and how to build machine learning models.",
    p1: "What you'll learn",
    c1: "Data Analysis",
    c2: "Machine Learning",
    c3: "Statistic Analysis",
    c4: "Databases",
    button: "Enroll Now",
  },
  {
    title: "Marketing",
    content:
      "Master Marketing with clear and specialized workshop and become a marketing expert.",
    anchor: "https://hubnex.in/",
    link: "/marketing",
    title2: "About this workshop",
    para: "This is an introduction to marketing. We will cover the basics, including what marketing is, how to analyze market trends, and how to develop effective marketing strategies.",
    p1: "What you'll learn",
    c1: (
      <>
        consumer <br /> behavior Analysis
      </>
    ),
    c2: (
      <>
        Digital Marketing <br /> Stratgies
      </>
    ),
    c3: (
      <>
        Market <br /> Research
      </>
    ),
    c4: (
      <>
        Branding and <br />
        Positioning
      </>
    ),
    button: "Enroll Now",
  },
  {
    title: "UIUX",
    content:
      "Master UIUX with clear and specialized workshop and become a design expert",
    anchor: "https://hubnex.in/",

    title2: "About this workshop",
    para: " This is an introduction to UI/UX Design. We will cover the fundamentals, including what UI/UX design is, how to create effective user interfaces, and how to design engaging user experiences.",
    p1: "What you'll learn",
    c1: (
      <>
        User Interface <br /> (UI) Design
      </>
    ),
    c2: (
      <>
        User Experience <br /> (UX) Principles
      </>
    ),
    c3: (
      <>
        Wireframing and <br /> Prototyping
      </>
    ),
    c4: (
      <>
        Design Thinking <br /> and Usability
      </>
    ),
    button: "Enroll Now",
  },
  {
    title: "Finance",
    content:
      "Master Finance with clear and specialized workshop and become a finance expert.",
    anchor: "https://hubnex.in/",

    title2: "About this workshop",
    para: "This is an introduction to finance. We will cover the fundamentals, including what finance is, how to manage financial resources, and how to make informed investment decisions.",
    p1: "What you'll learn",
    c1: <>Financial <br /> Analysis</>,
  
    c2: <>Investment<br /> Strategies</>,
    c3: <>Budgeting and <br />Forecasting</>,
    c4: <>Risk<br /> Management</>,
    button: "Enroll Now",
  },
  {
    title: "Front End",
    content:
      "Master Front-end with clear and specialized workshop and become a frontend expert.",
    anchor: "https://hubnex.in/",

    title2: "About this workshop",
    para: "This is an introduction to frontend development. We will cover the basics, including what frontend development is, how to design and build user interfaces, and how to work with modern frontend technologies.",
    p1: "What you'll learn",
    c1: <>HTML <br/>&  CSS</>,
    c2: <>JavaScript <br/>& Frameworks</>,
    c3: <>Responsive <br/> Design</>,
    c4: <>Web Performance<br/> Optimization</>,
    button: "Enroll Now",
  },
  {
    title: "AIML",
    content:
      "Master AIML with clear and specialized workshop and become an AIML expert.",
    anchor: "https://hubnex.in/",

    title2: "About this workshop",
    para: "This is an introduction to artificial intelligence and machine learning. We will cover the basics, including what artificial intelligence is, how to analyze data, and how to build and deploy machine learning models.",
    p1: "What you'll learn",
    c1: (
      <>
        Machine Learning <br />
        Tools
      </>
    ),
    c2: (
      <>
        Neural <br /> Networks
      </>
    ),
    c3: (
      <>
        Artificial <br /> Intelligence Tools
      </>
    ),
    c4: (
      <>
        Data Processing & <br />
        Feature Engineering
      </>
    ),

    button: "Enroll Now",
  },
  {
    title: "Full Stack",
    content:
      "Master Full Stack with clear and specialized workshop and become a Full Stack expert.",
    anchor: "https://hubnex.in/",

    title2: "About this workshop",
    para: "This is an introduction to fullstack development. We will cover the fundamentals, including what fullstack development is, how to build both front-end and back-end applications, and how to integrate them to create fully functional web applications.",
    p1: "What you'll learn",
    c1: <>Web <br/>Development</>,
    c2: <>Front-End <br/>Technologies</>,
    c3: <>Back-End <br/>Development</>,
    c4: <>Databases <br/> and APIs</>,
    button: "Enroll Now",
  },
  {
    title: "HR",
    content:
      "Master HR skills with clear and specialized workshop and become an human resource expert.",
    anchor: "https://hubnex.in/",

    title2: "About this workshop",
    para: "This workshop is an introduction to Human Resources (HR). We will cover the fundamentals, including what HR is, how to manage human capital, and how to develop effective HR strategies and practices.",
    p1: "What you'll learn",
    c1: (
      <>
        HR <br /> Fundamentals
      </>
    ),
    c2: (
      <>
        Performance <br /> Management
      </>
    ),
    c3: (
      <>
        Employee <br /> Relation
      </>
    ),
    c4: (
      <>
        HR Compliance <br /> and Policies
      </>
    ),

    button: "Enroll Now",
  },
];

const Cards = () => {
  const containerRef = useRef(null);

  const forwardHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 361,
        behavior: "smooth",
      });
    }
  };

  const previousHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -361,
        behavior: "smooth",
      });
    }
  };

  const CardsTitle = () => (
    <div className="Cardstitle-details">
      <h4 className="head1">Comprehensive Services Tailored for Success</h4>
      <p className="para1">
        Expert academic counseling, our services are designed to
      </p>
      <p className="para">meet your every educational need</p>
      <div className="div-viewmore">
        <a className="anchor-viewmore" href="https://hubnex.in/">
          <h6>View more</h6> <i className="fa-solid fa-angle-right"></i>
        </a>
      </div>
    </div>
  );

  return (
    <div className="Cards-body">
      <CardsTitle />

      <div className="Cards-Container-body" ref={containerRef}>
        {Mani.map((each, index) => (
          <Link
            key={index}
            to={each.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div key={index} className="card-wrapper">
              {/* <Link style={{textDecoration:"none",color:"black"}} to="/hello"> */}

              <div className="Cards-Container">
                <h1 className="title">{each.title}</h1>
                <p className="paragraph">{each.content}</p>
                <a className="anchor-content" href={each.anchor}>
                  <button className="button-link">+</button>
                </a>
                <div className="extra-info">
                  <div class="triangle-left">
                    {/* <Link style={{textDecoration:"none",color:"black"}} to="/hello"> */}
                    <div className="Cards-Container-body1">
                      <div className="image-container">
                        {each.Image && (
                          <img
                            src={each.Image}
                            alt={each.title}
                            className="hover-image1"
                          />
                        )}
                        <div className="text-comtainer">
                          <p className="t1">{each.title}</p>
                        </div>
                      </div>

                      <h5 style={{ marginLeft: "10px" }} className="t2">
                        {each.title2}
                      </h5>
                      <p className="para2">{each.para}</p>
                      <p style={{ marginLeft: "10px" }}>{each.p1}</p>
                      <div className="container">
                        <div className="item">
                          <p className="p2">{each.c1}</p>
                        </div>
                        <div className="item">
                          <p className="p2">{each.c2}</p>
                        </div>
                        <div className="item">
                          <p className="p2">{each.c3}</p>
                        </div>
                        <div className="item">
                          <p className="p2">{each.c4}</p>
                        </div>
                      </div>

                      <a href="https://hubnex.in/">
                        <button className="enroll-buttn">{each.button}</button>
                      </a>
                    </div>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </div>
          </Link>
        ))}
      </div>

      <div className="button-control-div">
        <button className="Buttons-container" onClick={previousHandler}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="Buttons-container" onClick={forwardHandler}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Cards;
