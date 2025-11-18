import React, { useEffect, useRef, useState } from "react";
import PillNav from "./PillNav"; // your existing PillNav component


export default function ScrollSection() {
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
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "6rem 1.5rem",
        background: "#060606",
        color: "white",
        position: "relative",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "3rem",
        overflow: "hidden",
      }}
    >
      {/* GRID BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        }}
      />

      {/* PILL NAVBAR */}
      <div style={{ width: "100%", zIndex: 10 }}>
        <PillNav
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#ffffff"
          pillColor="#111111"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#ffffff"
        />
      </div>
    </section>
  );
}
