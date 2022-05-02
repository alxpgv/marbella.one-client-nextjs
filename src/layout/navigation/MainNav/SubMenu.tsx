import React, { FC } from "react";
import Link from "next/link";
import type { MenuProps } from "@/types";
import styles from "./MainNav.module.scss";

interface SubMenuProps {
  items: MenuProps[];
  isOpen: boolean;
}

export const SubMenu: FC<SubMenuProps> = ({ items, isOpen }) => {
  return (
    <ul className={`${styles.subMenu} ${isOpen ? styles.open : ""}`}>
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
