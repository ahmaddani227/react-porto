import { useState } from "react";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import { sidebarData } from "../../../constants/menu";

export default function IDE() {
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

  return (
    <main>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar addTab={handleAddTab} activeTab={activeTab} />

        <div className="flex flex-col w-full overflow-x-auto">
          <div
            id="tab-bar"
            className="w-full overflow-x-scroll border-b border-collapse border-midnight-slate"
          >
            {/* TabBar */}
            <TabBar
              activeTab={activeTab}
              tabs={tabs}
              setActiveTab={setActiveTab}
              closeTab={handleCloseTab}
            />
          </div>

          {/* Content */}
          {ActiveContent ? <ActiveContent /> : <div>No Content Available</div>}
        </div>
      </div>
    </main>
  );
}
