import React, { FC } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import cn from "clsx";
import { Button } from "@/components/ui/button";
import { EmailLink, PhoneLink } from "@/components/ui/contact-links";
import { useSettings } from "@/contexts/settings-context";
import styles from "./contact-us.module.scss";

interface ContactUsProps {
  title: string;
}

export const ContactUs: FC<ContactUsProps> = ({ title }) => {
  const { contact } = useSettings();

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
            {contact?.phone && (
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Call us by phone</p>
                <PhoneLink
                  className={cn(styles.contactText, "text-md-10 text-white")}
                  value={contact.phone}
                />
              </div>
            )}
            {contact?.email && (
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>or write to our mail</p>
                <EmailLink
                  className={cn(styles.contactText, "text-md text-white")}
                  value={contact.email}
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
                <Button size={"md"} as={"modal"} modalView={"CALLBACK"}>
                  Callback
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
