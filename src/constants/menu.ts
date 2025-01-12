import {
  RiGamepadFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTerminalBoxFill,
  RiTiktokFill,
  RiUser4Fill,
} from "react-icons/ri";
import { INSTAGRAM, LINKEDIN, TIKTOK } from "./sosmed";
import BoltUpLeft from "../assets/Icons/bolt-up-left.svg";
import BoltUpRight from "../assets/Icons/bolt-up-right.svg";
import BoltDownLeft from "../assets/Icons/bolt-down-left.svg";
import BoltDownRight from "../assets/Icons/bolt-down-right.svg";
import {
  Experience,
  HardSkills,
  SoftSkills,
  Bio,
  Education,
  HighSchool,
  Interest,
  University,
  Sports,
  FavoriteGame,
} from "../components/Fragments/About";

type Menu = {
  title: string;
  classname?: string;
  pathName: string;
};

const menuNavbarMobile: Array<Menu> = [
  {
    title: "_home",
    pathName: "/",
    classname: "text-white",
  },
  {
    title: "_about-me",
    pathName: "/about",
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
    pathName: "/",
    classname: "border-r min-w-[275px]",
  },
  {
    title: "_hello",
    pathName: "/",
    classname: "border-r",
  },
  {
    title: "_about-me",
    pathName: "/about",
    classname: "border-r",
  },
  {
    title: "_projects",
    pathName: "/projects",
    classname: "border-r",
  },
  {
    title: "_contact-me",
    pathName: "/contact-me",
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

const sidebarData = [
  {
    id: "Profesional Info",
    title: "professional-info",
    Svg: RiTerminalBoxFill,
    sidebarData: [
      {
        id: "Experience",
        title: "experience",
        type: "folder",
        Content: Experience,
        classname: {
          fillIcon: "fill-peach",
        },
      },
      {
        id: "Hard Skills",
        title: "hard-skills",
        type: "folder",
        Content: HardSkills,
        classname: {
          fillIcon: "fill-mint-green",
        },
      },
      {
        id: "Soft Skills",
        title: "soft-skills",
        type: "folder",
        Content: SoftSkills,
        classname: {
          fillIcon: "fill-[#3A49A4]",
        },
      },
    ],
  },
  {
    id: "Personal Info",
    title: "personal-info",
    Svg: RiUser4Fill,
    sidebarData: [
      {
        id: "Bio",
        title: "bio",
        type: "folder",
        Content: Bio,
        classname: {
          fillIcon: "fill-peach",
        },
      },
      {
        id: "Intererst",
        title: "interest",
        type: "folder",
        Content: Interest,
        classname: {
          fillIcon: "fill-mint-green",
        },
      },
      {
        id: "Education",
        title: "education",
        type: "folder",
        Content: Education,
        classname: {
          fillIcon: "fill-[#3A49A4]",
        },
      },
      {
        id: "High School",
        title: "high-school",
        type: "file",
        Content: HighSchool,
        classname: {
          fillIcon: "fill-[#81A1C1]",
        },
      },
      {
        id: "University",
        title: "university",
        type: "file",
        Content: University,
        classname: {
          fillIcon: "fill-[#81A1C1]",
        },
      },
    ],
  },
  {
    id: "Hobbies Info",
    title: "hobbies-info",
    Svg: RiGamepadFill,
    sidebarData: [
      {
        id: "Sports",
        title: "sports",
        type: "folder",
        Content: Sports,
        classname: {
          fillIcon: "fill-peach",
        },
      },
      {
        id: "Favorite Game",
        title: "favorite-game",
        type: "folder",
        Content: FavoriteGame,
        classname: {
          fillIcon: "fill-mint-green",
        },
      },
    ],
  },
];

export { menuNavbarMobile, menu, footerMenu, boltImage, sidebarData };
