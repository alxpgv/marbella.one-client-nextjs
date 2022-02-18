import React from "react";
import MenuItem from "@/layout/Navigation/MenuItem";

export type MenuItem = {
  title: string;
  url: string;
};

export type MenuItemsProps = {
  child?: MenuItem[];
} & MenuItem;

const menuItems: MenuItemsProps[] = [
  { title: "About me", url: "/about" },
  { title: "Our services", url: "/services" },
  { title: "Real Estate", url: "/realestate" },
  {
    title: "Owners",
    url: "/owners",
    child: [
      {
        title: "Sell luxury real estate",
        url: "#",
      },
      {
        title: "Real estate price",
        url: "#",
      },
      {
        title: "We guarantee",
        url: "#",
      },
    ],
  },
  { title: "Blog", url: "/blog" },
  { title: "Contacts", url: "/contact" },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="border flex items-center space-x-10 h-[80px] text-base text-grey-500">
        {menuItems.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
