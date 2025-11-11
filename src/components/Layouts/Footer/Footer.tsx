import { RiGithubFill } from "react-icons/ri";
import FooterLayouts from "../FooterLayouts";
import SosmedLink from "./SosmedLink";
import { GITHUB } from "../../../constants/sosmed";
import { footerMenu } from "../../../constants/menu/footer";
import { FooterMenuType } from "../../../types/menu";

function Footer() {
  return (
    <FooterLayouts classname="">
      <div className="flex justify-between w-full h-full lg:justify-normal">
        <h1 className="footer-title">find me in:</h1>
        <div className="flex justify-end lg:justify-normal">
          {footerMenu.map((item: FooterMenuType, index: number) => (
            <SosmedLink
              key={index}
              url={item.url}
              Svg={item.Svg}
              classname="px-3 border-r first:border-l last:border-r-0 lg:last:border-r"
            />
          ))}
        </div>
      </div>

      <div className="hidden lg:inline">
        <SosmedLink
          url={GITHUB.url}
          Svg={RiGithubFill}
          classname="px-6 border-l"
        >
          {GITHUB.username}
        </SosmedLink>
      </div>
    </FooterLayouts>
  );
}

export default Footer;
