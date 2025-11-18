import React from "react";
import AnimatedBackground from "./component/AnimatedBackground";
import ScrollSection from "./component/ScrollSection";
import "./App.css";

function App() {
  const name = "Karthik";

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

      {/* SCROLL SECTION */}
      <ScrollSection />
    </>
  );
}

export default App;
