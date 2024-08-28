import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a focused and dedicated Developer with a passion for creating solutions that are
              streamlined and effective. With a goal in mind for enhancing the users<span>'</span>{" "}
              experiences.
              <br />
              <br />
              As an example, I am proud that at my last employment role, ticket volumes 
              <b className="purple"> decreased by 30%</b> due to my workflow refinements 
              and cost <b className="purple">reduced 20%</b> from my application
              maintenance with database report automation.
              <br />
              <br />I am fluent in multiple programming languages like
              <i>
                <b className="purple"> JavaScript</b>
              </i>
              ,
              <i>
                <b className="purple"> Python</b>
              </i>
              ,
              <i>
                <b className="purple"> Java</b>
              </i>
              ,
              <i>
                <b className="purple"> SQL</b>
              </i>
              , and more.
              <br />
              <br />
              My personal hobbies are video games like
              <i>
                One of my hobbies is learning about new and emerging technologies. I<span>'</span>ve
                been having fun researching data about<b className="purple"> Web3</b>. And I
                <span>'</span>ve been looking into the various possible applications of
                <b className="purple"> Blockchain Technology</b>.
                <br />
                <br />
                My other hobbies are video games like (
                <i>
                  <b className="purple"> Platformers</b>
                </i>
                ,
                <i>
                  <b className="purple"> Tactical</b>
                </i>
                ,
                <i>
                  <b className="purple"> Survival</b>
                </i>
                ,
                <i>
                  <b className="purple"> Turnbase & Realtime Strategy</b>
                </i>
                ,
                <i>
                  <b className="purple"> Shooters</b>
                </i>
                ,
                <i>
                  <b className="purple"> Puzzle</b>
                </i>
                ,
                <i>
                  <b className="purple"> MMOs</b>
                </i>
                ,
                <i>
                  <b className="purple"> Action Adventure</b>
                </i>
                , and
                <i>
                  <b className="purple"> Sandbox </b>
                </i>
                ).
              </i>
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/getrobertajob"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/_ServerError_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/robert-lute/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/crypto.yolo.lambo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
