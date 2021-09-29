import React, { useContext } from "react";
import { LoadoutContext } from "../context/LoadoutContext";

export default function Hero() {
  const { currentLoadout } = useContext(LoadoutContext);
  return (
    <div className="bg-gradient-to-r from-black">
      <div className="text-white  p-6 flex flex-col self-center ">
        <span className="text-2xl">{currentLoadout.name}</span>
        <span className="text-red-800 ">Author: {currentLoadout.author}</span>
        <div className="text-white text-opacity-75">
          {`Description: ${currentLoadout.description}`}
        </div>
      </div>
    </div>
  );
}
