import React, { ReactNode } from "react";
import cn from "classnames";
import { Icon } from "@/components/icon";
import Link from "next/link";
import styles from "./button.module.scss";

export interface ButtonType {
  as?:
    | "link"
    | "callback"
    | "online-consultation"
    | "sell-property"
    | "evaluate-property";
  href?: string;
  text?: string;
}

interface ButtonProps extends ButtonType {
  type?: "button" | "submit";
  size: "sm" | "md" | "lg";
  gutter?: "sm";
  variant?: "primary" | "secondary" | "third";
  fullWidth?: boolean;
  children?: ReactNode;
  icon?: string;
  onClick?: () => void;
  className?: string;
}

const textBtnMap = {
  link: "Read More",
  callback: "Callback",
  "online-consultation": "Online Consultation",
  "evaluate-property": "Evaluate property",
  "sell-property": "Sell property",
};

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
    className,
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
        <a className={classes} onClick={(e: any) => e.preventDefault()}>
          {children || text || textBtnMap[as]}
          <Icon name={"arrow-left"} className={styles.icon} />
        </a>
      </Link>
    );
  } else if (as && Object.keys(textBtnMap).includes(as)) {
    return (
      <button className={classes} onClick={() => console.log(textBtnMap[as])}>
        {textBtnMap[as]}
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
