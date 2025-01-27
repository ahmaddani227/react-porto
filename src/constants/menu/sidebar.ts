import {
  RiGamepadFill,
  RiHtml5Fill,
  RiReactjsFill,
  RiTerminalBoxFill,
  RiUser4Fill,
} from "react-icons/ri";

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
} from "../../modules/about/contents";

type SidebarMenuItem = {
  id: string;
  title: string;
  type: string;
  Svg?: React.ElementType;
  Content?: React.ElementType;
  classname: {
    fillIcon: string;
  };
};

type SidebarMenu = {
  id: string;
  title: string;
  Svg?: any;
  sidebarData: SidebarMenuItem[];
};

export const sidebarAbout: SidebarMenu[] = [
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

export const sidebarProjects: SidebarMenu[] = [
  {
    id: "Projects",
    title: "projects",
    sidebarData: [
      {
        id: "react",
        title: "React",
        Svg: RiReactjsFill,
        type: "checkbox",
        classname: {
          fillIcon: "fill-midnight-slate",
        },
      },
      {
        id: "html",
        title: "HTML",
        Svg: RiHtml5Fill,
        type: "checkbox",
        classname: {
          fillIcon: "fill-midnight-slate",
        },
      },
    ],
  },
];
