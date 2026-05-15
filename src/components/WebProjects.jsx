// WebProjects.jsx

import React from "react";
import ProjectCard from "./ProjectCard";

const webProjects = [

  {
    title: "Luxury Portfolio Website",
    image: "/web/logo2.png",
    description:
      "Modern luxury-themed portfolio website built with React, smooth animations, and responsive UI design.",
    github: "https://github.com/mubarak23523",
    live: "https://mubarak-ali-portfolio.vercel.app/",
  },

  {
    title: "Digital Flex Printing Website",
    image: "/web/logo1.jpg",
    description:
      "Professional business website for flex printing services with mega menu, hero carousel, and product showcase.",
    github: "https://github.com/mubarak23523",
    live: "https://chennaidigitalprinting.netlify.app",
  },

  {
    title: "Simple Artist Website",
    image: "/web/logo3.png",
    description:
      "Live web page for a artistic ,Using simple HTML ,CSS.",
    github: "https://github.com/mubarak23523",
    live: "https://artistic-rach.netlify.app",
  },

 
];

const WebProjects = () => {

  return (

    <section className="projects-section" id="web-projects">

      <h2 className="section-title">
        Web Projects
      </h2>

      <div className="projects-container">

        {webProjects.map((project, index) => (

          <ProjectCard
            key={index}
            {...project}
          />

        ))}

      </div>

    </section>

  );
};

export default WebProjects;