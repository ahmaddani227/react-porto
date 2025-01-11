import { useState } from "react";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import Content from "./Content";

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

  return (
    <main>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar addTab={handleAddTab} activeTab={activeTab} />

        <div className="flex flex-col w-full">
          {/* TabBar */}
          <TabBar
            activeTab={activeTab}
            tabs={tabs}
            setActiveTab={setActiveTab}
            closeTab={handleCloseTab}
          />

          {/* Content */}
          <Content>
            <h1>Hello World</h1>
            <button className="py-1.5 px-2 rounded-md my-3 bg-slate-muted">
              Add TabBar
            </button>
          </Content>
        </div>
      </div>
    </main>
  );
}
