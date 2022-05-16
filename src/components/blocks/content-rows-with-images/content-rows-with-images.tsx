import React, { FC } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import Image, { type ImageProps } from "next/image";
import cn from "classnames";
import { Button } from "@/components/ui/button";
import type { ButtonAsType } from "@/components/ui/button";
import styles from "./content-rows-with-images.module.scss";

interface ContentRowsWithImagesProps {
  rows: {
    title?: string;
    text: string;
    image?: ImageProps;
    button?: ButtonAsType;
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
                  className={cn(styles.text, "content-mixed")}
                  dangerouslySetInnerHTML={{ __html: rowPrimary.text }}
                />
              )}
              {rowPrimary.button?.as && (
                <div className={styles.btn}>
                  <Button
                    variant={"primary"}
                    size={"md"}
                    {...rowPrimary.button}
                  />
                </div>
              )}
            </div>
            {rowPrimary.image?.src && (
              <div className={styles.image}>
                <Image
                  src={rowPrimary.image.src}
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
            {rowSecondary.image?.src && (
              <div className={styles.image}>
                <Image
                  src={rowSecondary.image.src}
                  layout="fill"
                  objectFit="cover"
                  alt={rowSecondary.image.alt ?? ""}
                />
              </div>
            )}

            <div className={styles.content}>
              {rowSecondary.text && (
                <div
                  className={cn(styles.text, "content-mixed")}
                  dangerouslySetInnerHTML={{ __html: rowSecondary.text }}
                />
              )}
              {rowSecondary.button?.as && (
                <div className={styles.btn}>
                  <Button
                    variant={"primary"}
                    size={"md"}
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
