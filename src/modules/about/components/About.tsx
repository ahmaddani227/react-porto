import { useState } from "react";
import { sidebarAbout } from "../../../constants/menus/sidebar";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { contactsSidebar } from "../../../constants/menus/contacts";
import IDE from "../../../components/Layouts/Ide";
import ActivityBar from "../../../components/Layouts/Sidebar/ActivityBar";
import SidebarMenu from "../../../components/Layouts/Sidebar/SidebarMenu";
import SidebarLink from "../../../components/Layouts/Sidebar/SidebarLink";
import ContactsLink from "../../../components/Layouts/Sidebar/ContactsLink";
import { useIde } from "../../../hooks/useIde";

function About() {
  const isDekstop = useMediaQuery();

  const defaultExpandedFolders = (isDekstop: boolean) => {
    return sidebarAbout.reduce<{ [key: string]: boolean }>((acc, { title }) => {
      acc[title] = isDekstop;
      return acc;
    }, {});
  };

  const initialTabs = [{ id: "Dashboard", title: "dashboard" }];
  const initialExpandedFolders = defaultExpandedFolders(isDekstop);

  const {
    tabs,
    activeTab,
    setActiveTab,
    expandedFolders,
    handleAddTab,
    handleCloseTab,
    handleToggleFolder,
  } = useIde(isDekstop, initialTabs, initialExpandedFolders);

  const ActiveContent = sidebarAbout
    .flatMap((item) => item.sidebarData)
    .find((subItem) => subItem.id === activeTab)?.Content;

  const [activeActivityBar, setActiveActivityBar] =
    useState("Profesional Info");

  const menu = isDekstop
    ? sidebarAbout.filter((item) => item.id === activeActivityBar)
    : sidebarAbout;

  const { id, title, contactsMenu } = contactsSidebar;

  return (
    <>
      <h1 className="py-3 lg:hidden px-fluid">_about</h1>
      <IDE>
        <IDE.Sidebar>
          <ActivityBar
            activeActivityBar={activeActivityBar}
            setActiveActivityBar={setActiveActivityBar}
          />
          <div className="flex flex-col w-full">
            {menu.map((item) => (
              <SidebarMenu
                key={item.id}
                toggle={handleToggleFolder}
                expandedFolders={expandedFolders}
                data={item}
              >
                {item.sidebarData.map((item) => (
                  <SidebarLink
                    key={item.id}
                    addTab={handleAddTab}
                    activeTab={activeTab}
                    data={item}
                  />
                ))}
              </SidebarMenu>
            ))}
            <SidebarMenu
              classname="border-0"
              toggle={handleToggleFolder}
              expandedFolders={expandedFolders}
              data={{ id, title }}
            >
              {contactsMenu.map((item, index) => (
                <ContactsLink key={index} data={item} />
              ))}
            </SidebarMenu>
          </div>
        </IDE.Sidebar>

        <IDE.Main>
          <IDE.TabBar
            activeTab={activeTab}
            tabs={tabs}
            setActiveTab={setActiveTab}
            closeTab={handleCloseTab}
          />
          {ActiveContent ? (
            <ActiveContent />
          ) : (
            <div className="p-2">No Content Available</div>
          )}
        </IDE.Main>
      </IDE>
    </>
  );
}

export default About;
