import { NavbarMenuType } from "../../types/menu";

export const me = "ahmad dani";

export const navbarBrandMenu: NavbarMenuType = {
  title: me,
  pathName: "/",
  classname: "lg:min-w-[275px] lg:border-r",
};

export const navbarMainMenu: NavbarMenuType[] = [
  {
    title: "_hello",
    pathName: "/",
    classname: "lg:border-r",
  },
  {
    title: "_about-me",
    pathName: "/about",
    classname: "lg:border-r",
  },
  {
    title: "_projects",
    pathName: "/projects",
    classname: "lg:border-r",
  },
];

export const navbarContactMenu: NavbarMenuType = {
  title: "_contact-me",
  pathName: "/contact-me",
  classname: "lg:border-l lg:text-slate-muted",
};

export const navbarMenuMobile = [...navbarMainMenu, navbarContactMenu];
