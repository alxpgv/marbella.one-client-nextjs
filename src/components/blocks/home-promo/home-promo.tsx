import React, { FC } from "react";
import { Button, ButtonBase } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import cn from "clsx";
import { TiledItems, type TiledItemProps } from "@/components/ui/tiled-items";
import styles from "./home-promo.module.scss";
import Image, { type ImageProps } from "next/image";

interface HomePromoProps {
  title: string;
  text: string;
  image: ImageProps;
  services: TiledItemProps[];
  button?: ButtonBase;
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
      {image?.src && (
        <div className={styles.imageWrapper}>
          <div className={styles.imageInner}>
            <Image
              className={styles.image}
              src={image.src}
              layout={"fill"}
              objectFit={"cover"}
              alt={image?.alt ?? ""}
            />
            <img
              className={cn(styles.imageCloud, styles.cloudOne)}
              src={"/images/hero/cloud/cloud-01-min.png"}
              width={"100%"}
              height={"100%"}
              alt={""}
            />
            <img
              className={cn(styles.imageCloud, styles.cloudTwo)}
              src={"/images/hero/cloud/cloud-04-min.png"}
              width={"100%"}
              height={"100%"}
              alt={""}
            />
            <img
              className={cn(styles.imageCloud, styles.cloudThree)}
              src={"/images/hero/cloud/cloud-04-min.png"}
              width={"100%"}
              height={"100%"}
              alt={""}
            />
          </div>
        </div>
      )}

      <Container className={styles.wrapper}>
        <div className={cn(styles.content, "pt-navbar")}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {text && (
            <p className={cn("text-md-10 text-grey-300", styles.text)}>
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
