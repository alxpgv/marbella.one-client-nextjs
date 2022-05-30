import { FC } from "react";
import cn from "clsx";
import styles from "./spinner.module.scss";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ size = "md", className }) => {
  return (
    <div className={cn(styles.spinner, className, styles[size])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
