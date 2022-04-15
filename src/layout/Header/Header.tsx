import React from "react";
import { Logo } from "@/components/Logo";
import { MainNav } from "@/layout/navigation/MainNav";
import { mainMenu, settings } from "@/data/settings";
import { getNumberFromString } from "@/lib/helpers";
import { Container } from "@/components/Container";
import { MainMobileNav } from "@/layout/navigation/MainMobileNav";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Logo className={styles.logo} />
          </div>

          <div className={styles.right}>
            <div className={styles.menu}>
              <MainNav menu={mainMenu} />
            </div>
            <a
              className="text-20"
              href={`tel:${getNumberFromString(settings.contact.phone)}`}
            >
              {settings.contact.phone}
            </a>
            <div className={styles.mobile}>
              <MainMobileNav menu={mainMenu} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
