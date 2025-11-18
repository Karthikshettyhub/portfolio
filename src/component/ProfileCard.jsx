import React from "react";
import "./ProfileCard.css";
import profileImg from "../assets/profile.jpg"; // Replace with your photo

const ProfileCard = () => {
  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com", color: "#0077b5" },
    { label: "GitHub", href: "https://github.com", color: "#333" },
    { label: "Instagram", href: "https://instagram.com", color: "#e4405f" },
    { label: "LeetCode", href: "https://leetcode.com", color: "#ffa116" },
  ];

  return (
    <div className="profile-card">
      {/* Left: Profile Photo + Social Links */}
      <div className="profile-left">
        <img src={profileImg} alt="" className="profile-img" />

        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: link.color }}
              className="social-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Dummy Resume Button */}
        <a
          href="#"
          className="resume-button"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.8rem 1.5rem",
            backgroundColor: "white",
            color: "#121212",
            fontWeight: "600",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onClick={(e) => e.preventDefault()} // Prevents any action for now
        >
          Download Resume
        </a>
      </div>

      {/* Right: Summary */}
      <div className="profile-right">
        <h2>Hi, I'm Karthik!</h2>
        <p>
          I'm a passionate web developer specializing in building beautiful and functional web
          applications. I love clean UI, modern animations, and creating seamless backend logic
          that powers the frontend.
        </p>
        <p>
          I enjoy experimenting with new technologies, solving challenging problems, and
          contributing to open source projects.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
