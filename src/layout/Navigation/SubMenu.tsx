import React from "react";
import Link from "next/link";
import { MenuItem } from "@/layout/Navigation/NavBar";

const SubMenu = ({ items, opened }: { items: MenuItem[]; opened: boolean }) => {
  return (
    <ul
      className={`absolute min-w-[280px] max-w-[320px] bg-white text-base py-4 px-8 top-full mt-0.5 rounded-b-lg shadow-lg divide-y divide-grey-150 ${
        opened ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {items.map(({ url, title }, index: number) => (
        <li className="py-4 px-2 whitespace-nowrap" key={index}>
          <Link href={url}>
            <a className={`hover:text-red-400`}>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
