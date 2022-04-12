export const getNumberFromString = (value: string) => {
  return value ? value.replace(/[^0-9+]/g, "") : "";
};
