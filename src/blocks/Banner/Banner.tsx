import React, { FC } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ImageProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./Banner.module.scss";

interface BannerProps {
  banners: {
    id: number;
    image: ImageProps;
    link?: string;
  }[];
}

export const Banner: FC<BannerProps> = ({ banners }) => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          {banners?.length > 0 &&
            banners.map(({ id, image, link }) => {
              const bannerImage = image?.url ? (
                <div className={styles.image}>
                  <Image
                    src={image.url}
                    layout="fill"
                    objectFit="cover"
                    alt={image.alt ?? ""}
                  />
                </div>
              ) : null;

              return (
                <div key={id} className={styles.banner}>
                  {bannerImage && link ? (
                    <Link href={link}>
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
