import { useEffect, useState } from "react";
import { sidebarData } from "../../../constants/menu";
import IDE from "../Ide";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import SidebarAbout from "./Sidebar";

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

  return (
    <>
      <h1 className="py-2 lg:hidden px-fluid">_about</h1>
      <IDE>
        <IDE.Sidebar>
          <SidebarAbout
            addTab={handleAddTab}
            activeTab={activeTab}
            expendedFolders={expendedFolders}
            toggle={handleToggle}
          />
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
