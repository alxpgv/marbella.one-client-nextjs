import React, { FC } from "react";
import Logo from "@/components/Logo";
import NavBar from "@/layout/Navigation/NavBar";

const Header: FC = (): JSX.Element => {
  return (
    <header className="border-b-2 border-red-400">
      <div className="container flex h-[80px] justify-between items-center space-x-4">
        <Logo />
        <NavBar />
        <div className="border">Contact</div>
      </div>
    </header>
  );
};

export default Header;
