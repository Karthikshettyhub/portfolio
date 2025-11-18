import React, { useState } from "react";
import "./PillNav.css";

const PillNav = ({ items = [] }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="pill-nav-container"> {/* container to move near top */}
      <nav className="pill-nav">
        {/* Desktop Menu */}
        <ul className="pill-nav-list desktop-only">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="pill-item">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger for Mobile */}
        <button
          className="hamburger mobile-only"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="pill-nav-list-mobile mobile-only">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="pill-item">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default PillNav;
