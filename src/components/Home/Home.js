import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";









function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Robert Lute</strong>, and I have worn many hats in my
                career.
              </h1>

              <div style={{ marginLeft: 45, marginTop: "-10px", paddingTop: 0, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5}>
              <img
                src={myImg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            {/* <Col md={4} className="myAvtar">
                <img src={myImg} className="img-fluid" alt="avatar" />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
