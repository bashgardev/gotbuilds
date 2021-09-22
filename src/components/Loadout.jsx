import React from "react";
import Build from "./Build";
import CurrentLoadoutJSON from "./Items";
import { LoadoutContextProvider } from "../context/LoadoutContext";

export default function Loadout() {
  return (
    <LoadoutContextProvider>
      <div className="flex-1 flex-shrink-0 max-w-screen-md min-w-max">
        <Build />
      </div>
      <div className="flex-1 overflow-x-auto">
        <CurrentLoadoutJSON />
      </div>
    </LoadoutContextProvider>
  );
}
