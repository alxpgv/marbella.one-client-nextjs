import React, { FC } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import cn from "clsx";
import { Button } from "@/components/ui/button";
import Image, { type ImageProps } from "next/image";
import { FormFeedback } from "@/components/ui/forms/form-feedback";
import styles from "./online-service.module.scss";

interface OnlineServiceProps {
  title: string;
  text: string;
  services: {
    id: number;
    title: string;
    image?: ImageProps;
    href: string;
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
            {title && <h3 className={styles.title}>{title}</h3>}
            {text && <p>{text}</p>}
            <div className={styles.line} />
          </div>

          {services?.length > 0 &&
            services.map(({ id, title, image, href }) => {
              return (
                <div key={id} className={cn(styles.item, styles.itemService)}>
                  {image?.src && (
                    <div className={styles.itemServiceImageWrapper}>
                      <div className={styles.itemServiceImage}>
                        <Image
                          layout="fill"
                          src={image.src}
                          objectFit="cover"
                          alt={image.alt ?? ""}
                        />
                      </div>
                    </div>
                  )}
                  <div className={styles.itemServiceContent}>
                    {title && (
                      <div
                        className={cn("text-white", styles.itemServiceTitle)}
                      >
                        {title}
                      </div>
                    )}
                    {href && (
                      <div className={styles.itemServiceBtn}>
                        <Button size={"sm"} as={"link"} href={href} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          <div className={cn(styles.item, styles.itemForm)}>
            <FormFeedback
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
