import React, { ReactNode } from "react";
import cn from "classnames";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";
import styles from "./button.module.scss";

export interface ButtonAsType {
  as?: "link" | "modal";
}

interface ButtonProps extends ButtonAsType {
  type?: "button" | "submit";
  size: "sm" | "md" | "lg";
  gutter?: "sm";
  variant?: "primary" | "secondary" | "third" | "four";
  fullWidth?: boolean;
  children?: ReactNode;
  icon?: string;
  onClick?: () => void;
  href?: string;
  text?: string;
  className?: string;
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
  text,
  onClick,
  className,
}): JSX.Element => {
  const classes = cn(
    styles.btn,
    styles[variant],
    styles[size],
    styles[`gutter-${gutter}`],
    { [styles.fullWidth]: fullWidth },
    className
  );

  const ButtonIcon = () =>
    icon ? <Icon name={icon} className={styles.icon} /> : null;

  // link
  if (as && as === "link" && href) {
    return (
      <Link href={href}>
        <a className={classes}>
          {children || text || "Read more"}
          <Icon name={"arrow-left"} className={styles.icon} />
        </a>
      </Link>
    );
  } else if (as && as === "modal") {
    return (
      <button className={classes} onClick={() => console.log("modal")}>
        {children || text}
        <ButtonIcon />
      </button>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
      <ButtonIcon />
    </button>
  );
};
