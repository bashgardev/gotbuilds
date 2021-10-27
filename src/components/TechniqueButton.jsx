import React from "react";

export default function TechniqueButton({ children, selected }) {
  let selectedStyle = "border-white bg-black border-opacity-25";
  if (selected) {
    selectedStyle = "border-gold bg-gold-dark text-gold";
  }

  return (
    <button
      className={`hover:border-opacity-50 w-6 h-6 mx-2 align-middle text-center border-2 ${selectedStyle} transform rotate-45`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-45">
        {children}
      </div>
    </button>
  );
}
