import React, { FC } from "react";
import type { ImageProps } from "@/types";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import Image from "next/image";
import cn from "classnames";
import { Button } from "@/components/Button";
import { IconArrow } from "@/components/Icons";
import styles from "./ImageWithOverlapText.module.scss";

interface ImageWithOverlapTextProps {
  title?: string;
  text?: string;
  image: ImageProps;
}

export const ImageWithOverlapText: FC<ImageWithOverlapTextProps> = ({
  title,
  text,
  image,
}) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
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
        <div className={styles.content}>
          {title && (
            <div className={styles.contentHeading}>
              <h2 className="text-lg-10">{title}</h2>
            </div>
          )}
          {text && (
            <div
              className={cn("text-sm-30", styles.contentText)}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
          <div className={styles.btn}>
            <Button
              size={"md"}
              variant={"primary"}
              icon={<IconArrow rotate={"-rotate-90"} />}
            >
              Learn more
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
