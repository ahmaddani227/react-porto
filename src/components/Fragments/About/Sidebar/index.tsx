import { Fragment, useState } from "react";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { sidebarData } from "../../../../constants/menu";
import ActivityBar from "./ActivityBar";
import { RiArrowDropDownFill } from "react-icons/ri";
import Contacts from "./Contacts";
import SidebarLink from "./SidebarLink";

interface SidebarAboutProps {
  addTab: (id: string, title: string) => void;
  activeTab: string;
  expendedFolders: {
    [key: string]: boolean;
  };
  toggle: (id: string) => void;
}

const SidebarAbout = ({
  addTab,
  activeTab,
  expendedFolders,
  toggle,
}: SidebarAboutProps) => {
  const [activeActivityBar, setActiveActivityBar] =
    useState("Profesional Info");

  const isDekstop = useMediaQuery("(min-width: 1024px)");

  const subMenu = isDekstop
    ? sidebarData.filter((item) => item.id === activeActivityBar)
    : sidebarData;

  return (
    <>
      <ActivityBar
        activeActivityBar={activeActivityBar}
        setActiveActivityBar={setActiveActivityBar}
      />
      <div className="flex flex-col w-full">
        <div className="flex flex-col space-y-0.5 lg:space-y-0">
          {subMenu.map((item) => (
            <Fragment key={item.id}>
              <button
                onClick={() => toggle(item.id)}
                className="flex items-center w-full py-1 lg:cursor-text ps-3.5 lg:px-1 lg:border-b bg-midnight-slate lg:bg-transparent border-midnight-slate"
              >
                <RiArrowDropDownFill
                  className={`w-7 h-7 transition-all lg:rotate-0 duration-300 ${
                    expendedFolders[item.id] ? `rotate-0` : `-rotate-90`
                  }`}
                />
                <p className="text-sm">{item.title}</p>
              </button>
              {/* Sub Folder */}
              <div
                className={`transition-all duration-300 lg:h-auto ease-in-out ${
                  expendedFolders[item.id] ? `h-auto` : `h-0 overflow-hidden`
                }`}
              >
                <div
                  className={`lg:flex flex-col ps-9 py-1.5 lg:p-1.5 lg:border-b space-y-2.5 border-midnight-slate`}
                >
                  {item.sidebarData.map((item) => (
                    <SidebarLink
                      key={item.id}
                      addTab={addTab}
                      activeTab={activeTab}
                      data={item}
                    />
                  ))}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <Contacts />
      </div>
    </>
  );
};

export default SidebarAbout;
