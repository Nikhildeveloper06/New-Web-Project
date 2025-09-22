import React, { useEffect, useState } from "react";
import banner from "../assets/Banaras.jpeg";

const Banner = () => {
  const headings = [
    "Where the River Whispers Stories of Time",
    "A Journey Through Sacred Alleys and Timeless Streets",
    "Feel the Eternal Rhythm Flowing with the River",
    "Discover the Spirit of Heritage and Harmony",
  ];

  const [currentHeading, setCurrentHeading] = useState("");
  const [index, setIndex] = useState(0); // which heading
  const [charIndex, setCharIndex] = useState(0); // which character
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 100; // speed when deleting vs typing
    const currentText = headings[index];

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentText.length) {
        setCurrentHeading((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setCurrentHeading((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === currentText.length) {
        // Pause before deleting
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % headings.length); // move to next heading
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, headings, index]);

  return (
    <div
      className="h-[500px] relative flex items-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black inset-0 opacity-65 absolute"></div>

      <div className="text-white flex-col flex items-center justify-center px-4 lg:px-0 text-center max-w-7xl mx-auto z-20">
        {/* Typing Heading */}
        <h2 className="lg:text-6xl text-4xl font-bold mb-6">
          {currentHeading}
          <span className="border-r-4 border-red-400 animate-pulse ml-1"></span>
        </h2>

        <p className="text-xl mb-8">
          Wander through timeless ghats, lose yourself in sacred alleys, and feel
          the rhythm of life flowing gently with the river.
        </p>

        <button className="bg-red-500 px-3 py-2 rounded-md text-white">
          Begin Your Journey
        </button>
      </div>
    </div>
  );
};

export default Banner;
