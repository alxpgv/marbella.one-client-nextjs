import React, { FC } from "react";
import { IconTelegram, IconViber, IconWhatsapp } from "@/components/Icons";
import styles from "./SocialContact.module.scss";

interface MessengerLinksProps {
  messengers: {
    [key: string]: string;
  };
}

export const MessengerLinks: FC<MessengerLinksProps> = ({ messengers }) => {
  return (
    <div className={styles.messengerLinks}>
      {messengers?.whatsapp && (
        <a
          href={messengers.whatsapp}
          className={styles.iconItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <IconWhatsapp />
        </a>
      )}
      {messengers?.telegram && (
        <a
          href={messengers.telegram}
          className={styles.iconItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <IconTelegram />
        </a>
      )}
      {messengers?.viber && (
        <a
          href={messengers.viber}
          className={styles.iconItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <IconViber />
        </a>
      )}
    </div>
  );
};
