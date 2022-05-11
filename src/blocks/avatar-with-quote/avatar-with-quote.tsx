import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import Image, { ImageProps } from "next/image";
import styles from "./avatar-with-quote.module.scss";

interface SloganWithTextProps {
  image: ImageProps;
  text: string;
}

export const AvatarWithQuote: FC<SloganWithTextProps> = ({ image, text }) => {
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
          {text && <div className={styles.text}>{text}</div>})
        </div>
      </Container>
    </Section>
  );
};
