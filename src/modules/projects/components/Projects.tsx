import { useEffect, useState } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import IDE from "../../../components/Layouts/Ide";
import { sidebarProjects } from "../../../constants/menu/sidebar";
import SidebarMenu from "../../../components/Layouts/Sidebar/SidebarMenu";
import SidebarLink from "../../../components/Layouts/Sidebar/SidebarLink";
import Content from "../../../components/Layouts/Ide/Content";
import { projects } from "../../../constants/projects";
import Card from "../../../components/elements/Card";

const Projects = () => {
  const isDekstop = useMediaQuery();

  type Tab = {
    id: string;
    title: string;
  };

  type ExpandedFoldersType = {
    [key: string]: boolean;
  };

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

  const [tabs, setTabs] = useState<Tab[]>([{ id: "All", title: "all;" }]);
  const [activeTab, setActiveTab] = useState("All");

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

  const visibleProjects =
    activeTab === "All"
      ? projects
      : projects.filter((item) =>
          item.techstack.some(
            (tech) => tech.toLowerCase() === activeTab.toLowerCase()
          )
        );

  return (
    <>
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
                  {item.sidebarData.map((item) => (
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

        <IDE.Main>
          <IDE.TabBar
            activeTab={activeTab}
            tabs={tabs}
            setActiveTab={setActiveTab}
            closeTab={handleCloseTab}
          />
          <Content>
            <div className="ps-2 pe-8 md:p-16">
              <div className="projects-container">
                {visibleProjects.map((project, index) => (
                  <Card key={index} data={project} />
                ))}
              </div>
            </div>
          </Content>
        </IDE.Main>
      </IDE>
    </>
  );
};

export default Projects;
