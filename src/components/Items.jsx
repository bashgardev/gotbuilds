import React, { useContext } from "react";
import { LoadoutContext } from "../context/LoadoutContext";

export default function CurrentLoadoutJSON() {
  const { currentLoadout } = useContext(LoadoutContext);
  return (
    <div className="text-white">
      <div>
        <pre>{JSON.stringify(currentLoadout, null, 2)}</pre>
      </div>
    </div>
  );
}
