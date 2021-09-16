import React from "react";

function Ki(props) {
  return (
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
      {props.value}
    </div>
  );
}

export default Ki;
