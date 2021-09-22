import React from "react";
import { Listbox, Popover } from "@headlessui/react";
import SelectorPropertyButton from "./SelectorPropertyButton";
import { LoadoutContext } from "../context/LoadoutContext";
import { useContext } from "react";

export default function PropertySelectPopover(props) {
  const items = props.data;

  const { currentLoadout, setCurrentLoadout } = useContext(LoadoutContext);
  // console.log(items);
  return (
    <Popover className="relative">
      <Popover.Button>
        <SelectorPropertyButton />
      </Popover.Button>

      <Popover.Panel className="absolute top-10 right-10 bg-black shadow-lg p-0.5 rounded-lg z-10 text-base">
        <div className="grid">
          {items.map((property) => (
            <ul
              onClick={""}
              className="whitespace-nowrap flex justify-between bg-white m-0.5 px-2 py-1 rounded-md bg-opacity-10"
            >
              {property.title}
              <div className="ml-4">{`+ ${property.value_min} - ${
                property.value_max
              } ${
                property.value_type === "percentage"
                  ? "%"
                  : property.value_type === "time"
                  ? "s"
                  : ""
              }`}</div>
            </ul>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
}
