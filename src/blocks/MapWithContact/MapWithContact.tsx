import React from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Map } from "@/blocks/MapWithContact/Map";
import { ContactInfo } from "@/blocks/MapWithContact/ContactInfo";
import { settings } from "@/data/settings";

export const MapWithContact = () => {
  return (
    <Section>
      <Container>
        <ContactInfo
          phone={settings?.contact?.phone}
          email={settings?.contact?.email}
          address={settings?.address}
        />
        <Map center={settings?.coordinates as [number, number]} zoom={16} />
      </Container>
    </Section>
  );
};
