import React from "react";

interface NavbarLayoutsProps extends React.PropsWithChildren {
  headerClassName?: string;
  navClassName?: string;
}

function NavbarLayouts({
  children,
  headerClassName = "",
  navClassName = "",
}: NavbarLayoutsProps) {
  return (
    <header className={` border-b border-midnight-slate ${headerClassName}`}>
      <nav className={`flex justify-between w-full ${navClassName}`}>
        {children}
      </nav>
    </header>
  );
}

export default NavbarLayouts;
