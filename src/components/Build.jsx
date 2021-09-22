import React, { useContext } from "react";
import Slot from "./Slot";
import Hero from "./Hero";
import { LoadoutContext } from "../context/LoadoutContext";

export default function Build() {
  const { currentLoadout } = useContext(LoadoutContext);

  return (
    <div className="background-pattern-2">
      <Hero />
      <Slot type="katana" value={currentLoadout.build} />
      <Slot type="ranged" value={currentLoadout.build} />
      <Slot type="charm" value={currentLoadout.build} />
      <Slot type="ghost_weapon_1" value={currentLoadout.build} />
      <Slot type="ghost_weapon_2" value={currentLoadout.build} />
    </div>
  );
}
