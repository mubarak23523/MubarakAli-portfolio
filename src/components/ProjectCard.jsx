// ProjectCard.jsx
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({
  image,
  title,
  description,
  github,
  live,
}) => {

  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1200}
        transitionSpeed={1500}
        scale={1.02}
        gyroscope={true}
        className="project-card"
      >

        <div className="project-image-container">

          <img
            src={image}
            alt={title}
            className="project-image"
          />

        </div>

        <div className="project-content">

          <h3>{title}</h3>

          <p>{description}</p>

          <div className="project-buttons">

  {/* FOR 3D PROJECTS */}

  {!live && (
    <button
      className="project-btn live-btn"
      onClick={() => setShowImage(true)}
    >
      View Full Image
    </button>
  )}

  {/* FOR WEBSITE PROJECTS */}

  {live && (
    <a
      href={live}
      target="_blank"
      rel="noreferrer"
      className="project-btn live-btn"
    >
      Visit Website
    </a>
  )}

  <a
    href={github}
    target="_blank"
    rel="noreferrer"
    className="project-btn github-btn"
  >
    GitHub
  </a>

</div>
        </div>

      </Tilt>

      {/* FULL IMAGE POPUP */}

      {showImage && (
        <div
          className="image-popup"
          onClick={() => setShowImage(false)}
        >

          <span className="close-btn">
            ✕
          </span>

          <img
  src={image}
  alt={title}
  className="popup-image"
  onClick={(e) => e.stopPropagation()}
/>
        </div>
      )}
    </>
  );
};

export default ProjectCard;