import React, { FC } from "react";
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconYoutube,
} from "@/components/Icons";

interface SocialLinksProps {
  socials: {
    [key: string]: string;
  };
}

export const SocialLinks: FC<SocialLinksProps> = ({ socials }) => {
  return (
    <>
      {socials?.instagram && (
        <a
          href={socials.instagram}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <IconInstagram />
        </a>
      )}
      {socials?.facebook && (
        <a
          href={socials.facebook}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <IconFacebook />
        </a>
      )}
      {socials?.youtube && (
        <a
          href={socials.youtube}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <IconYoutube />
        </a>
      )}
      {socials?.twitter && (
        <a
          href={socials.twitter}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <IconTwitter />
        </a>
      )}
    </>
  );
};
