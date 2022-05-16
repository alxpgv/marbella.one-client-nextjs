import React, { FC } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import Image, { type ImageProps } from "next/image";
import cn from "classnames";
import { Button } from "@/components/ui/button";
import styles from "./list-with-image.module.scss";

interface ListWithImageProps {
  title?: string;
  items: string[];
  image: ImageProps;
}

export const ListWithImage: FC<ListWithImageProps> = ({
  title,
  items,
  image,
}) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        <div className={styles.content}>
          {title && <h2>{title}</h2>}
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
          <div className={styles.btn}>
            <Button size={"md"} as={"modal"}>
              Online consultation
            </Button>
          </div>
        </div>
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
      </Container>
    </Section>
  );
};
