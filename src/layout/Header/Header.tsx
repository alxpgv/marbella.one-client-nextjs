import React from "react";
import Logo from "@/components/Logo/Logo";
import MobileNav from "@/components/Navigation/MobileNav/MobileNav";
import Nav from "@/components/Navigation/Nav/Nav";
import { navMenu } from "@/constants/menu";
import { settings } from "@/constants/settings";
import { clearPhone } from "@/lib/helpers";

const Header = () => {
  return (
    <header className="border-b-2 border-red-400">
      <div className="container flex h-[50px] md:h-[80px] justify-between items-center space-x-5 transition-all duration-200">
        <Logo />
        <Nav menu={navMenu} />
        <div className="flex items-center">
          <a href={`tel:${clearPhone(settings.phone)}`}>{settings.phone}</a>
          <MobileNav menu={navMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
