import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog, fullSizeImage }) {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleImageClick = (e) => {
    e.stopPropagation(); // Prevent triggering the hide event when clicking on the image
    setIsImageVisible(!isImageVisible);
  };

  const hideImage = () => {
    setIsImageVisible(false);
  };

  return (
    <>
      <div onClick={hideImage} style={{ position: "relative" }}>
        <Card className="project-card-view">
          <Card.Img variant="top" src={imgPath} alt="card-img" />
          <p
            style={{
              textAlign: "center",
              color: "purple",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the hide event when clicking on this text
              handleImageClick(e);
            }}
          >
            Click here to view full-size image
          </p>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <br />
            <Card.Text style={{ textAlign: "justify" }}>
              {description}
            </Card.Text>
            <Button variant="primary" href={ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {isBlog ? "Blog" : "GitHub"}
            </Button>
            {"\n"}
            {"\n"}
            {!isBlog && demoLink && (
              <Button
                variant="primary"
                href={demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;{"Demo"}
              </Button>
            )}
          </Card.Body>
        </Card>

        {isImageVisible && (
          <div
            onClick={hideImage}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <img
              src={fullSizeImage}  // Use the fullSizeImage prop
              alt="Full Size"
              style={{ maxWidth: "90%", maxHeight: "90%" }}
              onClick={handleImageClick}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectCards;
