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
      className={`flex-col justify-center mt-3 divide-y divide-grey-150 ${
        opened ? "flex" : "hidden"
      }`}
    >
      {items.map(({ url, title }, index: number) => (
        <li className="py-2" key={index}>
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
