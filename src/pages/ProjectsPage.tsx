import { useEffect, useState } from "react";
import SidebarMenu from "../components/Fragments/About/Sidebar/SidebarMenu";
import IDE from "../components/Fragments/Ide";
import { sidebarProjects } from "../constants/menu";
import { useMediaQuery } from "../hooks/useMediaQuery";
import SidebarLink from "../components/Fragments/About/Sidebar/SidebarLink";
import AppLayouts from "../components/Layouts/AppLayouts";
import Projects from "./Projects";

const ProjectsPage = () => {
  type Tab = {
    id: string;
    title: string;
  };

  type ExpandedFoldersType = {
    [key: string]: boolean;
  };
  const isDekstop = useMediaQuery("(min-width: 1024px)"); // Bolean

  const [expandedFolders, setExpandedFolders] = useState<ExpandedFoldersType>({
    Projects: isDekstop,
  });

  useEffect(() => {
    setExpandedFolders({ Projects: isDekstop });
  }, [isDekstop]);

  const handleToggle = (id: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [tabs, setTabs] = useState<Tab[]>([
    { id: "Projects", title: "projects" },
  ]);
  const [activeTab, setActiveTab] = useState("Projects");

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

  const ActiveContent = Projects;

  return (
    <AppLayouts>
      <h1 className="py-3 lg:hidden px-fluid">_projects</h1>
      <IDE>
        <IDE.Sidebar>
          <div className="flex flex-col w-full">
            {sidebarProjects.map((item) => (
              <SidebarMenu
                key={item.id}
                toggle={handleToggle}
                expandedFolders={expandedFolders}
                data={item}
              >
                <div className="space-y-4 lg:py-3">
                  {item.sidebarMenu.map((item) => (
                    <SidebarLink
                      key={item.id}
                      addTab={handleAddTab}
                      activeTab={activeTab}
                      data={item}
                    />
                  ))}
                </div>
              </SidebarMenu>
            ))}
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
    </AppLayouts>
  );
};

export default ProjectsPage;
