import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import Image, { ImageProps } from "next/image";
import styles from "./avatar-with-quote.module.scss";
import cn from "classnames";
import { Icon } from "@/components/icon";

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
                layout="intrinsic"
                width="300"
                height="300"
                alt={image.alt ?? ""}
              />
            </div>
          )}
          {text && (
            <div className={styles.content}>
              <div className={styles.textIcon}>
                <Icon name={"quote"} />
              </div>
              <div
                className={cn(styles.text, "text-grey-400")}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
