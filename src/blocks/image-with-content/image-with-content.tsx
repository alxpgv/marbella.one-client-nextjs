import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import Image, { type ImageProps } from "next/image";
import styles from "./image-with-content.module.scss";

interface ImageWithContentProps {
  image: ImageProps;
  text: string;
}

export const ImageWithContent: FC<ImageWithContentProps> = ({
  image,
  text,
}) => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.col}>
            {text && <div className={styles.text}>{text}</div>}
          </div>
          <div className={styles.col}>
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
          </div>
        </div>
      </Container>
    </Section>
  );
};
