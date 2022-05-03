import React from "react";
import { Container } from "@/components/Container";
import { Logo } from "@/layout/Logo";
import Image from "next/image";
import Link from "next/link";
import { settings, mainMenu } from "@/data/settings";
import { getPhoneFromString } from "@/lib/helpers";
import { FooterMenuItems } from "@/layout/Footer/FooterMenuItems";
import cn from "classnames";
import {
  IconBoxArrowSmooth,
  IconCalendarSmooth,
  IconLocationSmooth,
  IconPhoneSmooth,
} from "@/components/Icons";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const menuAbout = mainMenu[0];
  const menuRealEstate = mainMenu[2];
  const menuOwners = mainMenu[3];

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Container>
          <div className={styles.mainWrapper}>
            <div className={cn(styles.col, styles.contact, "text-sm")}>
              <Logo className={styles.logo} color={"secondary"} />
              {settings?.contact?.phone && (
                <div className={cn(styles.contactItem, styles.contactPhone)}>
                  <span className={styles.icon}>
                    <IconPhoneSmooth />
                  </span>
                  <a href={`tel:${getPhoneFromString(settings.contact.phone)}`}>
                    {settings.contact.phone}
                  </a>
                </div>
              )}
              {settings?.workMode && (
                <div className={cn(styles.contactItem, styles.contactWorkMode)}>
                  <span className={styles.icon}>
                    <IconCalendarSmooth />
                  </span>
                  {settings.workMode}
                </div>
              )}
              {settings?.contact?.email && (
                <div className={cn(styles.contactItem, styles.contactEmail)}>
                  <span className={styles.icon}>
                    <IconBoxArrowSmooth />
                  </span>

                  <a href={`mailto:${settings.contact.email}`}>
                    {settings.contact.email}
                  </a>
                </div>
              )}
              {settings?.address && (
                <div className={cn(styles.contactItem, styles.contactLocation)}>
                  <span className={styles.icon}>
                    <IconLocationSmooth />
                  </span>
                  {settings.address}
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

      <div className={cn(styles.bottom, "text-sm")}>
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
