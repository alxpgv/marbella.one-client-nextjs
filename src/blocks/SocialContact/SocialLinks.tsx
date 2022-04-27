import React, { FC } from "react";
import { IconFacebook, IconInstagram } from "@/components/Icons";
import styles from "./SocialContact.module.scss";

interface SocialLinksProps {
  socials: {
    [key: string]: string;
  };
}

export const SocialLinks: FC<SocialLinksProps> = ({ socials }) => {
  console.log(socials);
  return (
    <div className={styles.socialLinks}>
      {socials?.facebook && (
        <a
          href={socials.facebook}
          className={styles.iconItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <IconFacebook />
        </a>
      )}
      {socials?.instagram && (
        <a
          href={socials.instagram}
          className={styles.iconItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <IconInstagram />
        </a>
      )}
    </div>
  );
};
