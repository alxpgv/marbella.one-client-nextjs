import React from "react";
import { IconMarker } from "@/components/Icons/IconMarker";
import { IconSearch } from "@/components/Icons/IconSearch";
import { IconRepair } from "@/components/Icons/IconRepair";
import { IconHome } from "@/components/Icons/IconHome";

type IconByNameProps = {
  iconId: "purchase" | "sale" | "repair" | "building";
};

const getIcon = (iconId: string) => {
  switch (iconId) {
    case "purchase":
      return <IconSearch />;
    case "sale":
      return <IconMarker />;
    case "repair":
      return <IconRepair />;
    case "building":
      return <IconHome />;
    default:
      return null;
  }
};

export const IconByName: React.FC<IconByNameProps> = ({ iconId = null }) => {
  if (!iconId) {
    return null;
  }

  return <>{getIcon(iconId)}</>;
};
