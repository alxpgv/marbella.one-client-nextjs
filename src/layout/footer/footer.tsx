import React from "react";
import { Container } from "@/components/container";
import { Logo } from "@/layout/logo";
import Image from "next/image";
import Link from "next/link";
import { settings, mainMenu } from "@/data/settings";
import { FooterMenuItems } from "./footer-menu-items";
import cn from "classnames";
import { Icon } from "@/components/icon";
import styles from "./footer.module.scss";
import { EmailLink, PhoneLink } from "@/components/links";

export const Footer = () => {
  const menuAbout = mainMenu[0];
  const menuRealEstate = mainMenu[2];
  const menuOwners = mainMenu[3];

  const phone = settings?.contact?.phone;
  const email = settings?.contact?.email;
  const workMode = settings?.workMode;
  const address = settings?.address;

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Container>
          <div className={styles.mainWrapper}>
            <div
              className={cn(styles.col, styles.contact, "text-sm text-white")}
            >
              <Logo className={styles.logo} color={"secondary"} />
              {phone && (
                <div className={cn(styles.contactItem, styles.contactPhone)}>
                  <span className={styles.iconWrapper}>
                    <Icon name={"phone-smooth"} className={styles.icon} />
                  </span>
                  <PhoneLink value={phone} />
                </div>
              )}
              {workMode && (
                <div className={cn(styles.contactItem, styles.contactWorkMode)}>
                  <span className={styles.iconWrapper}>
                    <Icon name={"calendar-smooth"} className={styles.icon} />
                  </span>
                  {workMode}
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
              {address && (
                <div className={cn(styles.contactItem, styles.contactLocation)}>
                  <span className={styles.iconWrapper}>
                    <Icon name={"location-smooth"} className={styles.icon} />
                  </span>
                  {address}
                </div>
              )}
            </div>
            <FooterMenuItems items={mainMenu} itemTitle={"Menu"} />
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
              <Image
                src={"/images/booking-raiting-min.jpg"}
                layout={"intrinsic"}
                width={161}
                height={30}
              />
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
