import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import cn from "classnames";
import { Button } from "@/components/button";
import { EmailLink, PhoneLink } from "@/components/links";
import { settings } from "@/data/settings";
import styles from "./contact-us.module.scss";

interface ContactUsProps {
  title: string;
}

export const ContactUs: FC<ContactUsProps> = ({ title }) => {
  const phone = settings?.contact?.phone;
  const email = settings?.contact?.email;

  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.col}>
            {title && (
              <h3
                className={cn(styles.title, "text-white")}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </div>
          <div className={styles.col}>
            {phone && (
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Call us by phone</p>
                <PhoneLink
                  className={cn(styles.contactText, "text-md-10 text-white")}
                  value={phone}
                />
              </div>
            )}
            {email && (
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>or write to our mail</p>
                <EmailLink
                  className={cn(styles.contactText, "text-md text-white")}
                  value={email}
                />
              </div>
            )}
            <div className={styles.contactItem}>
              <p
                className={cn(
                  styles.contactLabel,
                  styles.contactNote,
                  "text-sm-10"
                )}
              >
                Contact us and we will advise on all issues related to the
                purchase of real estate
              </p>
              <div className={styles.contactText}>
                <Button size={"md"}>Callback</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
