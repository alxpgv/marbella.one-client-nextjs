import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { ImageProps } from "@/types";
import { Button, ButtonType } from "@/components/button";
import cn from "classnames";
import Image from "next/image";
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
              <h6 className={cn(styles.subtitle, "text-sm-30 text-grey-300")}>
                {contentPrimary.subtitle}
              </h6>
            )}
            {contentPrimary?.title && (
              <h2 className={cn(styles.title, "text-lg-10")}>
                {contentPrimary.title}
              </h2>
            )}
            {contentPrimary?.text && (
              <div
                className={cn(styles.text, "text-sm-30 text-grey-400")}
                dangerouslySetInnerHTML={{ __html: contentPrimary.text }}
              />
            )}
          </div>

          <div className={styles.colSecondary}>
            <div className={styles.image}>
              {image?.url && (
                <Image
                  src={image.url}
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
                    <div
                      className={cn(styles.extraTitle, "text-white text-sm-30")}
                    >
                      {extra.title}
                    </div>
                  )}
                  {extra.text && (
                    <div
                      className={cn(styles.extraText, "text-white text-sm-20")}
                    >
                      {extra.text}
                    </div>
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
                  className={styles.content}
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
