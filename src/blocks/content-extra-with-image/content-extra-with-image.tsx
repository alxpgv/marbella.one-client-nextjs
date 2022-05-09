import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { Button, ButtonType } from "@/components/button";
import cn from "classnames";
import Image, { type ImageProps } from "next/image";
import styles from "./content-extra-with-image.module.scss";

interface ContentExtraWithImageProps {
  contentPrimary: {
    title: string;
    subtitle: string;
    text: string;
  };
  image: ImageProps;
  contentSecondary: string;
  extra: {
    title: string;
    text: string;
    button: ButtonType & { text: string };
  };
}

export const ContentExtraWithImage: FC<ContentExtraWithImageProps> = ({
  contentPrimary,
  contentSecondary,
  image,
  extra,
}) => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.colPrimary}>
            {contentPrimary?.subtitle && (
              <h6 className={cn(styles.subtitle, "text-grey-300")}>
                {contentPrimary.subtitle}
              </h6>
            )}
            {contentPrimary?.title && (
              <h2 className={styles.title}>{contentPrimary.title}</h2>
            )}
            {contentPrimary?.text && (
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: contentPrimary.text }}
              />
            )}
          </div>

          <div className={styles.colSecondary}>
            <div className={styles.image}>
              {image?.src && (
                <Image
                  src={image.src}
                  layout="fill"
                  objectFit="cover"
                  className={styles.image}
                  alt={image.alt ?? ""}
                />
              )}
            </div>
            <div className={styles.footer}>
              {extra && (
                <div className={styles.extra}>
                  {extra.title && (
                    <p className={cn(styles.extraTitle, "text-white")}>
                      {extra.title}
                    </p>
                  )}
                  {extra.text && (
                    <p
                      className={cn(styles.extraText, "text-white text-sm-10")}
                    >
                      {extra.text}
                    </p>
                  )}
                  {extra.button && (
                    <div className={styles.extraBtn}>
                      <Button
                        variant={"secondary"}
                        size={"sm"}
                        {...extra.button}
                      />
                    </div>
                  )}
                </div>
              )}
              {contentSecondary && (
                <div
                  className={cn(styles.content, "content-mixed")}
                  dangerouslySetInnerHTML={{ __html: contentSecondary }}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
