import React from "react";

type RotationDeg = {
  rotate: "rotate-90" | "-rotate-90" | "rotate-180" | "-rotate-180" | null;
};

export const IconArrow: React.FC<RotationDeg> = ({ rotate = null }) => {
  return (
    <svg
      width="7"
      height="5"
      viewBox="0 0 7 5"
      fill="none"
      stroke="#3C413F"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-[5px] ml-1 mt-1 transition-transform duration-200 ${
        rotate ? `stroke-red-400 ${rotate}` : ""
      }`}
    >
      <path d="M1 1.5L3.5 3.5L6 1.5" strokeLinecap="square" />
    </svg>
  );
};
