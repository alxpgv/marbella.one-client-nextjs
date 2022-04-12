import React from "react";
import { Logo } from "@/components/Logo/Logo";
import { MobileNav } from "@/components/Navigation/MobileNav/MobileNav";
import { Nav } from "@/components/Navigation/Nav/Nav";
import { navMenu } from "@/data/navMenu";
import { settings } from "@/data/settings";
import { clearPhone } from "@/lib/helpers";

export const Header = () => {
  return (
    <header className="relative bg-white/70 border-b-2 border-red-400 z-20">
      <div className="container flex h-nav-bar-sm md:h-nav-bar-md justify-between items-center space-x-5 transition-all duration-200">
        <Logo />
        <Nav menu={navMenu} />
        <div className="flex items-center">
          <a
            className="text-red-400 text-xl"
            href={`tel:${clearPhone(settings.phone)}`}
          >
            {settings.phone}
          </a>
          <MobileNav menu={navMenu} />
        </div>
      </div>
    </header>
  );
};
