import React from "react";

export default function TechniqueInfoMd({ title, description }) {
  return (
    <div className="col-span-2 hidden md:block">
      <span className="uppercase text-gold font-semibold">{title}</span>
      {` - ${description}`}
    </div>
  );
}
