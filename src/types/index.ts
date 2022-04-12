export interface MenuItemProps {
  title: string;
  url: string;
}

export interface MenuProps {
  title: string;
  url: string;
  child?: MenuItemProps[];
}
