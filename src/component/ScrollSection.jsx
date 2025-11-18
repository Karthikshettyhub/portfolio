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
      (entries) => {
        if (entries[0].isIntersecting) {
          setFunc(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
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
        background: "#121212",
        color: "white",
        position: "relative",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <div style={{ width: "100%", maxWidth: "1200px", margin: "2rem auto" }}>
        <PillNav items={navItems} />
      </div>

      {/* ProfileCard */}
      <div
        ref={profileRef}
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            maxWidth: "1100px",
            marginTop: "7rem", // <-- added top margin to push it down
            opacity: profileShow ? 1 : 0,
            transform: profileShow ? "translateY(-100px)" : "translateY(20px)",
            transition: "all 0.7s ease",
            flexWrap: "wrap",
            zIndex: 10,
            marginBottom: "4rem",
        }}
      >
        <ProfileCard />
      </div>

      {/* ProjectsSection */}
      <div
        ref={projectsRef}
        style={{
          width: "100%",
          maxWidth: "1200px",
          opacity: projectsShow ? 1 : 0,
          transform: projectsShow ? "translateY(40px)" : "translateY(40px)",
          transition: "all 0.7s ease",
          marginBottom: "4rem",
        }}
      >
        <ProjectsSection />
      </div>

      {/* SkillsSection */}
      <div
        ref={skillsRef}
        style={{
          width: "100%",
          maxWidth: "1200px",
          opacity: skillsShow ? 1 : 0,
          transform: skillsShow ? "translateY(0px)" : "translateY(50px)",
          transition: "all 0.7s ease",
          marginBottom: "6rem",
        }}
      >
        <SkillsSection />
      </div>

      {/* Grid Background */}
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
