import React, { FC } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import Image, { type ImageProps } from "next/image";
import cn from "clsx";
import styles from "./list-with-strict-image.module.scss";

interface ListWithStrictImageProps {
  text?: string;
  items: string[];
  image: ImageProps;
}

export const ListWithStrictImage: FC<ListWithStrictImageProps> = ({
  text,
  items,
  image,
}) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        {items?.length > 0 && (
          <div className={styles.list}>
            {items.map((title, index) => (
              <div
                key={index}
                className={cn("text-md-10 text-grey-500", styles.listItem)}
              >
                {title}
              </div>
            ))}
          </div>
        )}
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
        {text && (
          <div className={styles.text}>
            <p>{text}</p>
          </div>
        )}
      </Container>
    </Section>
  );
};
