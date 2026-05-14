import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Typed from "typed.js";

const Hero = () => {

  useEffect(() => {

    const typed = new Typed(".typing", {
      strings: [
        "Frontend Developer",
        "3D Artist",
        "Creative Designer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };

  }, []);

  return (
    <section className="hero">

      <motion.div className="hero-content" initial={{ opacity:0, y:50 }}animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>

        <img
          src="/image.png"
          alt="Mubarak"
          className="hero-image"
        />

        <h1>
          Hi 👋, I'm <span className="highlight">
  Mubarak
</span>
        </h1>

        <p className="typing"></p>

        <div className="hero-buttons">

          <button className="primary-btn">
            View Projects
          </button>

          <button className="secondary-btn">
            Contact Me
          </button>

        </div>

     </motion.div>
    </section>
  );
};

export default Hero;