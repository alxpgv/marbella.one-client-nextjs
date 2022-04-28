export const flatMenuItemsByIndex = (
  menu: any[],
  index: number
): any[] | null => {
  if (index >= 0 && menu[index] && Object.keys(menu[index]).length > 0) {
    if (menu[index].child?.length > 0) {
      const { child, ...parent } = menu[index];
      return [parent, ...child];
    }
  }

  return null;
};
