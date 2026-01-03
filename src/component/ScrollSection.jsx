import React, { useEffect, useRef, useState } from "react";
import PillNav from "./PillNav";
import ProfileCard from "./ProfileCard";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

export default function ScrollSection({ children }) {
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const [profileShow, setProfileShow] = useState(false);
  const [projectsShow, setProjectsShow] = useState(false);
  const [skillsShow, setSkillsShow] = useState(false);

  const observe = (ref, setFunc) => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFunc(true);
          obs.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );
    obs.observe(el);
  };

  useEffect(() => {
    observe(profileRef, setProfileShow);
    observe(projectsRef, setProjectsShow);
    observe(skillsRef, setSkillsShow);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#121212",
        color: "white",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "2rem auto 0",
          zIndex: 20,
        }}
      >
        <PillNav items={navItems} />
      </div>

      <div
        ref={profileRef}
        style={{
          width: "100%",
          maxWidth: "1100px",
          marginTop: "6rem",
          marginBottom: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: profileShow ? 1 : 0,
          transform: profileShow
            ? "translateY(0px)"
            : "translateY(60px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          zIndex: 10,
          padding: "0 1rem",
        }}
      >
        <ProfileCard />
      </div>

      <div
        ref={projectsRef}
        style={{
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "4rem",
          opacity: projectsShow ? 1 : 0,
          transform: projectsShow
            ? "translateY(0px)"
            : "translateY(80px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          padding: "0 1rem",
          zIndex: 10,
        }}
      >
        <ProjectsSection />
      </div>

      <div
        ref={skillsRef}
        style={{
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "6rem",
          opacity: skillsShow ? 1 : 0,
          transform: skillsShow
            ? "translateY(0px)"
            : "translateY(80px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          padding: "0 1rem",
          zIndex: 10,
        }}
      >
        <SkillsSection />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          zIndex: 0,
        }}
      />
    </section>
  );
}
