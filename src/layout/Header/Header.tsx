import React from "react";
import { Logo } from "@/components/Logo/Logo";
import { MobileNav } from "@/components/Navigation/MobileNav/MobileNav";
import { Nav } from "@/components/Navigation/Nav/Nav";
import { mainMenu, settings } from "@/data/settings";
import { clearPhone } from "@/lib/helpers";
import styles from "./Header.module.scss";
import { Container } from "@/components/Container";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          <Nav menu={mainMenu} />

          <div className="flex items-center">
            <a
              className="text-red-400 text-xl"
              href={`tel:${clearPhone(settings.contact.phone)}`}
            >
              {settings.contact.phone}
            </a>
            <MobileNav menu={mainMenu} />
          </div>
        </div>
      </Container>
    </header>
  );
};
