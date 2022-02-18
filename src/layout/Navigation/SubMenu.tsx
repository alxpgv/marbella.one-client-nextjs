import React from "react";
import Link from "next/link";
import { MenuItem } from "@/layout/Navigation/NavBar";

const SubMenu = ({ items, opened }: { items: MenuItem[]; opened: boolean }) => {
  return (
    <ul
      className={`absolute min-w-[200px] bg-grey-300 text-white p-4 top-full mt-0.5 ${
        opened ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {items.map(({ url, title }, index: number) => (
        <li key={index}>
          <Link href={url}>
            <a
              className={`hover:text-red-400`}
              onClick={() => console.log("link on click")}
            >
              {title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
