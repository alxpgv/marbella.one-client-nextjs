import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import type { ImageProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./Banner.module.scss";

interface BannerProps {
  items: {
    id: number;
    image: ImageProps;
    href?: string;
  }[];
}

export const Banner: FC<BannerProps> = ({ items }) => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          {items?.length > 0 &&
            items.map(({ id, image, href }) => {
              const bannerImage = image?.url ? (
                <Image
                  src={image.url}
                  layout="fill"
                  objectFit="cover"
                  alt={image.alt ?? ""}
                />
              ) : null;

              return (
                <div key={id} className={styles.banner}>
                  {bannerImage && href ? (
                    <Link href={href}>
                      <a>{bannerImage}</a>
                    </Link>
                  ) : (
                    bannerImage
                  )}
                </div>
              );
            })}
        </div>
      </Container>
    </Section>
  );
};
