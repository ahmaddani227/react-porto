import { useEffect, useState } from "react";
import { RiCloseFill, RiMenuLine } from "react-icons/ri";
import NavbarLayouts from "../../Layouts/NavbarLayouts";
import { menuNavbarMobile } from "../../../constants/menu";

const NavItem = ({ children }: React.PropsWithChildren) => {
  return (
    <li className="py-4 border-b px-fluid border-midnight-slate hover:bg-midnight-slate">
      {children}
    </li>
  );
};

interface NavLinkProps {
  children?: React.ReactNode;
  classname?: string;
  pathName: string;
}

const NavLink = ({
  children,
  pathName,
  classname = "text-slate-muted",
}: NavLinkProps) => {
  return (
    <a
      href={pathName}
      className={`flex items-center h-full text-base ${classname}`}
    >
      {children}
    </a>
  );
};

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hendleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
    }
  }, []);

  return (
    <NavbarLayouts headerClassName="lg:hidden" navClassName="h-[63px] relative">
      <div className="flex items-center justify-between w-full h-full p-fluid text-slate-muted">
        <a href="#" className="flex items-center h-full text-sm">
          ahmad dani
        </a>

        <button className="inline-block" onClick={hendleOpen}>
          {isOpen ? (
            <RiCloseFill className="w-7 h-7" />
          ) : (
            <RiMenuLine className="w-7 h-7" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full min-h-screen top-16 bg-midnight-blue">
          <ul className="flex flex-col">
            {menuNavbarMobile.map((menu: any, index: number) => (
              <NavItem key={index}>
                <NavLink classname={menu.classname} pathName={menu.pathName}>
                  {menu.title}
                </NavLink>
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </NavbarLayouts>
  );
}

export default MobileNavbar;
