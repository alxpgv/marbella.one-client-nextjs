export interface MenuItemProps {
  id: number;
  title: string;
  url: string;
}

export interface MenuProps {
  id: number;
  title: string;
  url: string;
  child?: MenuItemProps[];
}
