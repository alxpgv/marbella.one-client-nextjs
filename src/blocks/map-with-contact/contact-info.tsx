import React, { FC } from "react";
import cn from "classnames";
import { Button } from "@/components/button";
import { EmailLink, PhoneLink } from "@/components/links";
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
      <div className={cn(styles.header, "text-md-30")}>
        <h3 className={cn(styles.headerText, "text-white")}>
          — Do you want to cooperate with us?
        </h3>
        <h3 className={cn(styles.headerText, "text-white")}>
          — Or maybe you still have additional questions?
        </h3>
      </div>

      <div className={styles.main}>
        <div className={styles.col}>
          <h5 className={cn(styles.mainText, "text-sm-40", "text-white")}>
            You can always contact us in any convenient way!
          </h5>
          <p className={cn(styles.mainText, "text-sm", "text-white")}>
            Our experienced professionals will advise on real estate matters and
            tell you where to start if you want to buy or sell property!
          </p>
          <Button size={"md"}>Callback</Button>
        </div>
        <div className={cn(styles.col, "text-white")}>
          {phone && (
            <p className={"text-sm-23"}>
              <span className={"text-grey-300"}>Call us by phone: </span>
              <strong>
                <PhoneLink
                  value={phone}
                  className={cn(styles.phone, "text-sm-40")}
                />
              </strong>
            </p>
          )}
          {email && (
            <p className={"text-sm-23"}>
              <span className={"text-grey-300"}>or write to our mail: </span>
              <EmailLink value={email} className={styles.email} />
            </p>
          )}
          {address && (
            <p className={"text-sm-23"}>
              <span className={"text-grey-300"}>our office:</span> {address}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};