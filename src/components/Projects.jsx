// Project.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Testing Lighting",
    image: "/blender/light2.jpeg",
    description:
      "Realtime atmospheric lighting using Blender texturing, volumetrics, and cinematic rendering.",
    github: "https://github.com/mubarak23523",
  },

  {
    title: "Cafe Architecture",
    image: "/blender/arch1.jpeg",
    description:
      "Modern café architecture visualization with warm atmospheric lighting and realistic interior detailing.",
    github: "https://github.com/mubarak23523",
  },

  {
    title: "Home Architecture",
    image: "/blender/archh1.jpeg",
    description:
      "Modern home architecture visualization with cinematic lighting, realistic materials, and contemporary design aesthetics.",
    github: "https://github.com/mubarak23523",
  },

  {
    title: "Modern Living Room",
    image: "/blender/archhh1.jpeg",
    description:
      "Modern hall interior visualization with cinematic lighting, realistic materials, and contemporary architectural aesthetics.",
    github: "https://github.com/mubarak23523",
  },

  {
    title: "Gaming Environment",
    image: "/blender/game1.jpeg",
    description:
      "Realtime game environment with cinematic lighting, atmospheric effects, and immersive world design.",
    github: "https://github.com/mubarak23523",
  },

  {
    title: "Atmospheric Lighting",
    image: "/blender/atmosp1.jpeg",
    description:
      "Realtime atmospheric lighting using Blender texturing, volumetrics, and cinematic rendering.",
    github: "https://github.com/mubarak23523",
  },

  {
    title: "Last of Environment",
    image: "/blender/ev1.jpeg",
    description:
      "Post-apocalyptic environment with cinematic lighting, abandoned architecture, and immersive atmospheric storytelling.",
    github: "https://github.com/mubarak23523",
  },

  {
    title: "Class Room",
    image: "/blender/cl1.jpeg",
    description:
      "Classroom environment with realtime lighting, realistic materials, and cinematic interior atmosphere.",
    github: "https://github.com/mubarak23523",
  },

  {
    title: "Beyond the Mountains",
    image: "/blender/atmos1.jpeg",
    description:
      "Atmospheric railway environment with cinematic fog, realistic lighting, and immersive mountain scenery.",
    github: "https://github.com/mubarak23523",
  },
];

const Projects = () => {
  return (
    
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        My 3D-Projects
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;