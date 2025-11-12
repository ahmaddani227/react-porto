import { IconType } from "react-icons";

export type FooterMenuType = {
  url: string;
  Svg: IconType;
};

export type NavbarMenuType = {
  title: string;
  classname?: string;
  pathName: string;
};

export type ContactMenuItem = {
  title: string;
  url: string;
  Svg: React.ElementType;
};

export type ContactsSidebar = {
  id: string;
  title: string;
  contactsMenu: ContactMenuItem[];
};

export type SidebarMenuItem = {
  id: string;
  title: string;
  type: string;
  Svg?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  Content?: React.ElementType;
  classname: {
    fillIcon?: string; // Default "fill-[#81A1C1]"
  };
};

export type SidebarMenu = {
  id: string;
  title: string;
  Svg?: IconType;
  sidebarData: SidebarMenuItem[];
};

export type Projects = {
  title: string;
  subtitle: string;
  Svg: IconType;
  description: string;
  image: string;
  github: string;
  classname: {
    bgIcon: string;
  };
  techstack: string[];
};
