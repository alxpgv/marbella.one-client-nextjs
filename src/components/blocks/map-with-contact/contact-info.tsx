import React, { FC } from "react";
import cn from "classnames";
import { Button } from "@/components/ui/button";
import { EmailLink, PhoneLink } from "@/components/ui/links";
import styles from "./map-with-contact.module.scss";

interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
}

export const ContactInfo: FC<ContactInfoProps> = ({
  phone,
  email,
  address,
}) => {
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
          <Button size={"md"} as={"modal"}>
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
        </div>
      </div>
    </div>
  );
};
