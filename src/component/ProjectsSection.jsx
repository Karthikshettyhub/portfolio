import React, { useEffect, useRef, useState } from "react";
import "./ProjectsSection.css";

const projects = [
  {
    title: "Project One",
    desc: "A full-stack web application with modern UI.",
    img: "https://via.placeholder.com/600x400", // dummy image
    code: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    desc: "A backend system with robust logic and data handling.",
    img: "https://via.placeholder.com/600x400",
    code: "#",
    demo: "#",
  },
  {
    title: "Project Three",
    desc: "A beautifully animated React component library.",
    img: "https://via.placeholder.com/600x400",
    code: "#",
    demo: "#",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
  }, []);

  return (
    <section
      ref={ref}
      className="projects-section"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0px)" : "translateY(50px)",
        transition: "all 0.7s ease",
      }}
    >
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <img src={proj.img} alt={proj.title} className="project-image" />
            <div className="project-text">
              <h2>{proj.title}</h2>
              <p>{proj.desc}</p>
              <div className="project-buttons">
                <a href={proj.code} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  View Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
