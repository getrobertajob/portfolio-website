import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Robert Lute </span>
            from <span className="purple"> Denver, Colorado</span>
            . I have dual degrees from Pikes Peak Community College <span className="purple"> Computer Information Systems </span>
            and <span className="purple"> Computer Network Technology - Cisco CCNA</span> 
            . I also attended <span className="purple"> Coding Dojo/Colorado Technical University </span> for 
            <span className="purple"> Full Stack Development</span> 
            . 
            <br />
            <br />
            I'm not just looking for another job, I am searching for a stable company 
            where my rare talents and dedication can help both the company and my career progress. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
