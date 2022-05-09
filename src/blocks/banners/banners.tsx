import React, { FC } from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import styles from "./banners.module.scss";

interface BannerProps {
  items: {
    id: number;
    image: ImageProps;
    href?: string;
  }[];
}

export const Banners: FC<BannerProps> = ({ items }) => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          {items?.length > 0 &&
            items.map(({ id, image, href }) => {
              const bannerImage = image?.src ? (
                <Image
                  src={image.src}
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
