import { ReactNode } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

interface SidebarMenuProps {
  children: ReactNode;
  toggle: (id: string) => void;
  expandedFolders: {
    [key: string]: boolean;
  };
  data: {
    id: string;
    title: string;
  };
}

const SidebarMenu = ({
  children,
  toggle,
  expandedFolders,
  data,
}: SidebarMenuProps) => {
  const { id, title } = data;

  return (
    <>
      <div className="flex flex-col space-y-1 lg:space-y-0">
        <button
          onClick={() => toggle(id)}
          className={`flex items-center w-full py-1 lg:cursor-text ps-3.5 lg:px-1 bg-midnight-slate lg:bg-transparent border-midnight-slate lg:border-b`}
        >
          <RiArrowDropDownFill
            className={`w-7 h-7 transition-all lg:rotate-0 duration-300 ${
              expandedFolders[id] ? `rotate-0` : `-rotate-90`
            }`}
          />
          <p className="text-sm">{title}</p>
        </button>
        <div
          className={`transition-all duration-300 lg:h-auto ease-in-out ${
            expandedFolders[id] ? `h-auto` : `h-0 overflow-hidden`
          }`}
        >
          <div
            className={`lg:flex flex-col ps-9 py-1.5 lg:p-1.5 space-y-2.5 border-midnight-slate ${
              id !== "Projects" && "lg:border-b"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
