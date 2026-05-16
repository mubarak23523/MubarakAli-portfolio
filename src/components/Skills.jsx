import React from "react";

const skills = [
  {
    icon: "💻",
    title: "Frontend",
    desc: "Modern responsive interfaces and interactive web experiences.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    glow: "frontend-glow",
  },

  {
    icon: "🎨",
    title: "UI/UX",
    desc: "Clean modern interfaces with strong visual hierarchy.",
    tech: ["Figma", "Wireframes", "UX", "Design Systems"],
    glow: "ui-glow",
  },

  {
    icon: "🧊",
    title: "3D Design",
    desc: "Cinematic Blender renders, environments, and lighting.",
    tech: ["Blender", "Cycles", "Lighting", "Rendering"],
    glow: "three-glow",
  },

  {
    icon: "🎬",
    title: "Animation",
    desc: "Interactive transitions and motion-driven experiences.",
    tech: ["GSAP", "CSS", "Motion", "Transitions"],
    glow: "motion-glow",
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-header">

        <span>WHAT I DO</span>

        <h2>Creative Expertise</h2>

      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div
            className={`skill-card ${skill.glow}`}
            key={index}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <p>{skill.desc}</p>

            <div className="tech-stack">

              {skill.tech.map((item, i) => (

                <span key={i}>
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;