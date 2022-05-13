export const getPhoneFromString = (value: string) => {
  return value ? value.replace(/[^0-9+]/g, "") : "";
};

export const cutText = (value: string, length = 100) => {
  return value?.length > length ? value.substring(0, length) + "..." : "";
};
