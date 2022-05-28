import React from "react";
import { Logo } from "@/components/ui/logo";
import { MainNav } from "@/components/common/navigation/main-nav";
import { Container } from "@/components/ui/container";
import { MainNavMobile } from "@/components/common/navigation/main-nav-mobile";
import { PhoneLink } from "@/components/ui/contact-links";
import { useSettings } from "@/lib/contexts/settings-context";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  const { mainMenu, contact } = useSettings();
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
            {contact?.phone && (
              <PhoneLink value={contact.phone} className={"text-20"} />
            )}
            <div className={styles.mobile}>
              {mainMenu && <MainNavMobile menu={mainMenu} contact={contact} />}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
