import React from "react";
import cn from "classnames";
import styles from "./section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className = "" }: SectionProps) => {
  return <div className={cn(className, styles.section)}>{children}</div>;
};
