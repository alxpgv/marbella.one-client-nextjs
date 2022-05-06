import React, { FC } from "react";
import { Icon } from "@/components/Icon";
import styles from "./MainMobileNav.module.scss";

interface SocialLinksProps {
  socials: {
    [key: string]: string;
  };
}

export const SocialLinks: FC<SocialLinksProps> = ({ socials }) => {
  return (
    <>
      {socials?.instagram && (
        <a
          href={socials.instagram}
          className={styles.socialItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <Icon name={"instagram"} className={styles.icon} />
        </a>
      )}
      {socials?.facebook && (
        <a
          href={socials.facebook}
          className={styles.socialItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <Icon name={"facebook"} className={styles.icon} />
        </a>
      )}
      {socials?.youtube && (
        <a
          href={socials.youtube}
          className={styles.socialItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <Icon name={"youtube"} className={styles.icon} />
        </a>
      )}
      {socials?.twitter && (
        <a
          href={socials.twitter}
          className={styles.socialItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <Icon name={"twitter"} className={styles.icon} />
        </a>
      )}
    </>
  );
};
