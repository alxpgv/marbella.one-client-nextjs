export interface MenuItemProps {
  title: string;
  url: string;
}

export interface MenuProps {
  title: string;
  url: string;
  child?: MenuItemProps[];
}

export interface ImageProps {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface TileItemProps {
  id: number;
  icon?: string;
  title: string;
  text?: string;
  button?: "link" | "callback" | "consultation";
  link?: string;
}
