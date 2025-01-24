import FooterLayouts from "../../Layouts/FooterLayouts";
import { footerMenu } from "../../../constants/menu";
import Sosmed from "./Sosmed";

function MobileFooter() {
  return (
    <FooterLayouts classname="lg:hidden">
      <div className="flex justify-between w-full h-full">
        <h1 className="footer-title">find me in:</h1>

        <div className="flex justify-end">
          {footerMenu.map((item: any, index: number) => (
            <Sosmed
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
