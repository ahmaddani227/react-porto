import { RiMailFill, RiPhoneFill, RiShareBoxFill } from "react-icons/ri";

type ContactMenuItem = {
  title: string;
  url: string;
  Svg: React.ElementType;
};

type ContactsSidebar = {
  id: string;
  title: string;
  contactsMenu: ContactMenuItem[];
};

export const contactsSidebar: ContactsSidebar = {
  id: "Contacts",
  title: "contacts",
  contactsMenu: [
    {
      title: "user@gmail.com",
      url: "#",
      Svg: RiMailFill,
    },
    {
      title: "+628531950",
      url: "#",
      Svg: RiPhoneFill,
    },
  ],
};

export const findMe: ContactsSidebar = {
  id: "Find Me Also",
  title: "find-me-also",
  contactsMenu: [
    {
      title: "YouTube channel",
      url: "https://youtube.com/",
      Svg: RiShareBoxFill,
    },
    {
      title: "Codewars",
      url: "https://codewars.com/",
      Svg: RiShareBoxFill,
    },
  ],
};

export const contacts = [contactsSidebar, findMe];
