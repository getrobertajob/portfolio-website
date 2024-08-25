import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiWindows,
  SiSpring,
  SiEclipseide,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <h2>Windows</h2>
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h2>Visual Studio</h2>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h2>Spring Boot</h2>
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h2>Eclipse IDE</h2>
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h2>postman</h2>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h2>Github</h2>
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h2>Vercel</h2>
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
