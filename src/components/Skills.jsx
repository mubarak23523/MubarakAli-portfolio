import React from "react";

const skills = [

  {
    icon: "💻",
    title: "Frontend",
    desc: "React, HTML, CSS, Bootstrap, JavaScript"
  },

  {
    icon: "🎨",
    title: "UI/UX",
    desc: "Modern interfaces with clean user experience"
  },

  {
    icon: "🧊",
    title: "3D Design",
    desc: "Blender modeling, rendering & environments"
  },

  {
    icon: "🎬",
    title: "Animation",
    desc: "Interactive motion effects and transitions"
  }

];

const Skills = () => {

  return (

    <section className="skills-section" id="skills">

      <div className="skills-header">

        <span className="skills-subtitle">
          WHAT I DO
        </span>

        <h2>
          My Skills
        </h2>

      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <p>{skill.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;