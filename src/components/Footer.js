import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
          <h3>Robert Lute - - - "May your code be clean, your bugs be few, and your deploys be smooth today!"</h3>
    </Container>
  );
}

export default Footer;
