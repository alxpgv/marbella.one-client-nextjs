import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import cn from "classnames";
import { Button } from "@/components/Button";
import Image from "next/image";
import { ImageProps } from "@/types";
import styles from "./OnlineService.module.scss";
import { CallbackForm } from "@/components/CallbackForm";

interface OnlineServiceProps {
  title: string;
  text: string;
  services: {
    id: number;
    title: string;
    image?: ImageProps;
    link: string;
  }[];
}

export const OnlineService: FC<OnlineServiceProps> = ({
  title,
  text,
  services,
}) => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={cn(styles.item, styles.itemIntro)}>
            {title && (
              <div className={styles.heading}>
                <h3>{title}</h3>
              </div>
            )}
            {text && (
              <div className={styles.text}>
                <p className={"text-sm-30"}>{text}</p>
              </div>
            )}

            <div className={styles.line} />
          </div>

          {services?.length > 0 &&
            services.map(({ id, title, image, link }) => {
              return (
                <div key={id} className={cn(styles.item, styles.itemService)}>
                  {image?.url && (
                    <div className={styles.itemServiceImageWrapper}>
                      <div className={styles.itemServiceImage}>
                        <Image
                          layout="fill"
                          src={image.url}
                          objectFit="cover"
                          alt={image.alt ?? ""}
                        />
                      </div>
                    </div>
                  )}
                  <div className={styles.itemServiceContent}>
                    <div className={cn("text-white", styles.itemServiceTitle)}>
                      {title}
                    </div>
                    <div className={styles.itemServiceBtn}>
                      <Button size={"sm"} variant={"primary"}>
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}

          <div className={cn(styles.item, styles.itemForm)}>
            <CallbackForm
              title={"Online booking"}
              text={
                "if you want to charter a Yacht or Private jet, please fill out the form and we will call you back"
              }
              btnText={"Yacht / Private jet charter"}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};