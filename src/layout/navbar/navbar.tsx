import React from "react";
import { Logo } from "@/layout/logo";
import { MainNav } from "@/layout/navigation/main-nav";
import { mainMenu, settings } from "@/data/settings";
import { getPhoneFromString } from "@/lib/helpers";
import { Container } from "@/components/container";
import { MainNavMobile } from "@/layout/navigation/main-nav-mobile";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Logo className={styles.logo} />
          </div>

          <div className={styles.right}>
            {mainMenu && (
              <div className={styles.menu}>
                <MainNav menu={mainMenu} />
              </div>
            )}
            {settings?.contact?.phone && (
              <a
                className="text-20"
                href={`tel:${getPhoneFromString(settings.contact.phone)}`}
              >
                {settings.contact.phone}
              </a>
            )}
            <div className={styles.mobile}>
              <MainNavMobile menu={mainMenu} contact={settings?.contact} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
