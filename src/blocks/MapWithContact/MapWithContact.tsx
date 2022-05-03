import React from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Map } from "@/blocks/MapWithContact/Map";
import { TextContact } from "@/blocks/MapWithContact/TextContact";

export const MapWithContact = () => {
  return (
    <Section>
      <Container>
        <TextContact />
        <Map />
      </Container>
    </Section>
  );
};
