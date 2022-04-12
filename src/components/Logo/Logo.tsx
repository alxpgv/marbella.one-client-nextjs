import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="flex-none w-[85px] md:w-[138px]">
      <Link href="/">
        <a>
          <img src="/images/logo.svg" className="" alt="Violet Real Estate" />
        </a>
      </Link>
    </div>
  );
};
