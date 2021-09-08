import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import db from "./db/db.json";
import "./styles/themes/dark.css";

export default function Slot(props) {
  let slot = db.loadout[props.type];
  let item = {};

  item.property_1 = slot.property_1;

  item.property_1.value_type =
    db.properties[item.property_1.property].value_type;

  item.property_1.title = db.properties[slot.property_1.property].title;

  item.property_1.description =
    db.properties[slot.property_1.property].description;

  item.property_2 = slot.property_2;

  item.property_2.value_type =
    db.properties[item.property_2.property].value_type;

  item.property_2.title = db.properties[slot.property_2.property].title;

  item.property_2.description =
    db.properties[slot.property_2.property].description;

  item.perk_1 = db.perks[slot.perk_1];

  if (slot.perk_2) {
    item.perk_2 = db.perks[slot.perk_2];
  } else {
    item.perk_2 = "";
  }

  if (props.type === "katana_slot") {
    item.title = db.katanas[slot.katana].name;
    item.rarity = db.katanas[slot.katana].rarity;
    item.icon = `/images/${slot.katana}.jpg`;
  } else if (props.type === "ranged_slot") {
    item.title = db.ranged_weapons[slot.ranged_weapon].name;
    item.rarity = db.ranged_weapons[slot.ranged_weapon].rarity;
    item.icon = `/images/${slot.ranged_weapon}.jpg`;
  } else if (props.type === "charm_slot") {
    item.title = db.charms[slot.charm].name;
    item.rarity = db.charms[slot.charm].rarity;
    item.icon = `/images/${slot.charm}.jpg`;
  } else if (props.type === "ghost_weapon_1_slot") {
    item.title = db.ghost_weapons_1[slot.ghost_weapon_1].name;
    item.rarity = db.ghost_weapons_1[slot.ghost_weapon_1].rarity;
    item.icon = `/images/${slot.ghost_weapons_1}.jpg`;
  } else if (props.type === "ghost_weapon_2_slot") {
    item.title = db.ghost_weapons_2[slot.ghost_weapon_2].name;
    item.rarity = db.ghost_weapons_2[slot.ghost_weapon_2].rarity;
    item.icon = `/images/${slot.ghost_weapons_2}.jpg`;
  }

  // item rarity styling
  let rarity_className = "text-yellow-600 uppercase";
  if (item.rarity === "epic") {
    rarity_className = "text-purple-600 uppercase";
  }

  return (
    <div
      id="slot"
      className="border-t-2 max-w-screen-lg border-opacity-75 grid md:grid-cols-2 text-lg"
    >
      <div className="flex text-white bg-black bg-opacity-50">
        <div className="flex-none self-center m-2">
          <img
            className="shadow-md md:h-28 md:w-28 h-20 w-20 "
            src={item.icon}
            alt=""
          ></img>
          <div className="bg-black bg-opacity-60 text-xl justify-between flex py-1 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 self-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            110
          </div>
        </div>
        <div className="self-center mr-4 text-2xl">
          <h1 className="">{item.title}</h1>
          <h1 className={rarity_className}>{item.rarity}</h1>
        </div>
      </div>
      <div className="text-white bg-black bg-opacity-75 p-4 flex justify-between">
        <div className="table w-full">
          <div className="table-row-group text-white text-opacity-80">
            <div className="table-row">
              <div className="table-cell">{item.property_1.title}</div>
              <div className="table-cell text-right">
                {`+ ${item.property_1.value}${
                  item.property_1.value_type === "percentage" ? "%" : "s"
                }`}
              </div>
            </div>
            {/* <div className="table-row text-sm text-white text-opacity-60">
              {item.property_1.description}
            </div> */}
            <div className="table-row ">
              <div className="table-cell">{item.property_2.title}</div>
              <div className="table-cell text-right whitespace-nowrap">
                {`+ ${item.property_2.value}${
                  item.property_2.value_type === "percentage" ? "%" : "s"
                }`}
              </div>
            </div>
            {/* <div className="table-row text-sm text-white text-opacity-60">
              {item.property_2.description}
            </div> */}
            <div className="table-row ">
              <div className="table-cell text-red-600 text-2xl">
                <Tippy
                  className="p-1 font-urbanist font-medium"
                  placement="bottom"
                  content={item.perk_1.description}
                  theme="dark"
                >
                  <span>{item.perk_1.title}</span>
                </Tippy>
              </div>
            </div>
            {/* <div className="table-row text-sm text-white text-opacity-60">
              {item.perk_1.description}
            </div> */}
            <div className="table-row">
              <div className="table-cell text-red-600 text-2xl">
                <Tippy
                  className="p-1 font-urbanist font-medium"
                  placement="bottom"
                  content={item.perk_2.description}
                  theme="dark"
                >
                  <span>{item.perk_2.title}</span>
                </Tippy>
              </div>
            </div>
            {/* {item.perk_2 ? (
              <div className="table-row text-sm text-white text-opacity-60">
                {item.perk_2.description}
              </div>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
