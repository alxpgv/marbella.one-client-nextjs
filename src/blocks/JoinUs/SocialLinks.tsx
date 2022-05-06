import React, { FC } from "react";
import { Icon } from "@/components/Icon";
import styles from "./JoinUs.module.scss";

interface SocialLinksProps {
  socials: {
    [key: string]: string;
  };
}

export const SocialLinks: FC<SocialLinksProps> = ({ socials }) => {
  return (
    <div className={styles.socialLinks}>
      {socials?.facebook && (
        <a
          href={socials.facebook}
          className={styles.iconItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <Icon name={"facebook"} className={styles.icon} />
        </a>
      )}
      {socials?.instagram && (
        <a
          href={socials.instagram}
          className={styles.iconItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <Icon name={"instagram"} className={styles.icon} />
        </a>
      )}
    </div>
  );
};
