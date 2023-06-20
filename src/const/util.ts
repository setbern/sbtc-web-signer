export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const displayAddy = (address: string) => {
  return `${address.substring(0, 4)}...${address.substring(
    address.length - 4
  )}`;
};
