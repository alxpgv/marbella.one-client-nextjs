import React, { FC } from "react";
import type { ImageProps } from "@/types";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import Image from "next/image";
import styles from "./ListWithStrictImage.module.scss";
import cn from "classnames";

interface ListWithStrictImageProps {
  text?: string;
  listItems: string[];
  image: ImageProps;
}

export const ListWithStrictImage: FC<ListWithStrictImageProps> = ({
  text,
  listItems,
  image,
}) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        {listItems?.length > 0 && (
          <div className={styles.list}>
            {listItems.map((title, index) => (
              <div
                key={index}
                className={cn("text-md-10 text-grey-500", styles.listItem)}
              >
                {title}
              </div>
            ))}
          </div>
        )}
        {image?.url && (
          <div className={styles.image}>
            <Image
              src={image.url}
              layout="fill"
              objectFit="cover"
              alt={image.alt ?? ""}
            />
          </div>
        )}
        {text && (
          <div className={styles.text}>
            <p className={"text-sm-30"}>{text}</p>
          </div>
        )}
      </Container>
    </Section>
  );
};
