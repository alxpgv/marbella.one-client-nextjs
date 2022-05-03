import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import cn from "classnames";
import { Button } from "@/components/Button";
import { MessengerLinks } from "@/blocks/SocialContact/MessengerLinks";
import { SocialLinks } from "@/blocks/SocialContact/SocialLinks";
import styles from "./SocialContact.module.scss";
import { settings } from "@/data/settings";

export const SocialContact = () => {
  const socials = settings?.contact?.socials;
  const messengers = settings?.contact?.messengers;

  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.messengerCol}>
            <div className={styles.messengerContent}>
              <div className={styles.messengerTop}>
                <h2 className={"text-lg-20"}>Join us!</h2>
                <a
                  href="/#"
                  className={"text-sm-20"}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  #UTOPIA_IMMOBILIEN_BOUTIQE
                </a>
              </div>

              <div className={styles.messengerBottom}>
                <div className={"text-sm-20"}>
                  <p>More photos on instagram</p>
                </div>
                <div className={"text-sm-20"}>
                  <a
                    href="/#"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    @UTOPIA IMMOBILIEN BOUTIQE
                  </a>
                </div>
                <div className={styles.messengerBtn}>
                  <Button size={"md"} variant={"primary"}>
                    Subscribe now!
                  </Button>
                </div>
              </div>
            </div>
            {Object.keys(messengers).length > 0 && (
              <MessengerLinks messengers={messengers} />
            )}
          </div>

          <div className={styles.socialCol}>
            <div className={styles.socialHeading}>
              <h3 className={"text-white"}>We are in social networks!</h3>
            </div>
            <div className={cn(styles.socialText, "text-sm-20")}>
              <p>
                Subscribe to our news on social networks and be always up to
                date with the best real estate offers in Spain
              </p>
            </div>
            {Object.keys(socials).length > 0 && (
              <SocialLinks socials={socials} />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
