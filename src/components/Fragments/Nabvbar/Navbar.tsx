import NavbarLayouts from "../../Layouts/NavbarLayouts";
import { menu } from "../../../constants/menu";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

function Navbar() {
  const brandMenu = menu.find((item) => item.title === "ahmad dani");
  const regularMenu = menu.filter(
    (item) => item.title !== "_contact-me" && item.title !== "ahmad dani"
  );
  const contactMenu = menu.filter((item) => item.title === "_contact-me");

  return (
    <NavbarLayouts headerClassName="hidden lg:block" navClassName="h-[45px]">
      <div className="flex h-full">
        {brandMenu && (
          <Link
            to={brandMenu.pathName}
            className={`nav-link ${brandMenu.classname}`}
          >
            {brandMenu.title}
          </Link>
        )}
        {regularMenu.map((menu: any, index: number) => (
          <NavLink
            key={index}
            pathName={menu.pathName}
            classname={menu.classname}
          >
            {menu.title}
          </NavLink>
        ))}
      </div>
      {contactMenu.map((menu: any, index: number) => (
        <NavLink
          key={index}
          pathName={menu.pathName}
          classname={menu.classname}
        >
          {menu.title}
        </NavLink>
      ))}
    </NavbarLayouts>
  );
}

export default Navbar;
