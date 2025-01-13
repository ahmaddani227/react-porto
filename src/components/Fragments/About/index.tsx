import { useState } from "react";
import { sidebarData } from "../../../constants/menu";
import IDE from "../Ide";
import SidebarAbout from "./SidebarAbout";

function About() {
  // const defaultExpendedFolders = sidebarData.reduce<{ [key: string]: boolean }>(
  //   (acc, { title }) => {
  //     acc[title] = true;
  //     return acc;
  //   },
  //   {}
  // );

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

  // const [expendedFolders, setExpendedFolders] = useState(
  //   defaultExpendedFolders
  // );

  return (
    <IDE>
      <IDE.Sidebar>
        <SidebarAbout addTab={handleAddTab} activeTab={activeTab} />
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
  );
}

export default About;
