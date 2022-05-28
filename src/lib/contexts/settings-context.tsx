import React, { createContext, FC, useContext } from "react";
import { type MenuProps } from "@/components/common/navigation/types";
import { SEOProps } from "@/components/common/SEO";

interface SettingsState {
  siteUrl?: string;
  contact?: any;
  workMode?: string;
  address?: string;
  coordinates?: [number, number];
  meta?: SEOProps;
  mainMenu?: MenuProps[];
}

interface SettingsProviderProps {
  value: SettingsState;
}

const SettingsContext = createContext<SettingsState>({});
SettingsContext.displayName = "SettingsContext";

export const SettingsProvider: FC<SettingsProviderProps> = ({
  children,
  value = {},
}) => {
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error(`useSettings must be used within a SettingsProvider`);
  }
  return context;
};
