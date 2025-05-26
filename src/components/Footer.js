import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MainchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo.svg";
import gitHub from "..//assets/img/github-mark-white.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col sm={6}>
            <div style={{ fontWeight: "bold", fontSize: "50px" }}>Jane Low</div>
            <div>jane.low@mail.utoronto.ca</div>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} />
              </a>
              <a href="">
                <img src={gitHub} />
              </a>
            </div>
            {/* <p>CopyRight 2025. All Rights Reserved</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
