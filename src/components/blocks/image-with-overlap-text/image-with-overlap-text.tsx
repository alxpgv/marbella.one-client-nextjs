import React, { FC } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import Image, { type ImageProps } from "next/image";
import { Button, type ButtonType } from "@/components/ui/button";
import styles from "./image-with-overlap-text.module.scss";

interface ImageWithOverlapTextProps {
  title?: string;
  text?: string;
  image: ImageProps;
  button?: ButtonType;
}

export const ImageWithOverlapText: FC<ImageWithOverlapTextProps> = ({
  title,
  text,
  image,
  button,
}) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        {image?.src && (
          <div className={styles.image}>
            <Image
              src={image.src}
              layout="fill"
              objectFit="cover"
              alt={image.alt ?? ""}
            />
          </div>
        )}
        <div className={styles.content}>
          {title && (
            <div
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {text && (
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
          {button?.as && (
            <div className={styles.btn}>
              <Button size={"md"} {...button}>
                Learn more
              </Button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
