import React from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import cn from "clsx";
import { EmailLink, PhoneLink } from "@/components/ui/contact-links";
import { useSettings } from "@/contexts/settings-context";
import styles from "./advantage-with-contact.module.scss";

export const ContactInfo = () => {
  const { contact } = useSettings();

  return (
    <div className={styles.contact}>
      <div className={styles.contactBg}>
        <Icon name={"marker"} className={styles.contactImage} />
      </div>
      <div className={cn("text-white", styles.contactContent)}>
        <h3 className={cn("text-md-30 text-white", styles.contactTitle)}>
          It is always easy and pleasant to cooperate with us!
        </h3>
        <p className="text-sm-10">
          We will help you sell, buy or rent luxury real estate in sunny Spain.
        </p>
        <p className="text-sm-10">
          Contact us now and we will quickly answer all your questions
        </p>

        {contact?.phone && (
          <div>
            <p className="text-sm-10">Call us by phone</p>
            <PhoneLink value={contact.phone} className={"text-lg-10"} />
          </div>
        )}

        {contact?.email && (
          <div>
            <p className="text-sm-10">or write to our mail</p>
            <EmailLink
              value={contact.email}
              className={cn("text-md-10", styles.contactEmail)}
            />
          </div>
        )}

        <div className={styles.btn}>
          <Button
            variant={"primary"}
            size={"md"}
            as={"modal"}
            modalView={"CALLBACK"}
            text={"Callback"}
          />
        </div>
      </div>
    </div>
  );
};
