import React, { FC } from "react";
import { Icon } from "@/components/ui/icon";
import cn from "clsx";
import styles from "./social-links.module.scss";

interface SocialLinksProps {
  variant?: "primary" | "secondary";
  justify?: "between";
  items: {
    label: string;
    url: string;
    icon: string;
  }[];
}

export const SocialLinks: FC<SocialLinksProps> = ({
  justify,
  variant = "primary",
  items,
}) => {
  return (
    <div
      className={cn(
        styles.socials,
        styles[variant],
        justify && styles[justify]
      )}
    >
      {items.map(({ label, url, icon }, index) => {
        return (
          <a
            key={`${url}-${index}`}
            href={url}
            className={styles.socialItem}
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <Icon name={icon} className={styles.socialIcon} />
          </a>
        );
      })}
    </div>
  );
};
