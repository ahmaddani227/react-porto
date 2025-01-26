import { footerMenu } from "../../../constants/menu/footer";
import FooterLayouts from "../../Layouts/FooterLayouts";
import SosmedLink from "./SosmedLink";

function MobileFooter() {
  return (
    <FooterLayouts classname="lg:hidden">
      <div className="flex justify-between w-full h-full">
        <h1 className="footer-title">find me in:</h1>

        <div className="flex justify-end">
          {footerMenu.map((item: any, index: number) => (
            <SosmedLink
              key={index}
              url={item.url}
              Svg={item.Svg}
              classname="px-3 border-l"
            />
          ))}
        </div>
      </div>
    </FooterLayouts>
  );
}

export default MobileFooter;
