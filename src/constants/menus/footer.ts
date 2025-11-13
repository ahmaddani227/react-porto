import { RiLinkedinFill, RiMailFill } from "react-icons/ri";
import { LINKEDIN, EMAIL } from "../me";
import { FooterMenuType } from "../../types/menu";

export const footerMenu: Array<FooterMenuType> = [
  {
    url: EMAIL.url,
    Svg: RiMailFill,
  },
  {
    url: LINKEDIN.url,
    Svg: RiLinkedinFill,
  },
];
