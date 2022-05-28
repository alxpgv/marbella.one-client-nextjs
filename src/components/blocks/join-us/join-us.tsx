import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MessengerLinks } from "./messenger-links";
import { SocialLinks } from "./social-links";
import { useSettings } from "@/lib/contexts/settings-context";
import styles from "./join-us.module.scss";

export const JoinUs = () => {
  const { contact } = useSettings();

  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.messengerCol}>
            <div className={styles.messengerContent}>
              <div className={styles.messengerTop}>
                <h2>Join us!</h2>
                <a
                  href="/#"
                  className={"text-sm-10"}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  #UTOPIA_IMMOBILIEN_BOUTIQE
                </a>
              </div>

              <div className={styles.messengerBottom}>
                <div>
                  <p className={"text-sm-10"}>More photos on instagram</p>
                </div>
                <div>
                  <a
                    href="/#"
                    className={"text-sm-10"}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    @UTOPIA IMMOBILIEN BOUTIQE
                  </a>
                </div>
                <div className={styles.messengerBtn}>
                  <Button size={"md"} as={"modal"} modalView={"SUBSCRIBE"}>
                    Subscribe now!
                  </Button>
                </div>
              </div>
            </div>
            {contact?.messengers &&
              Object.keys(contact.messengers).length > 0 && (
                <MessengerLinks messengers={contact.messengers} />
              )}
          </div>

          <div className={styles.socialCol}>
            <div className={styles.socialHeading}>
              <h3 className={"text-white"}>We are in social networks!</h3>
            </div>
            <div className={styles.socialText}>
              <p className={"text-sm-10"}>
                Subscribe to our news on social networks and be always up to
                date with the best real estate offers in Spain
              </p>
            </div>
            {contact?.socials && Object.keys(contact.socials).length > 0 && (
              <SocialLinks socials={contact.socials} />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
