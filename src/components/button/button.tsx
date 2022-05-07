import React, { ReactNode } from "react";
import cn from "classnames";
import styles from "./button.module.scss";
import { Icon } from "@/components/icon";
import { useRouter } from "next/router";

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
  const router = useRouter();

  //TODO: change router.push to Link component for seo
  const handleClick = () => {
    if (as && as === "link" && href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={cn(
        styles.btn,
        styles[`btn-${variant}`],
        styles[`btn-${size}`],
        styles[`btn-gutter-${gutter}`],
        fullWidth && styles[`btn-full-width`]
      )}
      onClick={handleClick}
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
