import { RiInstagramFill, RiLinkedinFill, RiTiktokFill } from "react-icons/ri";
import { INSTAGRAM, LINKEDIN, TIKTOK } from "../sosmed";

type FooterMenu = {
  url: string;
  Svg: any;
};

export const footerMenu: Array<FooterMenu> = [
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
