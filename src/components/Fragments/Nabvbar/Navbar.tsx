import NavbarLayouts from "../../Layouts/NavbarLayouts";
import { menu } from "../../../constants/menu";
import { Link, NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
  children?: React.ReactNode;
  pathName: string;
  classname?: string;
}

const NavLink = ({ children, pathName, classname = "" }: NavLinkProps) => {
  return (
    <RouterNavLink
      to={pathName}
      className={({ isActive }: { isActive: boolean }) =>
        `nav-link ${classname} ${isActive && "nav-active"}`
      }
    >
      {children}
    </RouterNavLink>
  );
};

function Navbar() {
  const brandMenu = menu.find((item) => item.title === "ahmad dani");
  const regularMenu = menu.filter(
    (item) => item.title !== "_contact-me" && item.title !== "ahmad dani"
  );
  const contactMenu = menu.filter((item) => item.title === "_contact-me");

  return (
    <NavbarLayouts headerClassName="hidden lg:block" navClassName="h-[45px]">
      <div className="flex h-full text-slate-muted">
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
