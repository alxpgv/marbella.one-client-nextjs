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
                className={cn(styles.title, "text-md-30 text-white")}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </div>
          <div className={styles.col}>
            {phone && (
              <div className={styles.contactItem}>
                <div className={cn(styles.contactLabel, "text-sm-23")}>
                  Call us by phone
                </div>
                <div className={cn(styles.contactText, "text-md-10")}>
                  <PhoneLink value={phone} />
                </div>
              </div>
            )}
            {email && (
              <div className={styles.contactItem}>
                <div className={cn(styles.contactLabel, "text-sm-23")}>
                  or write to our mail
                </div>
                <div className={cn(styles.contactText, "text-sm-23")}>
                  <EmailLink value={email} />
                </div>
              </div>
            )}
            <div className={styles.contactItem}>
              <div
                className={cn(
                  styles.contactLabel,
                  styles.contactNote,
                  "text-sm-20"
                )}
              >
                Contact us and we will advise on all issues related to the
                purchase of real estate
              </div>
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
