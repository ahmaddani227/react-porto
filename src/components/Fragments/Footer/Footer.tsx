import { RiGithubFill } from "react-icons/ri";
import FooterLayouts from "../../Layouts/FooterLayouts";
import SosmedLink from "./SosmedLink";
import { GITHUB } from "../../../constants/sosmed";
import { footerMenu } from "../../../constants/menu/footer";

function Footer() {
  return (
    <FooterLayouts classname="hidden lg:block">
      <div className="flex h-full">
        <h1 className="footer-title">find me in:</h1>
        {footerMenu.map((item: any, index: number) => (
          <SosmedLink
            key={index}
            url={item.url}
            Svg={item.Svg}
            classname="px-3 border-r"
          />
        ))}
      </div>
      <SosmedLink url={GITHUB.url} Svg={RiGithubFill} classname="px-6 border-l">
        {GITHUB.username}
      </SosmedLink>
    </FooterLayouts>
  );
}

export default Footer;
