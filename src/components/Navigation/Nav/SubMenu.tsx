import React from "react";
import Link from "next/link";
import { MenuItemProps } from "@/components/Navigation/Nav";

const SubMenu = ({
  items,
  opened,
}: {
  items: MenuItemProps[];
  opened: boolean;
}) => {
  return (
    <ul
      className={`absolute min-w-[280px] max-w-[320px] py-4 px-8 top-full mt-0.5 
      divide-y divide-grey-150 bg-white text-base rounded-b-lg shadow-lg
      z-10
      ${opened ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      {items.map(({ url, title }, index: number) => (
        <li className="py-4 px-2 whitespace-nowrap" key={index}>
          <Link href={url}>
            <a className="hover:text-red-400">{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
