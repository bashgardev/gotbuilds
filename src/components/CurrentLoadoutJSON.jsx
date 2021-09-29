import React, { useContext, useEffect, useState } from "react";
import { LoadoutContext } from "../context/LoadoutContext";
import zlib from "zlib";
import base64url from "base64url";

export default function CurrentLoadoutJSON() {
  const { currentLoadout } = useContext(LoadoutContext);

  const [blueprintString, setBlueprintString] = useState(
    makeBlueprint(JSON.stringify(currentLoadout))
  );

  function makeBlueprint(data) {
    return base64url.encode(zlib.deflateSync(data, { level: 9 }));
  }

  useEffect(() => {
    setBlueprintString(makeBlueprint(JSON.stringify(currentLoadout)));
  }, [currentLoadout]);

  return (
    <div className="text-white text-sm flex-wrap pl-4">
      <pre className="font-urbanist">
        {JSON.stringify(currentLoadout, null, 2)}
      </pre>
      <div className="flex flex-col">
        <span>Loadout Blueprint String:</span>
        <span className="break-all">{blueprintString}</span>
      </div>
    </div>
  );
}
