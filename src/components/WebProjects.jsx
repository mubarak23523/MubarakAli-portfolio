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
  title: "Increnity Creative Platform",
  image: "/web/logo3.png",
  description:
    "Developed and deployed a full-stack creative community platform with responsive frontend, secure backend APIs, MongoDB Atlas integration, authentication system, admin dashboard, and cloud deployment using Vercel and Render.",
  tech:
    "React.js, Node.js, Express.js, MongoDB Atlas, Render, Vercel, CSS",
  github: "https://github.com/mubarak23523",
    live: "https://increnity.vercel.app/",
}
 
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