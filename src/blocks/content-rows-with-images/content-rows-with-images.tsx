import React, { FC } from "react";
import type { ImageProps } from "@/types";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import Image from "next/image";
import cn from "classnames";
import { Button } from "@/components/button";
import type { ButtonType } from "@/components/button";
import styles from "./content-rows-with-images.module.scss";

interface ContentRowsWithImagesProps {
  rows: {
    title?: string;
    text: string;
    image?: ImageProps;
    button?: ButtonType;
  }[];
}

export const ContentRowsWithImages: FC<ContentRowsWithImagesProps> = ({
  rows,
}) => {
  const rowPrimary = rows[0];
  const rowSecondary = rows[1];

  return (
    <Section className={styles.section}>
      <Container>
        {rowPrimary && (
          <div className={cn(styles.row, styles.rowPrimary)}>
            <div className={styles.content}>
              {rowPrimary.text && (
                <div
                  className={styles.text}
                  dangerouslySetInnerHTML={{ __html: rowPrimary.text }}
                />
              )}
              {rowPrimary.button?.as && (
                <div className={styles.btn}>
                  <Button
                    variant={"primary"}
                    size={"md"}
                    icon={"arrow-left"}
                    {...rowPrimary.button}
                  />
                </div>
              )}
            </div>
            {rowPrimary.image?.url && (
              <div className={styles.image}>
                <Image
                  src={rowPrimary.image.url}
                  layout="fill"
                  objectFit="cover"
                  alt={rowPrimary.image.alt ?? ""}
                />
              </div>
            )}
          </div>
        )}
        {rowSecondary && (
          <div className={cn(styles.row, styles.rowSecondary)}>
            {rowSecondary.image?.url && (
              <div className={styles.image}>
                <Image
                  src={rowSecondary.image.url}
                  layout="fill"
                  objectFit="cover"
                  alt={rowSecondary.image.alt ?? ""}
                />
              </div>
            )}

            <div className={styles.content}>
              {rowSecondary.text && (
                <div
                  className={styles.text}
                  dangerouslySetInnerHTML={{ __html: rowSecondary.text }}
                />
              )}
              {rowSecondary.button?.as && (
                <div className={styles.btn}>
                  <Button
                    variant={"primary"}
                    size={"md"}
                    icon={"arrow-left"}
                    {...rowSecondary.button}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
