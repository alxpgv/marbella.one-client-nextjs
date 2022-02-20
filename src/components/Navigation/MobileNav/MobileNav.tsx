import React, { useEffect, useState } from "react";
import styles from "./MobileNav.module.css";
import Button from "@/components/Button";
import MenuItem from "@/components/Navigation/MobileNav/MenuItem";
import { MenuItemProps } from "@/components/Navigation/Nav";
import { settings } from "@/constants/settings";
import { clearPhone } from "@/lib/helpers";

const MobileNav = ({ menu }: { menu: MenuItemProps[] }) => {
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    opened
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [opened]);

  return (
    <nav className={styles.nav}>
      <div className={styles.btn} onClick={() => setOpened(true)}>
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={`${styles.overlay} ${opened ? "fixed" : "hidden"}`} />

      <div
        className={`${styles.container} ${
          opened ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={styles.containerLeft}
          onClick={() => setOpened(false)}
        />

        <div className={styles.containerRight}>
          <div className={styles.header}>
            <a
              className="text-lg text-red-400"
              href={`tel:${clearPhone(settings.phone)}`}
            >
              {settings.phone}
            </a>
            <Button size="sm" color="red">
              Callback
            </Button>
            <button className={styles.close}>X</button>
          </div>
          <ul className={styles.menu}>
            {menu.length &&
              menu.map((item, index) => <MenuItem item={item} key={index} />)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
