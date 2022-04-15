import React from "react";
import cn from "classnames";
import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className = "" }: SectionProps) => {
  return <div className={cn(className, styles.section)}>{children}</div>;
};
