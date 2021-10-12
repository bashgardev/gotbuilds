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
    <div className="relative text-white md:p-4 p-2 pt-4 flex flex-col self-center bg-primary-medium ">
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
          <button className="absolute flex top-0 right-0 m-4 uppercase bg-primary-light py-2 pl-4 pr-2 rounded-lg ">
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
      <form className="flex flex-col text-text-white">
        <input
          type="text"
          value={currentLoadout.name}
          className="text-lg md:text-2xl bg-primary-medium-shaded border-2 border-opacity-10 rounded-lg py-1 px-2 md:w-1/2 w-2/3"
          onChange={handleNameChange}
        />

        <label className="mt-2 mb-1">Author: </label>
        <input
          type="text"
          className="bg-primary-medium-shaded border-2 border-opacity-10 rounded-lg py-1 px-2 w-1/2 "
          value={currentLoadout.author}
          onChange={handleAuthorChange}
        />
        <label className="mt-2 mb-1 text-opacity-80">Description: </label>
        <textarea
          className=" bg-primary-medium-shaded border-2 border-opacity-10 rounded-lg py-1 px-2 "
          value={currentLoadout.description}
          maxLength="256"
          onChange={handleDescriptionChange}
          rows="3"
        />
      </form>
    </div>
  );
}
