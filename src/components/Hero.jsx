import React from "react";

export default function Hero() {
  return (
    <div className="bg-hero bg-cover h-36 md:h-48 flex">
      <div className="bg-gradient-to-r from-black w-auto flex">
        <div className="text-white text-2xl p-6 flex flex-col self-center">
          <span>Fire Master Samurai</span>
          <span className="text-red-800">火の達人侍</span>
        </div>
      </div>
    </div>
  );
}
