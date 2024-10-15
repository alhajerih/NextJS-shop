"use client";

import React, { useState } from "react";
// Keep the existing CSS file for base styles

export default function Header() {
  // Visitor counter state
  const [count, setCount] = useState(0);

  // Handle button click (increments the visitor count)
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="header">
      <h1 className="title">Bakery Store</h1>
      <p className="subtitle">We offer the best baked goods!</p>

      {/* Visitor counter and button */}
      <div className="visitor-counter">
        <span className="visitor-count">{count} Visitors</span>
        <button className="visited-btn" onClick={handleClick}>
          Visited
        </button>
      </div>

      <div className="center-image-container">
        <img
          src="https://media.istockphoto.com/id/1176946222/vector/bakery-shop-building-facade-with-signboard.jpg?s=1024x1024&w=is&k=20&c=IzsGDdFgHeX-IjtCHH0zJ0wQD06Yl4CVTp01Ix2O7sw="
          alt="Bakery Store"
        />
      </div>
    </div>
  );
}
