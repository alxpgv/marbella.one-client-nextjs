import React, { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { MenuProps } from "../types";
import { SubMenu } from "./sub-menu";
import { Icon } from "@/components/ui/icon";
import cn from "clsx";
import styles from "./main-nav.module.scss";

export const MenuItem: FC<{ item: MenuProps }> = ({ item }) => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const router = useRouter();
  const { label, slug, child } = item;

  const activeItem = (currenUrl: string) => {
    const segments = router.asPath.split("/");
    segments.shift();
    //TODO: where change to slug menu, now slice - remove first slash
    return (
      currenUrl &&
      (currenUrl === router.asPath || segments.includes(currenUrl.slice(1)))
    );
  };

  const handleMouseEnter = () => {
    setOpenSubMenu(true);
  };

  const handleMouseLeave = () => {
    setOpenSubMenu(false);
  };

  if (child?.length) {
    return (
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link href={slug}>
          <a
            className={cn({
              [styles.isOpen]: openSubMenu,
              [styles.active]: activeItem(slug),
            })}
          >
            {label}
            <Icon name={"arrow"} className={styles.icon} />
          </a>
        </Link>
        <SubMenu items={child} isOpen={openSubMenu} />
      </li>
    );
  } else {
    return (
      <li>
        <Link href={slug}>
          <a className={cn({ [styles.active]: activeItem(slug) })}>{label}</a>
        </Link>
      </li>
    );
  }
};
