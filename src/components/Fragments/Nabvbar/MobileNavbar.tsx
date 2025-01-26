import { useEffect, useState } from "react";
import { RiCloseFill, RiMenuLine } from "react-icons/ri";
import NavbarLayouts from "../../Layouts/NavbarLayouts";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { getBrandMenu, getRegularMenu } from "../../../utils/navbarMenu";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

function MobileNavbar() {
  const isDekstop = useMediaQuery();

  const brandMenu = getBrandMenu();
  const regularMenu = getRegularMenu(isDekstop);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hendleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <NavbarLayouts headerClassName="lg:hidden" navClassName="h-[63px] relative">
      <div className="flex items-center justify-between w-full h-full p-fluid text-slate-muted">
        {brandMenu && (
          <Link
            to={brandMenu.pathName}
            className="flex items-center h-full text-sm"
          >
            {brandMenu.title}
          </Link>
        )}

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
          {regularMenu.map((menu: any, index: number) => (
            <NavLink
              key={index}
              classname={menu.classname}
              pathName={menu.pathName}
            >
              {menu.title}
            </NavLink>
          ))}
        </div>
      )}
    </NavbarLayouts>
  );
}

export default MobileNavbar;
