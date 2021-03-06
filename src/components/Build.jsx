import React from "react";
import Slot from "./Slot";

export default function Build() {
  return (
    <div>
      <Slot type="katana" />
      <Slot type="ranged" />
      <Slot type="charm" />
      <Slot type="ghost_weapon_1" />
      <Slot type="ghost_weapon_2" />
    </div>
  );
}
