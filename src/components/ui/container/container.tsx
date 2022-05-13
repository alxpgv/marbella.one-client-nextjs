import React from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export const Container = ({
  children,
  className = "",
  fullHeight = false,
}: ContainerProps) => {
  const classes = `${styles.container} ${className} ${
    fullHeight ? "h-100" : ""
  }`;
  return <div className={classes}>{children}</div>;
};
