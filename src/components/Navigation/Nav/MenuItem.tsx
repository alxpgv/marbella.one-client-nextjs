import React, { RefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.css";
import IconArrowDown from "@/components/Icons/IconArrowDown";
import { MenuItemsProps } from "@/components/Navigation/Nav";
import SubMenu from "@/components/Navigation/Nav/SubMenu";

const MenuItem = ({ item }: { item: MenuItemsProps }) => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const router = useRouter();
  const { title, url, child } = item;
  const hasChildLinkRef: RefObject<HTMLLIElement> = useRef(null);

  const activeItem = (targetUrl: string) => {
    return targetUrl === router.pathname || openSubMenu ? styles.active : "";
  };

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSubMenu((prev) => !prev);
  };

  // TODO: check this code
  useEffect(() => {
    if (child?.length && openSubMenu) {
      const handleClickOutside = (e: any) => {
        if (!hasChildLinkRef?.current?.contains(e.target)) {
          setOpenSubMenu(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [openSubMenu]);

  if (child?.length) {
    return (
      <li className={styles.hasChild} ref={hasChildLinkRef}>
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
