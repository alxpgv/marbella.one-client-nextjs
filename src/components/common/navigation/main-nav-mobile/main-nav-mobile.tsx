import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import { MenuItem } from "./menu-item";
import type { MenuProps } from "../types";
import {
  CloseButton,
  Hamburger,
} from "@/components/common/navigation/main-nav-mobile/buttons";
import { PhoneLink } from "@/components/ui/contact-links";
import cn from "clsx";
import styles from "./main-nav-mobile.module.scss";
import { SocialLinks } from "@/components/ui/social-links";

interface MainMobileNavProps {
  menu: MenuProps[];
  contact?: any;
}

export const MainNavMobile: FC<MainMobileNavProps> = ({ menu, contact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef() as MutableRefObject<any>;

  useEffect(() => {
    if (navRef.current) {
      isOpen
        ? document.body.classList.add("overflow-hidden")
        : document.body.classList.remove("overflow-hidden");
    }

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
        style={{ visibility: isOpen ? "visible" : "hidden" }}
        role="navigation"
        onClick={clickOutside}
        ref={navRef}
      >
        <div className={styles.wrapper}>
          <div className={styles.header}>
            {contact?.phone && (
              <PhoneLink value={contact.phone} className={styles.phone} />
            )}
            <Button size="sm" as={"modal"} modalView={"CALLBACK"}>
              Callback
            </Button>

            <CloseButton handleClick={() => setIsOpen(false)} />
          </div>
          <ul className={styles.menu}>
            {menu?.length > 0 &&
              menu.map((item, index) => (
                <MenuItem
                  item={item}
                  key={index}
                  onClick={() => setIsOpen(false)}
                />
              ))}
          </ul>
          <div className={styles.footer}>
            {contact?.messengers && (
              <SocialLinks items={contact.messengers} justify={"between"} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
