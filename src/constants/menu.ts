import { RiInstagramFill, RiLinkedinFill, RiTiktokFill } from "react-icons/ri";
import { INSTAGRAM, LINKEDIN, TIKTOK } from "./sosmed";

type Menu = {
  title: string;
  classname?: string;
  pathName: string;
};

const menuNavbarMobile: Array<Menu> = [
  {
    title: "_home",
    pathName: "#",
    classname: "text-white",
  },
  {
    title: "_about-me",
    pathName: "#",
    classname: "",
  },
  {
    title: "_projects",
    pathName: "#",
    classname: "",
  },
  {
    title: "_contact-me",
    pathName: "#",
    classname: "",
  },
];

const menu: Array<Menu> = [
  {
    title: "ahmad dani",
    pathName: "#",
    classname: "border-r min-w-[275px]",
  },
  {
    title: "_hello",
    pathName: "#",
    classname: "border-r nav-active",
  },
  {
    title: "_about-me",
    pathName: "#",
    classname: "border-r",
  },
  {
    title: "_projects",
    pathName: "#",
    classname: "border-r",
  },
  {
    title: "_contact-me",
    pathName: "#",
    classname: "border-l text-slate-muted",
  },
];

type FooterMenu = {
  url: string;
  Svg: any;
};

const footerMenu: Array<FooterMenu> = [
  {
    url: INSTAGRAM.url,
    Svg: RiInstagramFill,
  },
  {
    url: TIKTOK.url,
    Svg: RiTiktokFill,
  },
  {
    url: LINKEDIN.url,
    Svg: RiLinkedinFill,
  },
];

export { menuNavbarMobile, menu, footerMenu };
