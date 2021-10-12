import React, { useContext, useState } from "react";
import { LoadoutContext } from "../context/LoadoutContext";

export default function Blueprint() {
  const { blueprint } = useContext(LoadoutContext);

  const [notification, setNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification(true);
    setTimeout(setNotification(false), 3000);
  };

  return (
    <div className="relative w-full p-2 text-white bg-primary-medium-shaded border-t-2 border-white border-opacity-30">
      {notification && (
        <div className="absolute text-white bg-green-700 p-6">
          Blueprint String Copied!
        </div>
      )}
      <form>
        {" "}
        <label>Blueprint</label>
        <textarea
          className="w-full mt-2 text-xs break-all p-2 rounded-md text-opacity-50 text-white bg-primary-medium"
          type="text"
          value={blueprint}
          readOnly={true}
          rows={5}
        />{" "}
      </form>
      <div className="mt-2 text-center">
        <button onClick={handleSubmit}>
          <div className="bg-primary-light py-3 px-8 rounded-xl">
            Save and Copy
          </div>
        </button>
      </div>
    </div>
  );
}
