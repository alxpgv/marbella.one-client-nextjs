import React from "react";
import { MenuItem } from "./MenuItem";

export type MenuItemProps = {
  title: string;
  url: string;
};

export type MenuItemsProps = MenuItemProps & {
  child?: MenuItemProps[];
};

export const Nav = ({ menu }: { menu: MenuItemsProps[] }) => {
  return (
    <nav className="hidden lg:block" role="navigation">
      <ul className="flex items-center h-[50px] md:h-[80px] space-x-10 text-base text-grey-500">
        {menu.length &&
          menu.map((item, index) => <MenuItem item={item} key={index} />)}
      </ul>
    </nav>
  );
};