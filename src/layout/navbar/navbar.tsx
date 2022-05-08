import React from "react";
import { Logo } from "@/layout/logo";
import { MainNav } from "@/layout/navigation/main-nav";
import { mainMenu, settings } from "@/data/settings";
import { Container } from "@/components/container";
import { MainNavMobile } from "@/layout/navigation/main-nav-mobile";
import styles from "./navbar.module.scss";
import { PhoneLink } from "@/components/links";

export const Navbar = () => {
  const phone = settings?.contact?.phone;
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
            {phone && <PhoneLink value={phone} className={"text-20"} />}
            <div className={styles.mobile}>
              <MainNavMobile menu={mainMenu} contact={settings?.contact} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
