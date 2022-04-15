import React from "react";
import styles from "./Section.module.scss";
import cn from "classnames";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className = "" }: SectionProps) => {
  return <div className={cn(className, styles.section)}>{children}</div>;
};
