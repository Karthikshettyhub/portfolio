
import React, { useEffect, useState } from "react";
import "./PillNav.css";

const PillNav = ({ items = [] }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <div className="pill-nav-container">
      <nav className="pill-nav">
        <ul className="pill-nav-list desktop-only">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="pill-item">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hamburger mobile-only"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          className="pill-nav-list-mobile mobile-only"
          style={{
            opacity: mobileOpen ? 1 : 0,
            pointerEvents: mobileOpen ? "auto" : "none",
            transform: mobileOpen
              ? "translateY(0)"
              : "translateY(-10px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="pill-item"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PillNav;
