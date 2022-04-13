import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { home } from "@/data/pages/home";
import { ServiceList } from "@/components/blocks/ServiceList";
import styles from "./Promo.module.scss";
import cn from "classnames";

export const Promo = () => {
  const title = home?.promo?.title;
  const text = home?.promo?.text;
  const image = home?.promo?.image?.url;
  const services = home?.services;

  return (
    <div className={styles.promo}>
      {image && (
        <div className={styles.bgImage}>
          <Image src={image} layout="fill" objectFit="cover" alt="" />
        </div>
      )}

      <Container className={styles.inner}>
        <div className={styles.content}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {text && <p className={cn("text-lg", styles.text)}>{text}</p>}
          <div>
            <Button size={"md"} variant={"primary"}>
              Online consultation
            </Button>
          </div>
        </div>

        <div className={styles.service}>
          <ServiceList items={services} variant={"primary"} />
        </div>
      </Container>
    </div>
  );
};
