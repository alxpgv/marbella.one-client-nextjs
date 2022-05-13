import React, { FC } from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  color?: "primary" | "secondary";
}

export const Logo: FC<LogoProps> = ({ className = "", color = "primary" }) => {
  return (
    <Link href="/">
      <a className={className}>
        {color === "primary" ? (
          <img
            src="/images/logo.svg"
            width="138"
            height="47"
            alt="Violet Real Estate"
          />
        ) : (
          <img
            src="/images/logo-secondary.svg"
            width="138"
            height="47"
            alt="Violet Real Estate"
          />
        )}
      </a>
    </Link>
  );
};
