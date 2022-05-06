import React, { FC } from "react";
import { MenuItem } from "./MenuItem";
import type { MenuProps } from "../types";
import styles from "./MainNav.module.scss";

export const MainNav: FC<{ menu: MenuProps[] }> = ({ menu }) => {
  return (
    <nav role="navigation">
      <ul className={styles.menu}>
        {menu?.length > 0 &&
          menu.map((item, index) => <MenuItem item={item} key={index} />)}
      </ul>
    </nav>
  );
};
