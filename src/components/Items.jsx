import React from "react";
import items from "../db/items.json";

export default function Items() {
  const itemlist = items;
  return (
    <div className="text-white">
      {itemlist.map((item) => (
        <div
          key={item.id}
        >{`id: ${item.id} title: ${item.title} function: ${item.function}`}</div>
      ))}
    </div>
  );
}
