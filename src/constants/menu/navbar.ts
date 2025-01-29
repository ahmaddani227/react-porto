type Menu = {
  title: string;
  classname?: string;
  pathName: string;
};

export const navbarBrandMenu: Menu = {
  title: "ahmad dani",
  pathName: "/",
  classname: "lg:min-w-[275px] lg:border-r",
};

export const navbarMainMenu: Array<Menu> = [
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

export const navbarContactMenu: Menu = {
  title: "_contact-me",
  pathName: "/contact-me",
  classname: "lg:border-l lg:text-slate-muted",
};

export const navbarMenuMobile = [...navbarMainMenu, navbarContactMenu];
