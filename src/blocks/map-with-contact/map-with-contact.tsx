import React from "react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { ContactInfo } from "./contact-info";
import { settings } from "@/data/settings";
import { YaMap } from "@/components/ya-map";
import styles from "./map-with-contact.module.scss";

export const MapWithContact = () => {
  return (
    <Section>
      <Container>
        <ContactInfo
          phone={settings?.contact?.phone}
          email={settings?.contact?.email}
          address={settings?.address}
        />

        <YaMap
          center={settings?.coordinates as [number, number]}
          zoom={16}
          className={styles}
        />
      </Container>
    </Section>
  );
};