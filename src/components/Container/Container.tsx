import React from "react";

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
  const classes = `container ${className} ${fullHeight ? "h-100" : ""}`;
  return <div className={classes}>{children}</div>;
};
