export interface MenuItemProps {
  id: number;
  label: string;
  slug: string;
  type?: string;
}

export interface MenuProps extends MenuItemProps {
  child?: MenuItemProps[];
}
