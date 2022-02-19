import React from "react";
import { menuItems } from "@/data/menu";
import MenuItem from "@/layout/Navigation/MenuItem";

export type MenuItem = {
  title: string;
  url: string;
};

export type MenuItemsProps = {
  child?: MenuItem[];
} & MenuItem;

const NavBar = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center h-[50px] md:h-[80px] space-x-10 text-base text-grey-500">
        {menuItems.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
