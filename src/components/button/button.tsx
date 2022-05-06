import React from "react";
import cn from "classnames";
import styles from "./button.module.scss";
import { Icon } from "@/components/icon";

interface ButtonProps {
  size: "sm" | "md" | "lg";
  gutter?: "sm";
  variant: "primary";
  fullWidth?: boolean;
  children?: React.ReactNode;
  icon?: string;
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
      {icon && icon === "arrow" && (
        <span className={styles.iconWrapper}>
          <Icon name={"arrow"} className={cn(styles.icon, styles.iconArrow)} />
        </span>
      )}
    </button>
  );
};
