import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ContactInfo } from "./contact-info";
import { YaMap } from "@/components/ui/ya-map";
import { useSettings } from "@/contexts/settings-context";
import styles from "./map-with-contact.module.scss";

export const MapWithContact = () => {
  const { contact } = useSettings();

  return (
    <Section>
      <Container>
        <ContactInfo contact={contact} />
        <YaMap
          center={contact?.coordinates as [number, number]}
          zoom={16}
          className={styles}
        />
      </Container>
    </Section>
  );
};
