import React, { useEffect } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import db from "../db/db.json";
import items from "../db/items.json";
import "../styles/themes/dark.css";
// import Ki from "./Ki";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

export default function Slot(props) {
  const [slot, setSlot] = useState(props.value[props.type]);

  // Determine items compatible for the slot, given the gear_type and the type of the slot
  const compatibleItems = items
    .filter((item) => item.gear_type === props.type)
    .map((item) => item);
  const initialState = compatibleItems.filter(
    (item) => item.rarity !== "legendary"
  );
  const [selected, setSelected] = useState(initialState[0]);

  // Determine properties compatible with the item selected
  // const compatibleProperties =

  let rarity = selected.rarity;
  let icon = `/images/${selected.id}.jpg`;

  // item rarity styling
  let rarity_className = "text-yellow-600 uppercase";
  if (rarity === "epic") {
    rarity_className = "text-purple-600 uppercase";
  }

  useEffect(() => {
    setSlot((prevSlot) => {
      return {
        ...prevSlot,
        item: selected.id,
      };
    });
  }, [selected]);
  // console.log(selectedItem.item);
  return (
    <div
      id="slot"
      className="border-t-2 max-w-screen-lg border-opacity-75 grid md:grid-cols-2 text-lg"
    >
      <div className="flex text-white bg-black bg-opacity-50">
        <div className="flex-none self-center m-2">
          <img
            className="shadow-md md:h-24 md:w-24 h-20 w-20 "
            src={icon}
            alt=""
          ></img>
          {/* <Ki value="110" /> */}
        </div>
        <div className="self-center mr-4 text-2xl">
          <Listbox value={selected} onChange={setSelected}>
            <Listbox.Button>{selected.title}</Listbox.Button>
            <Listbox.Options>
              <div className="bg-black rounded-md px-4 py-2 text-base absolute">
                {compatibleItems.map((item) => (
                  <Listbox.Option key={item.id} value={item}>
                    {item.title}
                  </Listbox.Option>
                ))}
              </div>
            </Listbox.Options>
          </Listbox>
          <h1 className={rarity_className}>{rarity}</h1>
        </div>
      </div>
      <div className="text-white bg-black bg-opacity-75 p-4 flex justify-between">
        <div className="table w-full">
          <div className="table-row-group text-white text-opacity-80">
            <div className="table-row">
              <div className="table-cell">
                {db.properties[slot.property_1].title}
              </div>
              <div className="table-cell text-right">
                {`+ ${db.properties[slot.property_1].value_min} - ${
                  db.properties[slot.property_1].value_max
                } ${
                  db.properties[slot.property_1].value_type === "percentage"
                    ? "%"
                    : "s"
                }`}
              </div>
            </div>

            <div className="table-row ">
              <div className="table-cell">
                {db.properties[slot.property_2].title}
              </div>
              <div className="table-cell text-right whitespace-nowrap">
                {`+ ${db.properties[slot.property_2].value_min} - ${
                  db.properties[slot.property_2].value_max
                } ${
                  db.properties[slot.property_2].value_type === "percentage"
                    ? "%"
                    : "s"
                }`}
              </div>
            </div>

            <div className="table-row ">
              <div className="table-cell text-red-600 text-xl">
                <Tippy
                  className="p-1 font-urbanist font-medium"
                  placement="bottom"
                  content={db.perks[slot.perk_1].description}
                  theme="dark"
                >
                  <span>{db.perks[slot.perk_1].title}</span>
                </Tippy>
              </div>
            </div>

            {slot.perk_2 ? (
              <div className="table-row">
                <div className="table-cell text-red-600 text-xl">
                  <Tippy
                    className="p-1 font-urbanist font-medium"
                    placement="bottom"
                    content={db.perks[slot.perk_2].description}
                    theme="dark"
                  >
                    <span>{db.perks[slot.perk_2].title}</span>
                  </Tippy>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
