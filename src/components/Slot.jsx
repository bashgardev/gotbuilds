import React, { useContext, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import db from "../db/db.json";
import properties from "../db/properties.json";
import items from "../db/items.json";
import "../styles/themes/dark.css";
// import Ki from "./Ki";
import SelectorPropertyButton from "./SelectorPropertyButton";
import PropertySelectPopover from "./PropertySelectPopover";
import { LoadoutContext } from "../context/LoadoutContext";
import { Listbox } from "@headlessui/react";
import SelectorButton from "./SelectorButton";

export default function Slot(props) {
  const slotType = props.type;

  const { currentLoadout, setCurrentLoadout } = useContext(LoadoutContext);

  //Determine items compatible for the currentItem, given the gear_type and the type of the currentItem
  const compatibleItems = items
    .filter((item) => item.gear_type === slotType)
    .map((item) => item);

  // Determine properties compatible with the item selected
  const compatibleProperties = properties;

  const itemInfo = items.filter(
    (item) => item.id === currentLoadout[slotType].item
  )[0];
  const title = itemInfo.title;
  const rarity = itemInfo.rarity;
  const icon = `/images/${itemInfo.id}.jpg`;
  const property_1_title =
    db.properties[currentLoadout[slotType].property_1].title;
  const property_1_values = `+ ${
    db.properties[currentLoadout[slotType].property_1].value_min
  } - ${db.properties[currentLoadout[slotType].property_1].value_max} ${
    db.properties[currentLoadout[slotType].property_1].value_type ===
    "percentage"
      ? "%"
      : "s"
  }`;
  const property_1_description =
    db.properties[currentLoadout[slotType].property_1].description;
  const property_2_title =
    db.properties[currentLoadout[slotType].property_2].title;
  const property_2_values = `+ ${
    db.properties[currentLoadout[slotType].property_2].value_min
  } - ${db.properties[currentLoadout[slotType].property_2].value_max} ${
    db.properties[currentLoadout[slotType].property_2].value_type ===
    "percentage"
      ? "%"
      : "s"
  }`;
  const property_2_description =
    db.properties[currentLoadout[slotType].property_2].description;
  const perk_1_title = db.perks[currentLoadout[slotType].perk_1].title;
  const perk_1_description =
    db.perks[currentLoadout[slotType].perk_1].description;
  let perk_2_title = "-";
  let perk_2_description = "No perk selected";
  if (currentLoadout[slotType].perk_2) {
    perk_2_title = db.perks[currentLoadout[slotType].perk_2].title;
    perk_2_description = db.perks[currentLoadout[slotType].perk_2].description;
  }

  return (
    <div id="" className=" grid md:grid-cols-2  text-lg  ">
      <div className="relative border-t-2 border-white border-opacity-30  flex-none flex self-start text-white pr-8 ">
        <div
          className={`bg-gradient-to-br from-${rarity} to-black p-0.5 shadow-md flex-none   m-2`}
        >
          <img
            className="  md:h-20 md:w-20 h-14 w-14"
            src={icon}
            onError={(e) => (e.target.src = `images/default_${slotType}.jpg`)}
            alt=""
          ></img>
        </div>
        <div className="self-center mr-4 text-xl ">
          <div className="items-center "></div>
          {title}

          <Listbox
            as="div"
            className="absolute top-0 right-0"
            value={currentLoadout[slotType].item}
            onChange={(value) =>
              setCurrentLoadout((prevState) => {
                prevState[slotType].item = value.id;
                return { ...prevState };
              })
            }
          >
            <Listbox.Button>
              <SelectorButton />
            </Listbox.Button>

            <Listbox.Options className=" absolute top-10 right-10 bg-black shadow-lg p-0.5 rounded-lg z-10 text-base">
              {compatibleItems.map((item) => (
                <Listbox.Option key={item.id} value={item}>
                  <div className="whitespace-nowrap flex justify-between bg-white m-0.5 px-2 py-1 rounded-md bg-opacity-10">
                    {item.title}
                    <div
                      className={`ml-10 uppercase text-transparent font-bold bg-clip-text bg-gradient-to-br from-${item.rarity} to-${item.rarity}-dark max-w-min}`}
                    >
                      {item.rarity}
                    </div>
                  </div>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
          <h1
            className={`uppercase text-transparent font-bold bg-clip-text bg-gradient-to-br from-${rarity} to-${rarity}-dark max-w-min`}
          >
            {rarity}
          </h1>
        </div>
      </div>

      <div className="md:border-t-2 border-white border-opacity-30 text-white bg-black bg-opacity-50 pl-4 py-2 flex justify-between">
        <div className="table w-full">
          <div className="table-row-group text-white text-opacity-80">
            <div className="table-row">
              <Tippy
                className="p-1 font-urbanist font-medium"
                placement="bottom"
                content={property_1_description}
                theme="dark"
              >
                <div className="table-cell">{property_1_title}</div>
              </Tippy>

              <div className="table-cell text-right">{property_1_values}</div>
              <div className="table-cell">
                <Listbox
                  as="div"
                  className="relative top-0 right-0"
                  value={currentLoadout[slotType].property_1}
                  onChange={(value) =>
                    setCurrentLoadout((prevState) => {
                      console.log(currentLoadout[slotType]);
                      prevState[slotType].property_1 = value.id;
                      return { ...prevState };
                    })
                  }
                >
                  <Listbox.Button>
                    <SelectorPropertyButton />
                  </Listbox.Button>

                  <Listbox.Options className=" absolute top-10 right-10 bg-black shadow-lg p-0.5 rounded-lg z-10 text-base">
                    {properties.map((property) => (
                      <Listbox.Option key={property.id} value={property}>
                        <div className="whitespace-nowrap flex justify-between bg-white m-0.5 px-2 py-1 rounded-md bg-opacity-10">
                          {property.title}
                        </div>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
            </div>

            <div className="table-row ">
              <Tippy
                className="p-1 font-urbanist font-medium"
                placement="bottom"
                content={property_2_description}
                theme="dark"
              >
                <div className="table-cell">{property_2_title}</div>
              </Tippy>

              <div className="table-cell text-right whitespace-nowrap">
                {property_2_values}
              </div>
              <div className="table-cell">
                <Listbox
                  as="div"
                  className="relative top-0 right-0"
                  value={currentLoadout[slotType].property_2}
                  onChange={(value) =>
                    setCurrentLoadout((prevState) => {
                      console.log(currentLoadout[slotType]);
                      prevState[slotType].property_2 = value.id;
                      return { ...prevState };
                    })
                  }
                >
                  <Listbox.Button>
                    <SelectorPropertyButton />
                  </Listbox.Button>

                  <Listbox.Options className=" absolute top-10 right-10 bg-black shadow-lg p-0.5 rounded-lg z-10 text-base">
                    {properties.map((property) => (
                      <Listbox.Option key={property.id} value={property}>
                        <div className="whitespace-nowrap flex justify-between bg-white m-0.5 px-2 py-1 rounded-md bg-opacity-10">
                          {property.title}
                        </div>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
            </div>

            <div className="table-row ">
              <div className="table-cell text-red-600 text-xl whitespace-nowrap">
                <Tippy
                  className="p-1 font-urbanist font-medium"
                  placement="bottom"
                  content={perk_1_description}
                  theme="dark"
                >
                  <span>{perk_1_title}</span>
                </Tippy>

                {/* <Listbox
                  as="div"
                  className="relative top-0 right-0"
                  value={currentLoadout[slotType].property_2}
                  onChange={(value) =>
                    setCurrentLoadout((prevState) => {
                      console.log(currentLoadout[slotType]);
                      prevState[slotType].property_2 = value.id;
                      return { ...prevState };
                    })
                  }
                >
                  <Listbox.Button>
                    <SelectorPropertyButton />
                  </Listbox.Button>

                  <Listbox.Options className=" absolute top-10 right-10 bg-black shadow-lg p-0.5 rounded-lg z-10 text-base">
                    {properties.map((property) => (
                      <Listbox.Option key={property.id} value={property}>
                        <div className="whitespace-nowrap flex justify-between bg-white m-0.5 px-2 py-1 rounded-md bg-opacity-10">
                          {property.title}
                        </div>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox> */}
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell text-red-600 text-xl">
                <Tippy
                  className="p-1 font-urbanist font-medium"
                  placement="bottom"
                  content={perk_2_description}
                  theme="dark"
                >
                  <span>{perk_2_title}</span>
                </Tippy>
                <SelectorPropertyButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
