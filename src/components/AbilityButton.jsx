import React from "react";

export default function AbilityButton({ type, children, selected }) {
  let size = 8;
  if (type === "ult") {
    size = 10;
  }
  let selectedStyle = "border-white border-opacity-25 bg-black";
  if (selected) {
    selectedStyle = "border-gold bg-gold-dark text-gold";
  }
  return (
    <button
      className={`absolute m-1  w-${size} h-${size} relative ${selectedStyle} border-2 rounded-full`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </button>
  );
}
