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
import { IconAward } from "@/components/Icons/IconAward";
import { IconTargetUser } from "@/components/Icons/IconTargetUser";
import { IconCheckmark } from "@/components/Icons/IconCheckmark";
import { IconHandGood } from "@/components/Icons/IconHandGood";
import { IconWhatsapp } from "@/components/Icons/IconWhatsapp";
import { IconTelegram } from "@/components/Icons/IconTelegram";
import { IconViber } from "@/components/Icons/IconViber";
import { IconPhoneSmooth } from "@/components/Icons/IconPhoneSmooth";
import { IconCalendarSmooth } from "@/components/Icons/IconCalendarSmooth";
import { IconBoxArrowSmooth } from "@/components/Icons/IconBoxArrowSmooth";
import { IconLocationSmooth } from "@/components/Icons/IconLocationSmooth";

export const mapIcons: { [key: string]: React.ReactNode } = {
  search: <IconSearch />,
  repair: <IconRepair />,
  marker: <IconMarker />,
  home: <IconHome />,
  award: <IconAward />,
  targetuser: <IconTargetUser />,
  checkmark: <IconCheckmark />,
  handgood: <IconHandGood />,
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
  IconWhatsapp,
  IconTelegram,
  IconViber,
  IconBoxArrowSmooth,
  IconLocationSmooth,
  IconCalendarSmooth,
  IconPhoneSmooth,
};
