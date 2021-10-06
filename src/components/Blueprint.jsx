import React, { useContext } from "react";
import { LoadoutContext } from "../context/LoadoutContext";

export default function Blueprint() {
  const { blueprint } = useContext(LoadoutContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    // setBlueprint(e.target.value);
  };
  return (
    <div className="w-full p-2 text-white">
      <form onSubmit={handleSubmit}>
        {" "}
        <label>
          Blueprint
          <textarea
            className="w-full mt-2 text-xs break-all p-2 bg-black bg-opacity-50 rounded-md text-opacity-50 text-white"
            type="text"
            value={blueprint}
            onChange={handleChange}
            readOnly={true}
            rows={5}
          />{" "}
        </label>
      </form>
    </div>
  );
}
