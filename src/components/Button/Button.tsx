import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  size: "sm" | "md";
  variant: "primary";
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  children,
}): JSX.Element => {
  return (
    <button
      type="button"
      className={cn(
        styles.btn,
        styles[`btn-${variant}`],
        styles[`btn-${size}`]
      )}
    >
      {children}
    </button>
  );
};
