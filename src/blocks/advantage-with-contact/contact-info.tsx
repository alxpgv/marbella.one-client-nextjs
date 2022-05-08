import React from "react";
import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import cn from "classnames";
import { settings } from "@/data/settings";
import styles from "./advantage-with-contact.module.scss";
import { EmailLink, PhoneLink } from "@/components/links";

export const ContactInfo = () => {
  const email = settings?.contact?.email;
  const phone = settings?.contact?.phone;

  return (
    <div className={styles.contact}>
      <div className={styles.contactBg}>
        <Icon name={"marker"} className={styles.contactImage} />
      </div>
      <div className={cn("text-white", styles.contactContent)}>
        <h3 className={cn("text-md-30 text-white", styles.contactTitle)}>
          It is always easy and pleasant to cooperate with us!
        </h3>
        <p className="text-sm-20">
          We will help you sell, buy or rent luxury real estate in sunny Spain.
        </p>
        <p className="text-sm-20">
          Contact us now and we will quickly answer all your questions
        </p>

        {phone && (
          <div>
            <p className="text-sm-20">Call us by phone</p>
            <PhoneLink value={phone} className={"text-md-40"} />
          </div>
        )}

        {email && (
          <div>
            <p className="text-sm-20">or write to our mail</p>
            <EmailLink
              value={email}
              className={cn("text-sm-40", styles.contactEmail)}
            />
          </div>
        )}

        <div className={styles.btn}>
          <Button variant={"primary"} size={"md"} as={"callback"} />
        </div>
      </div>
    </div>
  );
};
