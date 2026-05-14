
import React from "react";

const Contact = () => {

  return (

    <section className="contact-section" id="contact">

      <div className="contact-header">

        <span className="contact-subtitle">
          CONTACT
        </span>

        <h2>
          Let's Work Together
        </h2>

      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <h3>
            Have a project idea?
          </h3>

          <p>
            I'm always interested in creative projects,
            collaborations, UI/UX ideas, and 3D visualizations.
          </p>

          <div className="contact-details">

            <p>📧 mubarak23523@gmail.com</p>

            <p>📍 Tamil Nadu, India</p>

          </div>

          <div className="contact-socials">

            <a href="https://www.instagram.com/aalam_alkhayal_05/">
              Instagram
            </a>

            <a href="https://github.com/mubarak23523">
              GitHub
            </a>

            <a href="www.linkedin.com/in/mubarak-s-9a374a307">
              LinkedIn
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="submit">

            Send Message

          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;

