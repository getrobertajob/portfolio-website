import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dojoPizza from "../../Assets/Projects/DojoPizza.png";
import rankAndSave from "../../Assets/Projects/RankAndSave.png";
import targetBlaster from "../../Assets/Projects/TargetBlaster.png";
import taskQuest from "../../Assets/Projects/TaskQuest.png";
import toDoList from "../../Assets/Projects/ToDoList.png";
import mineSweeper from "../../Assets/Projects/MineSweeper.png";
import taskQuestFS from "../../Assets/Projects/TaskQuest_Fullsize.png";  
import targetBlasterFS from "../../Assets/Projects/TargetBlaster_Fullsize.png";  
import mineSweeperFS from "../../Assets/Projects/MineSweeper_Fullsize.png";  
import rankAndSaveFS from "../../Assets/Projects/RankAndSave_Fullsize.png";  // Added full-size image path for Rank and Save
import dojoPizzaFS from "../../Assets/Projects/DojoPizza_Fullsize.png";  // Added full-size image path for Dojo Pizzeria

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
              imgPath={taskQuest}
              isBlog={false}
              title="TaskQuest: The To-Do List Saga"
              description="Embark on an epic quest where the lines between reality and fantasy blur! 
              In TaskQuest: The To-Do List Saga, take on the role of a hero caught between two 
              worlds—one of everyday tasks and one of mythical challenges. Balance your real-life 
              to-do list with thrilling RPG adventures, slay mundane monsters like the Laundry Beast, 
              conquer the Paper Stack Dragon, and level up your character as you complete quests in 
              both realms. Can you maintain harmony between these worlds and become the ultimate 
              champion of productivity?"
              ghLink="https://github.com/getrobertajob/task-quest"
              fullSizeImage={taskQuestFS}  // Passed fullSizeImage as a prop
            />
          </Col>

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
              fullSizeImage={targetBlasterFS}  // Passed fullSizeImage as a prop
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
              fullSizeImage={mineSweeperFS}  // Passed fullSizeImage as a prop
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
              fullSizeImage={rankAndSaveFS}  // Passed fullSizeImage as a prop
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
              fullSizeImage={dojoPizzaFS}  // Passed fullSizeImage as a prop
            />
          </Col>

          {/* Repeat for other ProjectCards and add fullSizeImage prop */}
          {/* ... */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
