import { RiGithubFill } from "react-icons/ri";
import FooterLayouts from "../../Layouts/FooterLayouts";
import { footerMenu } from "../../../constants/menu";
import Sosmed from "./Sosmed";
import { GITHUB } from "../../../constants/sosmed";

function Footer() {
  return (
    <FooterLayouts classname="hidden lg:block">
      <div className="flex h-full">
        <h1 className="flex items-center h-full px-6 text-sm border-r text-slate-muted border-midnight-slate">
          find me in:
        </h1>
        {footerMenu.map((item: any, index: number) => (
          <Sosmed
            key={index}
            url={item.url}
            Svg={item.Svg}
            classname="px-3 border-r"
          />
        ))}
      </div>
      <a
        href={GITHUB.url}
        target="_blank"
        className="px-6 border-l footer-sosmed"
      >
        {GITHUB.username}
        <span className="ml-1">
          <RiGithubFill className="w-6 h-6 fill-slate-muted" />
        </span>
      </a>
    </FooterLayouts>
  );
}

export default Footer;
