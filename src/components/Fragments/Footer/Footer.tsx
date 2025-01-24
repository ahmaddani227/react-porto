import { RiGithubFill } from "react-icons/ri";
import FooterLayouts from "../../Layouts/FooterLayouts";
import { footerMenu } from "../../../constants/menu";
import Sosmed from "./Sosmed";
import { GITHUB } from "../../../constants/sosmed";

function Footer() {
  return (
    <FooterLayouts classname="hidden lg:block">
      <div className="flex h-full">
        <h1 className="footer-title">find me in:</h1>
        {footerMenu.map((item: any, index: number) => (
          <Sosmed
            key={index}
            url={item.url}
            Svg={item.Svg}
            classname="px-3 border-r"
          />
        ))}
      </div>
      <Sosmed url={GITHUB.url} Svg={RiGithubFill} classname="px-6 border-l">
        {GITHUB.username}
      </Sosmed>
    </FooterLayouts>
  );
}

export default Footer;
