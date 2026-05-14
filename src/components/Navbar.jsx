import React, { useState, useEffect } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if(window.scrollY > 50){
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>


      {/* HAMBURGER */}

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >

        <span></span>
        <span></span>
        <span></span>

      </div>

      {/* NAV LINKS */}

      <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;