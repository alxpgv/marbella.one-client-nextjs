import React from "react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { FooterMenuItems } from "./footer-menu-items";
import cn from "clsx";
import { Icon } from "@/components/ui/icon";
import { EmailLink, PhoneLink } from "@/components/ui/contact-links";
import { useSettings } from "@/contexts/settings-context";
import styles from "./footer.module.scss";
import { SocialLinks } from "@/components/ui/social-links";

export const Footer = () => {
  const { mainMenu, contact } = useSettings();
  const menuAbout = mainMenu && mainMenu[0];
  const menuRealEstate = mainMenu && mainMenu[2];
  const menuOwners = mainMenu && mainMenu[3];

  const phone = contact?.phone;
  const email = contact?.email;

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Container>
          <div className={cn(styles.mainWrapper, "text-white")}>
            <div className={cn(styles.col, styles.contact, "text-sm")}>
              <Logo className={styles.logo} color={"secondary"} />
              {phone && (
                <div className={cn(styles.contactItem, styles.contactPhone)}>
                  <span className={styles.iconWrapper}>
                    <Icon name={"phone-smooth"} className={styles.icon} />
                  </span>
                  <PhoneLink value={phone} />
                </div>
              )}
              {contact?.workMode && (
                <div className={cn(styles.contactItem, styles.contactWorkMode)}>
                  <span className={styles.iconWrapper}>
                    <Icon name={"calendar-smooth"} className={styles.icon} />
                  </span>
                  {contact.workMode}
                </div>
              )}
              {email && (
                <div className={cn(styles.contactItem, styles.contactEmail)}>
                  <span className={styles.iconWrapper}>
                    <Icon name={"box-arrow-smooth"} className={styles.icon} />
                  </span>
                  <EmailLink value={email} />
                </div>
              )}
              {contact?.address && (
                <div className={cn(styles.contactItem, styles.contactLocation)}>
                  <span className={styles.iconWrapper}>
                    <Icon name={"location-smooth"} className={styles.icon} />
                  </span>
                  {contact.address}
                </div>
              )}
            </div>
            {mainMenu && (
              <FooterMenuItems items={mainMenu} itemTitle={"Menu"} />
            )}
            {menuAbout?.child && (
              <FooterMenuItems
                items={menuAbout.child}
                itemTitle={<Link href={menuAbout.url}>{menuAbout.title}</Link>}
              />
            )}
            {menuRealEstate?.child && (
              <FooterMenuItems
                items={menuRealEstate.child}
                itemTitle={
                  <Link href={menuRealEstate.url}>{menuRealEstate.title}</Link>
                }
              />
            )}
            {menuOwners?.child && (
              <FooterMenuItems
                items={menuOwners.child}
                itemTitle={
                  <Link href={menuOwners.url}>{menuOwners.title}</Link>
                }
              />
            )}
          </div>
        </Container>
      </div>

      <div className={cn(styles.bottom, "text-sm text-white")}>
        <Container>
          <div className={styles.bottomWrapper}>
            <div className={styles.col}>© VIOLET real estate, 2010 - 2022</div>
            <div className={styles.col}>
              {contact?.messengers && (
                <div className={styles.socials}>
                  <SocialLinks items={contact.messengers} variant="secondary" />
                </div>
              )}
            </div>
            <div className={cn(styles.col, styles.privacy)}>
              <Link href={"/#"}>
                <a>Privacy Policy</a>
              </Link>
              <Link href={"/#"}>
                <a>Processing of personal data</a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
