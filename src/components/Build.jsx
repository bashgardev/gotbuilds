import React from "react";
import Slot from "./Slot";
import db from "../db/db.json";

export default function Build() {
  const build = db.loadout;
  return (
    <div>
      <Slot type="katana" value={build.katana} />
      <Slot type="ranged" value={build.ranged} />
      <Slot type="charm" value={build.charm} />
      <Slot type="ghost_weapon_1" value={build.ghost_weapon_1} />
      <Slot type="ghost_weapon_2" value={build.ghost_weapon_2} />
    </div>
  );
}
