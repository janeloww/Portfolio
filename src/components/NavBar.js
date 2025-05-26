import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import gitHub from "..//assets/img/github-mark-white.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    // gotta remove it too when its done
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // sets the activelink var to whatever we clicked
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    // <Router>
    <Navbar expand="md" className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="/">
          <div
            className="name"
            style={{ fontWeight: "bold", color: "white", fontSize: "px" }}
          >
            Jane
          </div>
          {/* <img src={logo} alt="Logo" style={{ maxHeight: "20px", height: "auto", width: "auto"}}/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={HashLink}
              to="#home"
              smooth
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              to="#skills"
              smooth
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              to="#projects"
              smooth
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jane-low-330859290/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/janeloww"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} alt="GitHub" id="gitLogo" />
              </a>
              {/* <a href="#">
                <img src={navIcon3} alt="" />
              </a> */}
            </div>
            <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
};
