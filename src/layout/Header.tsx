import React from "react";
import Logo from "@/components/Logo";
import MobileNav from "@/layout/Navigation/MobileNav";
import NavBar from "@/layout/Navigation/NavBar";

const Header = () => {
  return (
    <header className="border-b-2 border-red-400">
      <div className="container flex h-[50px] md:h-[80px] justify-between items-center space-x-5 transition-all duration-200">
        <Logo />
        <NavBar />
        <div className="flex items-center">
          <a className="text-red-400" href="tel:+34608281712">
            + 34 608 281 712
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
