import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconArrow } from "@/components/Icons/IconArrow";
import { SubMenu } from "@/components/Navigation/MobileNav/SubMenu";
import { MenuItemsProps } from "@/components/Navigation/Nav";

export const MenuItem = ({ item }: { item: MenuItemsProps }) => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const router = useRouter();
  const { title, url, child } = item;

  const activeItem = (targetUrl: string) => {
    return targetUrl === router.pathname || openSubMenu ? "text-red-400" : "";
  };

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSubMenu((prev) => !prev);
  };

  if (child?.length) {
    return (
      <li className={`p-4 ${openSubMenu ? "bg-grey-100" : ""}`}>
        <Link href={url}>
          <a
            className={`flex items-center justify-between ${activeItem(url)}`}
            onClick={toggleSubMenu}
          >
            {title}
            <IconArrow rotate={openSubMenu ? "rotate-180" : null} />
          </a>
        </Link>
        <SubMenu items={child} opened={openSubMenu} />
      </li>
    );
  } else {
    return (
      <li className="p-4">
        <Link href={url}>
          <a className={activeItem(url)}>{title}</a>
        </Link>
      </li>
    );
  }
};
