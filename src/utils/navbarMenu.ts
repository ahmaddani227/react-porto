import { navbarMenu } from "../constants/menu/navbar";

export const getBrandMenu = () => {
  return navbarMenu.find((item) => item.title === "ahmad dani");
};

export const getRegularMenu = (isDekstop: boolean) => {
  return navbarMenu.filter((item) => {
    if (isDekstop) {
      return item.title !== "_contact-me" && item.title !== "ahmad dani";
    }
    return item.title !== "ahmad dani";
  });
};

export const getContactMenu = () => {
  return navbarMenu.find((item) => item.title === "_contact-me");
};
