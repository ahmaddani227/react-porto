import { RiInstagramFill, RiLinkedinFill, RiTiktokFill } from "react-icons/ri";
import { INSTAGRAM, LINKEDIN, TIKTOK } from "../sosmed";
import { FooterMenuType } from "../../types/menu";

export const footerMenu: Array<FooterMenuType> = [
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
