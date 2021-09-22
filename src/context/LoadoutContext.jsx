import React from "react";
import { createContext, useState } from "react";
import loadout from "../db/loadout.json";

export const LoadoutContext = createContext();

export const LoadoutContextProvider = ({ children }) => {
  const [currentLoadout, setCurrentLoadout] = useState(loadout);

  return (
    <LoadoutContext.Provider
      value={{
        currentLoadout,
        setCurrentLoadout,
      }}
    >
      {children}
    </LoadoutContext.Provider>
  );
};
