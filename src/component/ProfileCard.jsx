import React from "react";
import "./ProfileCard.css";
import profileImg from "../assets/profile.jpg";

const ProfileCard = () => {
  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com", color: "#0077b5" },
    { label: "GitHub", href: "https://github.com", color: "#333" },
    { label: "Instagram", href: "https://instagram.com", color: "#e4405f" },
    { label: "LeetCode", href: "https://leetcode.com", color: "#ffa116" },
  ];

  return (
    <div className="profile-card">
      <div className="profile-left">
        <img src={profileImg} alt="Profile" className="profile-img" />

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

        <a
          href="#"
          className="download-resume-btn"
          onClick={(e) => e.preventDefault()}
        >
          Download Resume
        </a>
      </div>

      <div className="profile-right">
        <h2>Hi, I'm Karthik!</h2>
        <p>
          I'm a passionate web developer specializing in building beautiful and
          functional web applications. I love clean UI, modern animations, and
          creating seamless backend logic that powers the frontend.
        </p>
        <p>
          I enjoy experimenting with new technologies, solving challenging
          problems, and contributing to open source projects.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
