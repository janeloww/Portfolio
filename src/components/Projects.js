import projImg2 from "../assets/img/project-img2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Jinder from "../assets/img/jinder.png";
import CMS from "../assets/img/CMS-app.png";
import portfolio from "../assets/img/portfolio.png";
/* TabContainer allows for more complex layouts
    TabContent and TabPane components along with Nav allows you to piece together your own tabs with additional markup
    as needed.
    
    Creating a set of navitems with an eventkey that corresponds to the eventkey of tabpane
    
    Wrapping it all in tabcontainer gives you fully functioning custom tabs component.*/
export const Projects = () => {
  // holds the objects that we want to display
  const projects = [
    {
      title: "Jinder",
      description: "Job Search Platform",
      imgUrl: Jinder,
    },
    {
      title: "University Faculty Management Application",
      description: "Android Application",
      imgUrl: CMS,
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: portfolio,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {/* from the anime module */}
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounceIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Below is a collection of projects I’ve built. Each one
                    helped me learn something new and sharpen my skills.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items0center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {/* place all the project cards */}
                    {projects.map((project, index) => {
                      // the ...project means the rest of the props
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* just the gradient */}
      <img
        src={colorSharp2}
        alt="colour sharp 2"
        className="background-image-right"
      />
    </section>
  );
};
