import React from "react";
import Link from "next/link";
import styles from "./MobileNav.module.css";
import { MenuItemProps } from "@/components/Navigation/Nav";

const SubMenu = ({
  items,
  opened,
}: {
  items: MenuItemProps[];
  opened: boolean;
}) => {
  return (
    <ul className={`${styles.subMenu} ${opened ? styles.open : ""}`}>
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

export default SubMenu;
