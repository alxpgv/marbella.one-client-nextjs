import React, { FC } from "react";
import { Icon } from "@/components/ui/icon";
import styles from "./join-us.module.scss";

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
          <Icon name={"whatsapp"} className={styles.icon} />
        </a>
      )}
      {messengers?.telegram && (
        <a
          href={messengers.telegram}
          className={styles.iconItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <Icon name={"telegram"} className={styles.icon} />
        </a>
      )}
      {messengers?.viber && (
        <a
          href={messengers.viber}
          className={styles.iconItem}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <Icon name={"viber"} className={styles.icon} />
        </a>
      )}
    </div>
  );
};
