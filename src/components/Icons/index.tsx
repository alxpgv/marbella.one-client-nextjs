import React from "react";
import { IconArrow } from "./IconArrow";
import { IconClose } from "./IconClose";
import { IconTwitter } from "./IconTwitter";
import { IconYoutube } from "./IconYoutube";
import { IconInstagram } from "./IconInstagram";
import { IconFacebook } from "./IconFacebook";
import { IconSearch } from "./IconSearch";
import { IconRepair } from "./IconRepair";
import { IconMarker } from "./IconMarker";
import { IconHome } from "./IconHome";

export const mapIcons: { [key: string]: React.ReactNode } = {
  search: <IconSearch />,
  repair: <IconRepair />,
  marker: <IconMarker />,
  home: <IconHome />,
};

export {
  IconClose,
  IconArrow,
  IconYoutube,
  IconTwitter,
  IconFacebook,
  IconInstagram,
  IconMarker,
  IconHome,
  IconSearch,
  IconRepair,
};
