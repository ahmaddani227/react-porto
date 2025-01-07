import NavbarLayouts from "../../Layouts/NavbarLayouts";
import { menu } from "../../../constants/menu";

interface NavLinkProps {
  children?: React.ReactNode;
  pathName: string;
  classname?: string;
}

const NavLink = ({ children, pathName, classname = "" }: NavLinkProps) => {
  return (
    <a href={pathName} className={`nav-link ${classname}`}>
      {children}
    </a>
  );
};

function Navbar() {
  const regularMenu = menu.filter((item) => item.title !== "_contact-me");
  const contactMenu = menu.filter((item) => item.title === "_contact-me");

  return (
    <NavbarLayouts headerClassName="hidden lg:block" navClassName="h-[45px]">
      <div className="flex h-full text-slate-muted">
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
