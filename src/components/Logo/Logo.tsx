import React from "react";
import Link from "next/link";

export const Logo = ({ className = "" }) => {
  return (
    <Link href="/">
      <a className={className}>
        <img src="/images/logo.svg" className="" alt="Violet Real Estate" />
      </a>
    </Link>
  );
};
