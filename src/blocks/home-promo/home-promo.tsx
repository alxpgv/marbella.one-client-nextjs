import React, { FC } from "react";
import Image from "next/image";
import { Button, ButtonType } from "@/components/button";
import { Container } from "@/components/container";
import cn from "classnames";
import type { ImageProps } from "@/types";
import styles from "./home-promo.module.scss";
import { TiledItems, type TiledItemProps } from "@/components/tiled-items";

interface HomePromoProps {
  title: string;
  text: string;
  image: ImageProps;
  services: TiledItemProps[];
  button: ButtonType;
}

export const HomePromo: FC<HomePromoProps> = ({
  title,
  text,
  image,
  services,
  button,
}) => {
  return (
    <div className={styles.promo}>
      {image?.url && (
        <div className={styles.bgImageWrapper}>
          <div className={styles.bgImage}>
            <Image
              src={image.url}
              layout="fill"
              objectFit="cover"
              alt={image?.alt ?? ""}
            />
          </div>
        </div>
      )}

      <Container className={styles.wrapper}>
        <div className={cn(styles.content, "pt-navbar")}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {text && (
            <p className={cn("text-sm-40 text-grey-300", styles.text)}>
              {text}
            </p>
          )}
          {button?.as && (
            <div>
              <Button variant={"primary"} size={"lg"} {...button} />
            </div>
          )}
        </div>

        <TiledItems items={services} className={styles} />
      </Container>
    </div>
  );
};
