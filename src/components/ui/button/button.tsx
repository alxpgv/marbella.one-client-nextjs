import React, { FC } from "react";
import cn from "clsx";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";
import { MODAL_VIEWS, useUI } from "@/lib/contexts/ui-context";
import styles from "./button.module.scss";

export interface ButtonBase {
  as?: "link" | "modal";
  modalView?: MODAL_VIEWS;
  text?: string;
}

interface ButtonProps extends ButtonBase {
  type?: "button" | "submit";
  size: "sm" | "md" | "lg";
  gutter?: "sm";
  variant?: "primary" | "secondary" | "third" | "four";
  fullWidth?: boolean;
  icon?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  type = "button",
  size,
  gutter,
  variant = "primary",
  fullWidth = false,
  children,
  icon,
  as,
  modalView,
  href,
  text,
  onClick,
  className,
}): JSX.Element => {
  const { openModal, setModalView } = useUI();

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
    // TODO: derive modal logic
  } else if (as && as === "modal" && modalView) {
    return (
      <button
        className={classes}
        onClick={() => {
          setModalView(modalView);
          openModal();
        }}
      >
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
