import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import cn from "classnames";
import { Button } from "@/components/Button";
import {
  IconFacebook,
  IconInstagram,
  IconTelegram,
  IconViber,
  IconWhatsapp,
} from "@/components/Icons";
import styles from "./SocialContact.module.scss";

interface SocialContactProps {
  socials?: {
    [key: string]: string;
  };
  messengers?: {
    [key: string]: string;
  };
}

export const SocialContact: FC<SocialContactProps> = ({
  socials,
  messengers,
}) => {
  console.log(socials);
  console.log(messengers);
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.messenger}>
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

            <div className={styles.messengerIcons}>
              {messengers?.whatsapp && (
                <a
                  href={messengers.whatsapp}
                  className={styles.iconItem}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <IconWhatsapp />
                </a>
              )}
              {messengers?.telegram && (
                <a
                  href={messengers.telegram}
                  className={styles.iconItem}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <IconTelegram />
                </a>
              )}
              {messengers?.viber && (
                <a
                  href={messengers.viber}
                  className={styles.iconItem}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <IconViber />
                </a>
              )}
            </div>
          </div>

          <div className={styles.social}>
            <div className={styles.socialHeading}>
              <h3 className={"text-white"}>We are in social networks!</h3>
            </div>
            <div className={cn(styles.socialText, "text-sm-20")}>
              <p>
                Subscribe to our news on social networks and be always up to
                date with the best real estate offers in Spain
              </p>
            </div>

            <div className={styles.socialIcons}>
              {socials?.facebook && (
                <a
                  href={socials.facebook}
                  className={styles.iconItem}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <IconFacebook />
                </a>
              )}
              {socials?.instagram && (
                <a
                  href={socials.instagram}
                  className={styles.iconItem}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <IconInstagram />
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
