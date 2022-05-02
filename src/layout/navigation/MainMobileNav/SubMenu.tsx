import React, { FC } from "react";
import Link from "next/link";
import type { MenuProps } from "@/types";
import cn from "classnames";
import styles from "./MainMobileNav.module.scss";

interface SubMenuProps {
  items: MenuProps[];
  isOpen: boolean;
}

export const SubMenu: FC<SubMenuProps> = ({ items, isOpen }) => {
  return (
    <ul className={cn(styles.subMenu, isOpen ? styles.isOpen : "")}>
      {items.map(({ url, title }, index: number) => (
        <li key={index}>
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
