import React from "react";
import { getPhoneFromString } from "@/lib/helpers";
import { Button } from "@/components/Button";
import cn from "classnames";
import styles from "./AdvantageTile.module.scss";

export const ContactInfo = ({ contact }: { contact: any }) => {
  const email = contact?.email;
  const phone = contact?.phone;

  return (
    <div className={styles.contact}>
      <h3 className={cn("text-md-30", styles.contactTitle)}>
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
          <a className="text-md-40" href={`tel:${getPhoneFromString(phone)}`}>
            {phone}
          </a>
        </div>
      )}

      {email && (
        <div>
          <p className="text-sm-20">or write to our mail</p>
          <a
            className={cn("text-sm-40", styles.contactEmail)}
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </div>
      )}

      <div className={styles.btn}>
        <Button size={"md"} variant={"primary"}>
          Callback
        </Button>
      </div>
    </div>
  );
};
