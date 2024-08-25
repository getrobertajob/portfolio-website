import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiJava } from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiPhp,
  SiExpress,
  SiMysql,
  SiOracle,
  SiMicrosoftsqlserver,
  SiDjango,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h2>HTML</h2>
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>CSS</h2>
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>JavaScript</h2>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>React</h2>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Node.js</h2>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Express.js</h2>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Python</h2>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Django</h2>
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Java</h2>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>PHP</h2>
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>SQL</h2>
        <AiOutlineConsoleSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Oracle</h2>
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Microsoft SQL Server</h2>
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>MySQL</h2>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>MongoDB</h2>
        <DiMongodb />
      </Col>
    </Row>
  );
}

export default Techstack;
