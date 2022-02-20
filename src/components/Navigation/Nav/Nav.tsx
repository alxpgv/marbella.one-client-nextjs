import React from "react";
import styles from "./Nav.module.css";
import MenuItem from "@/components/Navigation/Nav/MenuItem";

export type MenuItemProps = {
  title: string;
  url: string;
};

export type MenuItemsProps = {
  child?: MenuItemProps[];
} & MenuItemProps;

const Nav = ({ menu }: { menu: MenuItemsProps[] }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {menu.length &&
          menu.map((item, index) => <MenuItem item={item} key={index} />)}
      </ul>
    </nav>
  );
};

export default Nav;
