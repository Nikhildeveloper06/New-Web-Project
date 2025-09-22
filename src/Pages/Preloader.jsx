import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Preloader.css"; 

const Preloader = () => {
  const [hovered, setHovered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLeaving(true); // start fade out
    setTimeout(() => {
      navigate("/home"); // navigate after animation
    }, 600); // duration matches CSS transition
  };

  return (
    <div
      className={`preloader ${hovered ? "hovered" : ""} ${leaving ? "leaving" : ""}`}
    >
      {/* Background video */}
      <video
        className="preloader-video"
        src="/public/travel.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Button */}
      <button
        className="enter-btn"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        Enter Site
      </button>
    </div>
  );
};

export default Preloader;
