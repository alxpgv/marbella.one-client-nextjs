import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./MobileNav.module.css";
import IconArrowDown from "@/components/Icons/IconArrowDown";
import SubMenu from "@/components/Navigation/MobileNav/SubMenu";
import { MenuItemsProps } from "@/components/Navigation/Nav";

const MenuItem = ({ item }: { item: MenuItemsProps }) => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const router = useRouter();
  const { title, url, child } = item;

  const activeItem = (targetUrl: string) => {
    return targetUrl === router.pathname || openSubMenu ? styles.active : "";
  };

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSubMenu((prev) => !prev);
  };

  if (child?.length) {
    return (
      <li className={`${styles.hasChild} ${openSubMenu ? styles.active : ""}`}>
        <Link href={url}>
          <a className={activeItem(url)} onClick={toggleSubMenu}>
            {title}
            <IconArrowDown rotate={openSubMenu} />
          </a>
        </Link>
        <SubMenu items={child} opened={openSubMenu} />
      </li>
    );
  } else {
    return (
      <li>
        <Link href={url}>
          <a className={activeItem(url)}>{title}</a>
        </Link>
      </li>
    );
  }
};

export default MenuItem;
