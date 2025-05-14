import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]; // the words to show up
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100); // determines how fast one letter shows after the next
  const period = 2000; //indicates how much time passes between each word

  const tick = () => {
    let i = loopNum % toRotate.length; //mod so it goes back to first rotating word
    let fullText = toRotate[i];
    // if the text is deleting, then you want to print out the word with the last letter gone
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      // if we've written out the whole word, we want to start deleting
      setIsDeleting(true);
      setDelta(period); //set back to its normal pace
    } else if (isDeleting && updatedText === "") {
      // done deleting, we want to print the next word now
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
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
            <span className="tagline">Welcome to my Portfolio</span>
          </Col>
          <h1>
            {`Hi I'm Jane Low `}
            <span className="wrap">{text}</span>
          </h1>
          <p>tell me about yourself will be put in here.</p>
          <button onClick={() => console.log("connect")}>
            Let's Connect! <ArrowRightCircle size={25} />
          </button>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
