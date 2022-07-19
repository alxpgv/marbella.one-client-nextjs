import React, { FC } from "react";
import Link from "next/link";
import type { MenuProps } from "../types";
import styles from "./main-nav.module.scss";

interface SubMenuProps {
  items: MenuProps[];
  isOpen: boolean;
}

export const SubMenu: FC<SubMenuProps> = ({ items, isOpen }) => {
  return (
    <ul className={`${styles.subMenu} ${isOpen ? styles.open : ""}`}>
      {items.map(({ slug, label }, index: number) => (
        <li key={index}>
          <Link href={slug}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
