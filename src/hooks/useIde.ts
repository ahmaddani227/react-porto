import { useState, useEffect } from "react";

type TabType = {
  id: string;
  title: string;
};

type ExpandedFoldersType = {
  [key: string]: boolean;
};

export const useIde = (
  isDekstop: boolean,
  initialTabs: TabType[],
  initialExpandedFolders: ExpandedFoldersType
) => {
  const [tabs, setTabs] = useState<TabType[]>(initialTabs);
  const [activeTab, setActiveTab] = useState<string>(initialTabs[0]?.id || "");
  const [expandedFolders, setExpandedFolders] = useState<ExpandedFoldersType>(
    initialExpandedFolders
  );

  const handleAddTab = (id: string, title: string) => {
    if (!tabs.find((tab) => tab.id === id)) {
      setTabs((prev) => [...prev, { id, title }]);
    }
    setActiveTab(id);
  };

  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    setTabs((prev) => prev.filter((tab) => tab.id !== tabId));
    if (activeTab === tabId && tabs.length > 1) {
      setActiveTab(tabs[0]?.id);
    }
  };

  const handleToggleFolder = (id: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    setExpandedFolders(initialExpandedFolders);
  }, [isDekstop]);

  return {
    tabs,
    activeTab,
    setActiveTab,
    expandedFolders,
    handleAddTab,
    handleCloseTab,
    handleToggleFolder,
  };
};
