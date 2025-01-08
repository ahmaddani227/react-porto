import { RiInstagramFill, RiLinkedinFill, RiTiktokFill } from "react-icons/ri";
import { INSTAGRAM, LINKEDIN, TIKTOK } from "./sosmed";
import BoltUpLeft from "../assets/Icons/bolt-up-left.svg";
import BoltUpRight from "../assets/Icons/bolt-up-right.svg";
import BoltDownLeft from "../assets/Icons/bolt-down-left.svg";
import BoltDownRight from "../assets/Icons/bolt-down-right.svg";

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

// Bolt Image
type TypeBoltImage = {
  image: any;
  classname: string;
};

const boltImage: Array<TypeBoltImage> = [
  {
    image: BoltUpLeft,
    classname: "top-2 left-2",
  },
  {
    image: BoltUpRight,
    classname: "top-2 right-2",
  },
  {
    image: BoltDownLeft,
    classname: "bottom-2 left-2",
  },
  {
    image: BoltDownRight,
    classname: "bottom-2 right-2",
  },
];

export { menuNavbarMobile, menu, footerMenu, boltImage };
