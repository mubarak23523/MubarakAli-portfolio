import React from "react";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-header">
        <span className="resume-subtitle">RESUME</span>
        <h2>View My Resume</h2>
      </div>

      <div className="resume-container">
        <iframe
          src="/resume.pdf"
          title="Mubarak Resume"
          className="resume-frame"
        ></iframe>

        <div className="resume-buttons">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Open Resume
          </a>

          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;