import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import headShot from "../assets/img/fake-headshot-3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Developer", "CS Student"]; // the words to show up
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150); // determines how fast one letter shows after the next
  const period = 2000; //indicates how much time passes between each word

  const tick = () => {
    let i = loopNum % toRotate.length; //mod so it goes back to first rotating word
    let fullText = toRotate[i];
    // if the text is deleting, then you want to print out the word with the last letter gone
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      // pause before deleting
      setIsDeleting(true);
      setDelta(period); // pause at full word
    } else if (isDeleting && updatedText === "") {
      // done deleting, go to next word
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100); // reset to normal typing speed
    } else {
      // normal typing or deleting speed
      setDelta(100);
    }
    // if (isDeleting) {
    //   setDelta((prevDelta) => prevDelta / 2);
    // }
    // if (!isDeleting && updatedText === fullText) {
    //   // if we've written out the whole word, we want to start deleting
    //   setIsDeleting(true);
    //   setDelta(period); //set back to its normal pace
    // } else if (isDeleting && updatedText === "") {
    //   // done deleting, we want to print the next word now
    //   setIsDeleting(false);
    //   setLoopNum(loopNum + 1);
    //   setDelta(100);
    // }
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // once you've set the interval and component amt, we need to clear it
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {/* from the anime module */}
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Jane Low, a `}
                    <br />
                    <span className="wrap" style={{ marginLeft: "0px" }}>
                      {text}
                    </span>
                  </h1>
                  <p>
                    I’m a third-year Computer Science student at the University
                    of Toronto Scarborough, specializing in Software
                    Engineering. Outside of the classroom, I’m a committed
                    athlete on U of T’s tri-campus volleyball team, where I’ve
                    developed strong skills in teamwork, focus, and resilience.
                    I'm currently exploring opportunities to apply my technical
                    skills in real-world settings, with a particular interest in
                    full-stack development and building intuitive, impactful
                    applications. Whether I’m writing clean, maintainable code
                    or collaborating to bring an idea to life, I’m always eager
                    to learn, improve, and take on new challenges!
                  </p>
                  <div>
                    <HashLink
                      to="#connect"
                      smooth
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <button>
                        Let's Connect! <ArrowRightCircle size={25} />
                      </button>
                    </HashLink>
                  </div>

                  {/* <button onClick={() => console.log("connect")}></button> */}
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img className="astronaut-img" src={headerImg} alt="Header Img" />
            <div className="image-wrapper">
              <img className="profile-pic" src={headShot} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
