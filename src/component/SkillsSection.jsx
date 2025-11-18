import React, { useEffect, useRef, useState } from "react";
import "./SkillsSection.css";

const skillsData = {
  Languages: ["JavaScript", "TypeScript", "Python", "C++", "Java", "Go"],
  Frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Framer Motion"],
  "Dev Tools": ["Git", "VS Code", "Figma", "Postman", "Docker", "Linux"],
};

export default function SkillsSection() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
  }, []);

  return (
    <div
      ref={ref}
      className="skills-section"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s ease",
        width: "100%",
      }}
    >
      <h1>My Skills</h1>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <div className="category-title">{category}</div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-pill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
