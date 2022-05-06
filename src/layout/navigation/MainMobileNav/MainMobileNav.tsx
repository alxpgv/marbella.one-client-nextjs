import React, { FC, useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { MenuItem } from "./MenuItem";
import { SocialLinks } from "./SocialLinks";
import { getPhoneFromString } from "@/lib/helpers";
import type { MenuProps } from "../types";
import {
  CloseButton,
  Hamburger,
} from "@/layout/navigation/MainMobileNav/buttons";
import cn from "classnames";
import styles from "./MainMobileNav.module.scss";

interface MainMobileNavProps {
  menu: MenuProps[];
  contact?: any;
}

export const MainMobileNav: FC<MainMobileNavProps> = ({ menu, contact }) => {
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
        className={cn(styles.nav, isOpen ? styles.isOpen : "")}
        role="navigation"
        onClick={clickOutside}
        ref={navRef}
      >
        <div className={styles.wrapper}>
          <div className={styles.header}>
            {contact?.phone && (
              <a
                className={styles.phone}
                href={`tel:${getPhoneFromString(contact.phone)}`}
              >
                {contact.phone}
              </a>
            )}
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
            {contact?.socials && <SocialLinks socials={contact.socials} />}
          </div>
        </div>
      </nav>
    </>
  );
};
