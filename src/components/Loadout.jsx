import React from "react";
import Build from "./Build";
import CurrentLoadoutJSON from "./CurrentLoadoutJSON";

import Hero from "./Hero";

export default function Loadout() {
  return (
    <>
      <div className="flex-1 flex-shrink-0 max-w-screen-md shadow-2xl md:border-2 md:border-black md:border-opacity-10 md:rounded-2xl md:overflow-hidden">
        <Hero />
        <Build />
      </div>
      <div className="flex-1 overflow-x-auto">
        <CurrentLoadoutJSON />
      </div>
    </>
  );
}
