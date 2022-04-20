import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  size: "lg" | "md" | "sm";
  variant: "primary";
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  children,
  icon,
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
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};
