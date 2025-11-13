import { RiLinkedinFill, RiMailFill, RiShareBoxFill } from "react-icons/ri";
import { ContactsMenuType } from "../../types/menu";
import { EMAIL } from "../me";

export const contactsSidebar: ContactsMenuType = {
  id: "Contacts",
  title: "contacts",
  contactsMenu: [
    {
      title: EMAIL.url.replace("mailto:", ""),
      url: "#",
      Svg: RiMailFill,
    },
    {
      title: "ahmadddani",
      url: "#",
      Svg: RiLinkedinFill,
    },
  ],
};

export const findMe: ContactsMenuType = {
  id: "Find Me Also",
  title: "find-me-also",
  contactsMenu: [
    {
      title: "Instagram",
      url: "https://instagram.com/ahmaddaani_",
      Svg: RiShareBoxFill,
    },
    // {
    //   title: "Codewars",
    //   url: "https://codewars.com/",
    //   Svg: RiShareBoxFill,
    // },
  ],
};

export const contacts = [contactsSidebar, findMe];
