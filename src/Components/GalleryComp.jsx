import React, { useEffect, useRef, useState } from "react";
import "./Css/Gallery.css";

// ✅ Import images from assets
import India1 from "../assets/India1.jpeg";
import Hero1 from "../assets/Hero1.jpg";
import Hero2 from "../assets/Hero2.jpg";
import Hero3 from "../assets/Hero3.jpg";
import Hero4 from "../assets/Hero4.jpg";
import bali1 from "../assets/bali1.jpeg";
import Venice1 from "../assets/Venice1.jpeg";
import Paris1 from "../assets/paris1.jpeg";
import Tokyo1 from "../assets/Tokyo1.jpeg";

const GalleryComp = () => {
  const images = [
    India1,
    Hero1,
    Hero2,
    Hero3,
    Hero4,
    bali1,
    Venice1,
    Paris1,
    Tokyo1,
  ];

  const [offset, setOffset] = useState(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);

  // Smooth auto-scroll
  useEffect(() => {
    let raf;
    const animate = () => {
      if (!isDragging.current) {
        setOffset((prev) => prev + 0.25 + velocity.current);
        velocity.current *= 0.95;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  // Mouse/touch drag
  const handleDown = (x) => {
    isDragging.current = true;
    lastX.current = x;
    velocity.current = 0;
  };

  const handleMove = (x) => {
    if (!isDragging.current) return;
    const delta = x - lastX.current;
    setOffset((prev) => prev + delta * 0.35);
    velocity.current = delta * 0.08;
    lastX.current = x;
  };

  const handleUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="gallery-container">
      {/* Heading + Paragraph */}
      <div className="gallery-header fade-in-up">
        <h2>Our Gallery</h2>
        <p>
          Explore the beauty of global destinations brought to life in our
          gallery.
        </p>
      </div>

      {/* Flowing Gallery */}
      <div
        className="curve-gallery"
        onMouseDown={(e) => handleDown(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleUp}
        onMouseLeave={handleUp}
        onTouchStart={(e) => handleDown(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleUp}
      >
        {images.map((src, i) => {
          const angle = ((i * 40 + offset) % 360) * (Math.PI / 180);
          const x = Math.sin(angle) * 1000;
          const z = Math.cos(angle) * 900;
          const scale = (z + 1600) / 1800;

          return (
            <div
              key={i}
              className="curve-item"
              style={{
                transform: `translate3d(${x}px, -40px, ${z}px) scale(${scale})`,
                zIndex: Math.round(z),
                opacity: scale < 0.25 ? 0 : 1,
              }}
            >
              <img src={src} alt={`img${i}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryComp;
