export type FooterMenuType = {
  url: string;
  Svg: React.ElementType;
};

export type NavbarMenuType = {
  title: string;
  classname?: string;
  pathName: string;
};

export type ContactMenuItemType = {
  title: string;
  url: string;
  Svg: React.ElementType;
};

export type ContactsMenuType = {
  id: string;
  title: string;
  contactsMenu: ContactMenuItemType[];
};

export type SidebarMenuItemType = {
  id: string;
  title: string;
  type: string;
  Svg?: React.ElementType;
  Content?: React.ElementType;
  classname: {
    fillIcon?: string; // Default "fill-[#81A1C1]"
  };
};

export type SidebarMenuType = {
  id: string;
  title: string;
  Svg?: React.ElementType;
  sidebarData: SidebarMenuItemType[];
};

export type ProjectsType = {
  title: string;
  subtitle: string;
  Svg: React.ElementType;
  description: string;
  image: string;
  github: string;
  classname: {
    bgIcon: string;
  };
  techstack: string[];
};
