import React from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ContactInfo } from "@/blocks/MapWithContact/ContactInfo";
import { settings } from "@/data/settings";
import { YaMap } from "@/components/YaMap";
import styles from "./MapWithContact.module.scss";

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
