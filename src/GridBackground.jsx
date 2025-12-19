import React from "react";

export default function GridBackground({ children, isDarkMode }) {
  return (
    <div
      className={`relative w-full min-h-screen ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
      style={{
        backgroundSize: '40px 40px',
        backgroundImage: isDarkMode 
          ? 'linear-gradient(to right, #404040 1px, transparent 1px), linear-gradient(to bottom, #404040 1px, transparent 1px)'
          : 'linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)'
      }}
    >
      {/* Radial fade overlay */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{
          background: isDarkMode ? 'black' : 'white',
          maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}