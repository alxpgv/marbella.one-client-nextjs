import React from "react";
import { settings } from "@/data/settings";
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconYoutube,
} from "@/components/Icons";
import styles from "./SocialLinks.module.scss";

export const SocialLinks = () => {
  return (
    <>
      <a
        href={settings.contact.socials.instagram}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <IconInstagram />
      </a>
      <a
        href={settings.contact.socials.instagram}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <IconFacebook />
      </a>
      <a
        href={settings.contact.socials.instagram}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <IconYoutube />
      </a>
      <a
        href={settings.contact.socials.instagram}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <IconTwitter />
      </a>
    </>
  );
};
