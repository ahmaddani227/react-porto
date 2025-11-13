import NavbarLayouts from "../NavbarLayouts";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import {
  navbarBrandMenu,
  navbarContactMenu,
  navbarMainMenu,
} from "../../../constants/menus/navbar";
import { NavbarMenuType } from "../../../types/menu";

function Navbar() {
  const brandMenu = navbarBrandMenu;
  const regularMenu = navbarMainMenu;
  const contactMenu = navbarContactMenu;

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
        {regularMenu.map((menu: NavbarMenuType, index: number) => (
          <NavLink
            key={index}
            pathName={menu.pathName}
            classname={menu.classname}
          >
            {menu.title}
          </NavLink>
        ))}
      </div>
      {contactMenu && (
        <NavLink
          pathName={contactMenu.pathName}
          classname={`nav-link ${contactMenu.classname}`}
        >
          {contactMenu.title}
        </NavLink>
      )}
    </NavbarLayouts>
  );
}

export default Navbar;
