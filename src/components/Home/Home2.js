import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
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
              I am a passionate and dedicated Developer with a pasion for creating solutions that
              are not only effective but also enhance user experiences and streamline the processes.
              <br />
              <br />
              As an example I am proud that at my last employment role, ticket volumes decreased by 30% due to 
              my workflow refinements and budget reduced 20% from my application maintenance with database report automation. 
              <br />
              <br />
              I am fluent in multiple programming languages like
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
                <b className="purple"> (
                  Platformers, 
                  RPGs, Tactical, 
                  Survival, 
                  Turnbase & Realtime Strategy, 
                  Shooters, 
                  Puzzle, 
                  MMOs, 
                  Action Adventure, 
                  Sandbox
                  )</b>
                .
                <br />
                <br />
                Recently I have been learning about 
                <b className="purple"> NFTs </b>
                , 
                <b className="purple"> Blockchain Technology </b>
                and 
                <b className="purple"> Web3 </b>
                for fun. My favorite blockchains are
                <b className="purple"> Ethereum </b>
                and 
                <b className="purple"> Cardano</b>
                and 
                <b className="purple"> Polygon</b>
                . I am not a crypto bro, but I do think that every new technology should be explored and lessons can be learned.
              </i>
              <br />
              <br />
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
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
