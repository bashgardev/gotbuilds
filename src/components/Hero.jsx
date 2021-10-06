import { Listbox } from "@headlessui/react";
import React, { useContext } from "react";
import { LoadoutContext } from "../context/LoadoutContext";

export default function Hero() {
  const { currentLoadout, setCurrentLoadout } = useContext(LoadoutContext);
  const classes = ["samurai", "hunter", "ronin", "assasin"];

  const handleAuthorChange = (e) =>
    setCurrentLoadout((prevState) => {
      prevState.author = e.target.value;
      return { ...prevState };
    });

  const handleNameChange = (e) =>
    setCurrentLoadout((prevState) => {
      prevState.name = e.target.value;
      return { ...prevState };
    });

  const handleDescriptionChange = (e) =>
    setCurrentLoadout((prevState) => {
      prevState.description = e.target.value;
      return { ...prevState };
    });

  // const handleDescriptionChange = (e) => console.log(e);
  return (
    <div className="bg-gradient-to-r from-black">
      <div className="relative text-white md:p-4 p-2 pt-4 flex flex-col self-center  ">
        <Listbox
          value={currentLoadout.class}
          onChange={(value) =>
            setCurrentLoadout((prevState) => {
              prevState.class = value;
              return { ...prevState };
            })
          }
        >
          <Listbox.Button>
            <button className="absolute flex top-0 right-0 m-4 uppercase bg-black py-2 pl-4 pr-2 rounded-lg ">
              {currentLoadout.class}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mt-1 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Listbox.Button>
          <Listbox.Options className="absolute flex flex-col gap-0.5 z-10 top-16 left-0 w-full bg-black shadow-lg p-1 text-base">
            {classes.map((item) => (
              <Listbox.Option
                as="button"
                className=" bg-white bg-opacity-10 w-full py-2 justify-center uppercase rounded-md"
                key={item}
                value={item}
              >
                {item}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <form className="flex flex-col">
          <input
            type="text"
            value={currentLoadout.name}
            className="text-lg md:text-2xl bg-black bg-opacity-25 border-2 border-opacity-10 rounded-md p-1 md:w-1/2 w-2/3"
            onChange={handleNameChange}
          />

          <span className="text-red-800 mt-2 mb-1">Author: </span>
          <input
            type="text"
            className="bg-black bg-opacity-25 border-2 border-opacity-10 rounded-md p-1 w-1/2 text-red-800"
            value={currentLoadout.author}
            onChange={handleAuthorChange}
          />
          <span className="mt-2 mb-1 text-white text-opacity-80">
            Description:{" "}
          </span>
          <textarea
            className="text-white text-opacity-75 bg-black bg-opacity-25 border-2 border-opacity-10 rounded-md p-1 "
            value={currentLoadout.description}
            maxLength="256"
            onChange={handleDescriptionChange}
            rows="3"
          />
        </form>
      </div>
    </div>
  );
}
