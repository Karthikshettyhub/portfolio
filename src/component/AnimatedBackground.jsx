import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="gradient-bg">
      {/* Base layer - Large blobs */}
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>
      <div className="gradient-blob blob-4"></div>
      <div className="gradient-blob blob-5"></div>
      <div className="gradient-blob blob-6"></div>
      <div className="gradient-blob blob-7"></div>
      <div className="gradient-blob blob-8"></div>
      
      {/* Mid layer - Medium blobs */}
      <div className="gradient-blob blob-9"></div>
      <div className="gradient-blob blob-10"></div>
      <div className="gradient-blob blob-11"></div>
      <div className="gradient-blob blob-12"></div>
      <div className="gradient-blob blob-13"></div>
      <div className="gradient-blob blob-14"></div>
      <div className="gradient-blob blob-15"></div>
      <div className="gradient-blob blob-16"></div>
      <div className="gradient-blob blob-17"></div>
      <div className="gradient-blob blob-18"></div>
      
      {/* Detail layer - Small accent blobs */}
      <div className="gradient-blob blob-19"></div>
      <div className="gradient-blob blob-20"></div>
      <div className="gradient-blob blob-21"></div>
      <div className="gradient-blob blob-22"></div>
      <div className="gradient-blob blob-23"></div>
      <div className="gradient-blob blob-24"></div>
      <div className="gradient-blob blob-25"></div>
      <div className="gradient-blob blob-26"></div>
      <div className="gradient-blob blob-27"></div>
      <div className="gradient-blob blob-28"></div>
      
      {/* Extra fine details */}
      <div className="gradient-blob blob-29"></div>
      <div className="gradient-blob blob-30"></div>
    </div>
  );
};

export default AnimatedBackground;