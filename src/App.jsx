import React from "react";
import AnimatedBackground from "./component/AnimatedBackground";
import ScrollSection from "./component/ScrollSection";
import PillNav from "./component/PillNav"; // Navbar component
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
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <AnimatedBackground />

        <div className="main-container">
          <div className="center-content">
            {/* Name animation */}
            <h1 className="animated-name">
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

            {/* Scroll indicator */}
            <div className="scroll-indicator fade-in">
              <p className="scroll-text">Scroll down</p>
              <div className="scroll-box">
                <div className="scroll-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL SECTION WITH NAVBAR */}
      <ScrollSection>
        <PillNav items={navItems} />
      </ScrollSection>
    </>
  );
}

export default App;
