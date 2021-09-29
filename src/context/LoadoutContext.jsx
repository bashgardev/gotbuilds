import React from "react";
import { createContext, useState } from "react";
import loadout from "../db/loadout.json";
import zlib from "zlib";
import base64url from "base64url";

export const LoadoutContext = createContext();

export const LoadoutContextProvider = ({ children }) => {
  const queryParams = new URLSearchParams(window.location.search);
  const blueprint = queryParams.get("blueprint");
  let initialState = loadout;

  if (blueprint) {
    initialState = readBlueprint(blueprint);
  }

  const [currentLoadout, setCurrentLoadout] = useState(initialState);

  function readBlueprint(data) {
    return JSON.parse(zlib.inflateSync(base64url.toBuffer(data)).toString());
  }

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
