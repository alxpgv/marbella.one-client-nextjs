import React, { FC } from "react";
import cn from "clsx";
import { Button } from "@/components/ui/button";
import { EmailLink, PhoneLink } from "@/components/ui/contact-links";
import styles from "./map-with-contact.module.scss";
import { SocialLinks } from "@/components/ui/social-links";

interface ContactInfoProps {
  contact: any;
}

export const ContactInfo: FC<ContactInfoProps> = ({ contact }) => {
  const { phone, email, address, messengers } = contact;

  return (
    <div className={cn(styles.content)}>
      <div className={styles.header}>
        <h3 className={cn(styles.headerText, "text-white")}>
          — Do you want to cooperate with us?
        </h3>
        <h3 className={cn(styles.headerText, "text-white")}>
          — Or maybe you still have additional questions?
        </h3>
      </div>

      <div className={styles.main}>
        <div className={styles.col}>
          <h5 className={cn(styles.mainText, "text-white")}>
            You can always contact us in any convenient way!
          </h5>
          <p className={cn(styles.mainText, "text-sm", "text-white")}>
            Our experienced professionals will advise on real estate matters and
            tell you where to start if you want to buy or sell property!
          </p>
          <Button size={"md"} as={"modal"} modalView={"CALLBACK"}>
            Callback
          </Button>
        </div>
        <div className={cn(styles.col, "text-white")}>
          {phone && (
            <p>
              <span className={"text-grey-300"}>Call us by phone: </span>
              <strong>
                <PhoneLink
                  value={phone}
                  className={cn(styles.phone, "text-md-10 text-white")}
                />
              </strong>
            </p>
          )}
          {email && (
            <p>
              <span className={"text-grey-300"}>or write to our mail: </span>
              <EmailLink
                value={email}
                className={cn(styles.email, "text-md text-white")}
              />
            </p>
          )}
          {address && (
            <p>
              <span className={"text-grey-300"}>our office:</span> {address}
            </p>
          )}
          {messengers && (
            <div className={styles.socials}>
              <SocialLinks items={messengers} variant="secondary" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
