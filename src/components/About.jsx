import React from "react";

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-image-section">

          <img
            src="/meee.jpeg"
            alt="Mubarak"
            className="about-image"
          />

        </div>

        {/* RIGHT SIDE */}

        <div className="about-content">

          <h2>About Me</h2>

          <p>
            I'm a passionate frontend developer and 3D artist
            focused on creating modern, interactive, and visually
            appealing digital experiences.
          </p>

          <p>
            I enjoy designing premium user interfaces,
            building responsive websites, and experimenting
            with Blender and creative animations.
          </p>

          <div className="about-stats">

            <div className="stat-box">
              <h3>10+</h3>
              <span>Projects</span>
            </div>

            <div className="stat-box">
              <h3>2+</h3>
              <span>Years Learning</span>
            </div>

            <div className="stat-box">
              <h3>100%</h3>
              <span>Creativity</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;