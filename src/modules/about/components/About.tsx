import { useEffect, useState } from "react";
import { sidebarAbout } from "../../../constants/menu/sidebar";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { contactsSidebar } from "../../../constants/menu/contacts";
import IDE from "../../../components/Layouts/Ide";
import ActivityBar from "../../../components/Layouts/Sidebar/ActivityBar";
import SidebarMenu from "../../../components/Layouts/Sidebar/SidebarMenu";
import SidebarLink from "../../../components/Layouts/Sidebar/SidebarLink";
import ContactsLink from "../../../components/Layouts/Sidebar/ContactsLink";

function About() {
  type TabType = {
    id: string;
    title: string;
  };

  const [tabs, setTabs] = useState<TabType[]>([
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

  const ActiveContent = sidebarAbout
    .flatMap((item) => item.sidebarData)
    .find((subItem) => subItem.id === activeTab)?.Content;

  const isDekstop = useMediaQuery();

  const defaultExpandedFolders = (isDekstop: boolean) => {
    return sidebarAbout.reduce<{ [key: string]: boolean }>((acc, { title }) => {
      acc[title] = isDekstop;
      return acc;
    }, {});
  };

  const [expandedFolders, setExpandedFolders] = useState(
    defaultExpandedFolders(isDekstop)
  );

  useEffect(() => {
    setExpandedFolders(defaultExpandedFolders(isDekstop));
  }, [isDekstop]);

  const handleToggle = (id: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
                toggle={handleToggle}
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
              toggle={handleToggle}
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
