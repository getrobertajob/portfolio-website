import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dojoPizza from "../../Assets/Projects/DojoPizza.png";
import emotion from "../../Assets/Projects/emotion.png";
import rankAndSave from "../../Assets/Projects/RankAndSave.png";
import targetBlaster from "../../Assets/Projects/TargetBlaster.png";
import suicide from "../../Assets/Projects/suicide.png";
import mineSweeper from "../../Assets/Projects/MineSweeper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={targetBlaster}
              isBlog={false}
              title="Target Blaster"
              description="Arcade style target shooting game. Earn points by hitting a moving 
              practice target that scrolls across the screen from random directions, speeds, 
              and angles. Use multiple weapons from hand guns to bombs to a flame thrower. 
              It's really not a fair from the targets perspective."
              ghLink="https://github.com/getrobertajob/target-blaster"
              demoLink="https://target-blaster-prod.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mineSweeper}
              isBlog={false}
              title="Mine Sweeper: The Last Step"
              description="You are private Sam Cutter and you have been given the dangerous assignment of finding and disarming all the active mines in area. 
              Use your limited range detection equipment to locate and remove mines inorder to earn points. Get huge bonus points for clearing the whole field
              quickly. Thread carefully as each step might be your last."
              ghLink="https://github.com/getrobertajob/minesweeper-the-last-step"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rankAndSave}
              isBlog={false}
              title="Rank and Save"
              description="rankandsave.com is a clever single page website with a lot of code packed into it. And all in a modular form. 
              Uses JavaScript & React with Node.js to give the user a platform to create, review, update, delete, and share money saving tips. 
              Includes a voting/ranking system with limitations for even non-registered users to avoid system abuse."
              ghLink="https://github.com/getrobertajob/rank-and-save"
              demoLink="https://rank-and-save-client.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dojoPizza}
              isBlog={false}
              title="Dojo Pizzeria"
              description="Website for Dojo Pizzeria. Includes pizza builder to guide user through placing order. Dynamically updates based on selections."
              ghLink="https://github.com/getrobertajob/Mockup-Dojo_Pizzeria_Website"
              demoLink="https://mockup-dojo-pizzeria-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
