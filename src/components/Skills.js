import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { useState, useEffect } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

export const Skills = () => {
  const [hovered, setHovered] = useState(false);
  const CustomLeftArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "0px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        width: "40px",
        height: "40px",
        borderRadius: "50%", // makes it circular
        border: "2px solid white",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 5px rgba(0,0,0,0.3)", // optional
      }}
    >
      ←
    </div>
  );

  const CustomRightArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: "0px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        width: "40px",
        height: "40px",
        borderRadius: "50%", // makes it circular
        border: "2px solid white",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 5px rgba(0,0,0,0.3)", // optional
      }}
    >
      →
    </div>
  );
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 464 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 }, // added
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Here are a few of the skills I've developed through university
                projects, work experience, and personal learning. I’m passionate
                about creating efficient, user-focused applications and always
                learning new technologies.
              </p>
              <Carousel
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="my-tooltip" style={{ color: "green" }}>
                      React, HTML/CSS, Javascript, Node.js, Typescript, Tailwind
                      CSS
                    </Tooltip>
                  }
                >
                  <div className="item">
                    <img src={meter1} alt="Coding Languages" />
                    <h5>Languages</h5>
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="my-tooltip" style={{ color: "green" }}>
                      C, Java, Python, Javascript, Typescript, SQL, Haskell,
                      Bash Scripting
                    </Tooltip>
                  }
                >
                  <div className="item">
                    <img src={meter1} alt="Frontend Development" />
                    <h5>Frontend Development</h5>
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="my-tooltip">PostgreSQL, SQL</Tooltip>
                  }
                >
                  <div className="item">
                    <img src={meter1} alt="Web Development" />
                    <h5>Backend Development</h5>
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="my-tooltip">
                      Git, GitHub, Agile, Kanban, Jira
                    </Tooltip>
                  }
                >
                  <div className="item">
                    <img src={meter1} alt="Web Development" />
                    <h5>Version Control and Collaboration</h5>
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="my-tooltip">
                      Communication, Leadership, Collaboration, Independence
                    </Tooltip>
                  }
                >
                  <div className="item align-items-center justify-content relative">
                    <img src={meter1} alt="Web Development" />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -80%)",
                        backgroundColor: "#151515",
                        height: "60px",
                        width: "60px",
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                    ></div>
                    <h5>Interpersonal</h5>
                  </div>
                </OverlayTrigger>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        alt="gradient thingy"
        className="background-image-left"
      />
    </section>
  );
};
