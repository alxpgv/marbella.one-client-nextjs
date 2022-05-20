import React, { createContext, FC, useContext } from "react";
import { type MenuProps } from "@/components/common/navigation/types";

interface SettingsState {
  contact?: any;
  workMode?: string;
  address?: string;
  coordinates?: [number, number];
  defaultMeta?: {
    title: string;
    description: string;
    keywords: string;
  };
  mainMenu?: MenuProps[];
}

const initialState = {};

const SettingsContext = createContext<SettingsState | any>(initialState);
SettingsContext.displayName = "SettingsContext";

export const SettingsProvider: FC = ({ children }) => {
  const value = {};
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
