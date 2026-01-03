import React from "react";
import AnimatedBackground from "./component/AnimatedBackground";
import ScrollSection from "./component/ScrollSection";
import PillNav from "./component/PillNav";
import "./App.css";

function App() {
  const name = "Karthik";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="app-root">
      {/* HERO SECTION */}
      <section className="hero-section" role="banner">
        {/* Background */}
        <AnimatedBackground />

        {/* Content Wrapper */}
        <div className="main-container">
          <div className="center-content">
            {/* Animated Name */}
            <h1
              className="animated-name"
              aria-label={`Portfolio of ${name}`}
            >
              {name.split("").map((letter, index) => (
                <span
                  key={index}
                  className="letter"
                  style={{ animationDelay: `${index * 0.25}s` }}
                >
                  {letter}
                </span>
              ))}
            </h1>

            {/* Scroll Indicator */}
            <div className="scroll-indicator fade-in">
              <p className="scroll-text">Scroll down</p>
              <div className="scroll-box" aria-hidden="true">
                <div className="scroll-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <ScrollSection>
        <div className="nav-wrapper">
          <PillNav items={navItems} />
        </div>
      </ScrollSection>
    </div>
  );
}

export default App;
