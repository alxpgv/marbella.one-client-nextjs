import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ServiceListDivider } from "@/components/blocks/ServiceListDivider";
import cn from "classnames";
import { ImageProps, ServiceListProps } from "@/types";
import styles from "./HomePromo.module.scss";

interface HomePromoProps {
  title: string;
  text: string;
  image: ImageProps;
  services: ServiceListProps[];
}

export const HomePromo: FC<HomePromoProps> = ({
  title,
  text,
  image,
  services,
}) => {
  const imageUrl = image?.url;

  return (
    <div className={styles.promo}>
      {imageUrl && (
        <div className={styles.bgImage}>
          <Image src={imageUrl} layout="fill" objectFit="cover" alt="" />
        </div>
      )}

      <Container className={styles.wrapper}>
        <div className={styles.content}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {text && <p className={cn("text-sm-40", styles.text)}>{text}</p>}
          <div>
            <Button size={"md"} variant={"primary"}>
              Online consultation
            </Button>
          </div>
        </div>

        {services?.length > 0 && (
          <div className={styles.service}>
            <ServiceListDivider items={services} />
          </div>
        )}
      </Container>
    </div>
  );
};