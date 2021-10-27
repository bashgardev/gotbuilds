import React from "react";

export default function SelectorButton() {
  return (
    <div className="m-2 p-2 md:p-1 hover:bg-primary-light hover:bg-opacity-30 bg-primary-medium-shaded rounded-full 0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}
