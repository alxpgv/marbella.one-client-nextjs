import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import Image, { type ImageProps } from "next/image";
import cn from "classnames";
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
            {text && (
              <div
                className={cn(styles.text, "content-mixed")}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
