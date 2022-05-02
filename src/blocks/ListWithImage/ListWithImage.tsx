import React, { FC } from "react";
import type { ImageProps } from "@/types";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import Image from "next/image";
import cn from "classnames";
import { Button } from "@/components/Button";
import styles from "./ListWithImage.module.scss";

interface ListWithImageProps {
  title?: string;
  listItems: string[];
  image: ImageProps;
}

export const ListWithImage: FC<ListWithImageProps> = ({
  title,
  listItems,
  image,
}) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        <div className={styles.content}>
          {title && (
            <div className={styles.heading}>
              <h2 className="text-lg-10">{title}</h2>
            </div>
          )}
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
          <div className={styles.btn}>
            <Button size={"md"} variant={"primary"}>
              Online consultation
            </Button>
          </div>
        </div>
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
      </Container>
    </Section>
  );
};
