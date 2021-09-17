import React, { useState } from "react";
import Slot from "./Slot";
import loadout from "../db/loadout.json";
import Hero from "./Hero";

export default function Build() {
  const build = loadout.loadout.build;
  const [currentBuild, setCurrentBuild] = useState(build);

  return (
    <div>
      <Hero />
      <Slot type="katana" value={currentBuild} changebuild={setCurrentBuild} />
      <Slot type="ranged" value={currentBuild} />
      <Slot type="charm" value={currentBuild} />
      <Slot type="ghost_weapon_1" value={currentBuild} />
      <Slot type="ghost_weapon_2" value={currentBuild} />
      {/* {JSON.stringify(currentBuild)} */}
    </div>
  );
}
