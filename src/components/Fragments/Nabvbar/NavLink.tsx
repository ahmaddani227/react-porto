import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
  children?: React.ReactNode;
  pathName: string;
  classname?: string;
}

const NavLink = ({
  children,
  pathName,
  classname = "bg-red-200",
}: NavLinkProps) => {
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

export default NavLink;
