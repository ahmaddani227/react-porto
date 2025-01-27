import NavbarLayouts from "../NavbarLayouts";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import {
  getBrandMenu,
  getContactMenu,
  getRegularMenu,
} from "../../../utils/navbarMenu";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

function Navbar() {
  const isDekstop = useMediaQuery();

  const brandMenu = getBrandMenu();
  const regularMenu = getRegularMenu(isDekstop);
  const contactMenu = getContactMenu();

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
