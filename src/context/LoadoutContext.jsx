import React from "react";
import { createContext, useState, useEffect } from "react";
import loadout from "../db/loadout.json";
import zlib from "zlib";
import base64url from "base64url";

export const LoadoutContext = createContext();

export const LoadoutContextProvider = ({ children }) => {
  let initialState = loadout;

  const queryParams = new URLSearchParams(window.location.search);
  const blueprintUrl = queryParams.get("blueprint");

  if (blueprintUrl) {
    initialState = readBlueprint(blueprintUrl);
  }

  const [blueprint, setBlueprint] = useState(makeBlueprint(initialState));
  const [currentLoadout, setCurrentLoadout] = useState(initialState);

  function makeBlueprint(data) {
    return base64url.encode(
      zlib.deflateSync(JSON.stringify(data), { level: 9 })
    );
  }

  function readBlueprint(data) {
    return JSON.parse(zlib.inflateSync(base64url.toBuffer(data)).toString());
  }

  useEffect(() => {
    setBlueprint(makeBlueprint(currentLoadout));
  }, [currentLoadout]);

  return (
    <LoadoutContext.Provider
      value={{
        currentLoadout,
        setCurrentLoadout,
        blueprint,
        setBlueprint,
        readBlueprint,
        makeBlueprint,
      }}
    >
      {children}
      {/* {console.log(currentLoadout)} */}
    </LoadoutContext.Provider>
  );
};
