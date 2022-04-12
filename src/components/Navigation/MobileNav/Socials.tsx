import React from "react";
import { IconFacebook } from "@/components/Icons/IconFacebook";
import { IconInstagram } from "@/components/Icons/IconInstagram";
import { IconTwitter } from "@/components/Icons/IconTwitter";
import { IconYoutube } from "@/components/Icons/IconYoutube";
import { settings } from "@/data/settings";

export const Socials = () => {
  return (
    <>
      <a
        href={settings.socialLinks.instagram}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <IconInstagram />
      </a>
      <a
        href={settings.socialLinks.instagram}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <IconFacebook />
      </a>
      <a
        href={settings.socialLinks.instagram}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <IconYoutube />
      </a>
      <a
        href={settings.socialLinks.instagram}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <IconTwitter />
      </a>
    </>
  );
};
