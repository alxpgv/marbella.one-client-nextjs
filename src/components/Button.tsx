import React from "react";

const sizes = {
  sm: "px-6 py-2 rounded-md text-sm",
  md: "px-12 py-4 rounded-lg text-sm font-bold",
  lg: "px-12 py-5 rounded-xl text-sm font-bold",
};

const colors = {
  red: "bg-red-400 text-white",
};

type ButtonProps = {
  size: "sm" | "md" | "lg";
  color: "red";
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  size,
  color,
  children,
}): JSX.Element => {
  const sizesClasses = sizes[size];
  const colorClasses = colors[color];
  return (
    <button type="button" className={`${sizesClasses} ${colorClasses}`}>
      {children}
    </button>
  );
};
export default Button;
