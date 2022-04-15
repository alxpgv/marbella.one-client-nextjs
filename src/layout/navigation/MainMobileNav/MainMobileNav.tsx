import React, { FC, useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { MenuItem } from "./MenuItem";
import { SocialLinks } from "@/components/SocialLinks";
import { settings } from "@/data/settings";
import { getNumberFromString } from "@/lib/helpers";
import { MenuProps } from "@/types";
import {
  CloseButton,
  Hamburger,
} from "@/layout/navigation/MainMobileNav/buttons";
import styles from "./MainMobileNav.module.scss";

export const MainMobileNav: FC<{ menu: MenuProps[] }> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const clickOutside = (e: any) => {
    if (navRef.current === e.target) {
      setIsOpen(false);
    }
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Hamburger handleClick={handleToggle} />
      <nav
        className={`${styles.nav} ${isOpen ? styles.open : ""}`}
        role="navigation"
        onClick={clickOutside}
        ref={navRef}
      >
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <a
              className={styles.phone}
              href={`tel:${getNumberFromString(settings.contact.phone)}`}
            >
              {settings.contact.phone}
            </a>

            <Button size="sm" variant="primary">
              Callback
            </Button>

            <CloseButton handleClick={() => setIsOpen(false)} />
          </div>
          <ul className={styles.menu}>
            {menu?.length > 0 &&
              menu.map((item, index) => <MenuItem item={item} key={index} />)}
          </ul>
          <div className={styles.footer}>
            <SocialLinks />
          </div>
        </div>
      </nav>
    </>
  );
};
