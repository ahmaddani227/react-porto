import { useEffect, useState } from "react";
import { contactsSidebar, sidebarData } from "../../../constants/menu";
import IDE from "../Ide";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import ActivityBar from "./Sidebar/ActivityBar";
import SidebarMenu from "./Sidebar/SidebarMenu";
import ContactsLink from "./Sidebar/ContactsLink";
import SidebarLink from "./Sidebar/SidebarLink";

function About() {
  type Tab = {
    id: string;
    title: string;
  };

  const [tabs, setTabs] = useState<Tab[]>([
    { id: "Experience", title: "experience" },
  ]);
  const [activeTab, setActiveTab] = useState("Experience");

  const handleAddTab = (id: string, title: string) => {
    if (!tabs.find((tab) => tab.id === id)) {
      setTabs((prev) => [...prev, { id, title }]);
    }
    setActiveTab(id);
  };

  const handleCloseTab = (e: any, tabId: string) => {
    e.stopPropagation();
    setTabs((prev) => prev.filter((tab) => tab.id !== tabId));
    if (activeTab === tabId) {
      setActiveTab(tabs[0]?.id);
    }
  };

  const ActiveContent = sidebarData
    .flatMap((item) => item.sidebarData)
    .find((subItem) => subItem.id === activeTab)?.Content;

  const isDekstop = useMediaQuery("(min-width: 1024px)");

  const defaultExpendedFolders = (isDekstop: boolean) => {
    return sidebarData.reduce<{ [key: string]: boolean }>((acc, { title }) => {
      acc[title] = isDekstop;
      return acc;
    }, {});
  };

  const [expendedFolders, setExpendedFolders] = useState(
    defaultExpendedFolders(isDekstop)
  );

  useEffect(() => {
    setExpendedFolders(defaultExpendedFolders(isDekstop));
  }, [isDekstop]);

  const handleToggle = (id: string) => {
    setExpendedFolders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [activeActivityBar, setActiveActivityBar] =
    useState("Profesional Info");

  const subMenu = isDekstop
    ? sidebarData.filter((item) => item.id === activeActivityBar)
    : sidebarData;

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
            {subMenu.map((item) => (
              <SidebarMenu
                key={item.id}
                toggle={handleToggle}
                expendedFolders={expendedFolders}
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
              toggle={handleToggle}
              expendedFolders={expendedFolders}
              data={{ id, title }}
            >
              {contactsMenu.map((item, index) => (
                <ContactsLink key={index} data={item} />
              ))}
            </SidebarMenu>
          </div>
        </IDE.Sidebar>

        <IDE.TabBar
          activeTab={activeTab}
          tabs={tabs}
          setActiveTab={setActiveTab}
          closeTab={handleCloseTab}
        >
          {ActiveContent ? (
            <ActiveContent />
          ) : (
            <div className="p-2">No Content Available</div>
          )}
        </IDE.TabBar>
      </IDE>
    </>
  );
}

export default About;
