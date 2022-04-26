import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  size: "sm" | "md" | "lg";
  gutter?: "sm";
  variant: "primary";
  fullWidth?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  gutter,
  variant,
  fullWidth = false,
  children,
  icon,
}): JSX.Element => {
  return (
    <button
      type="button"
      className={cn(
        styles.btn,
        styles[`btn-${variant}`],
        styles[`btn-${size}`],
        styles[`btn-gutter-${gutter}`],
        fullWidth && styles[`btn-full-width`]
      )}
    >
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};
