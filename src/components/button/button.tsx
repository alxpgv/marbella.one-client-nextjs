import React, { ReactNode } from "react";
import cn from "classnames";
import { Icon } from "@/components/icon";
import Link from "next/link";
import styles from "./button.module.scss";

export interface ButtonType {
  as?: "link" | "callback";
  href?: string;
}

interface ButtonProps extends ButtonType {
  type?: "button" | "submit";
  size: "sm" | "md" | "lg";
  gutter?: "sm";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  children?: ReactNode;
  icon?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  size,
  gutter,
  variant = "primary",
  fullWidth = false,
  children,
  icon,
  as,
  href,
  onClick,
}): JSX.Element => {
  const classes = cn(
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${size}`],
    styles[`btn-gutter-${gutter}`],
    fullWidth && styles[`btn-full-width`]
  );

  const ButtonIcon = () =>
    icon ? <Icon name={icon} className={styles.icon} /> : null;

  // link
  if (as && as === "link" && href) {
    return (
      <Link href={href}>
        <a className={classes}>
          {children}
          <ButtonIcon />
        </a>
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
      <ButtonIcon />
    </button>
  );
};
