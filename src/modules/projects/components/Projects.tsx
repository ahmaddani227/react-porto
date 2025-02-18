import { useMediaQuery } from "../../../hooks/useMediaQuery";
import IDE from "../../../components/Layouts/Ide";
import { sidebarProjects } from "../../../constants/menu/sidebar";
import SidebarMenu from "../../../components/Layouts/Sidebar/SidebarMenu";
import SidebarLink from "../../../components/Layouts/Sidebar/SidebarLink";
import Content from "../../../components/Layouts/Ide/Content";
import { projects } from "../../../constants/projects";
import Card from "../../../components/elements/Card";
import { useIde } from "../../../hooks/useIde";

const Projects = () => {
  const isDekstop = useMediaQuery();

  const initialTabs = [{ id: "All", title: "all" }];
  const initialExpandedFolders = { Projects: isDekstop };

  const {
    tabs,
    activeTab,
    setActiveTab,
    expandedFolders,
    handleAddTab,
    handleToggleFolder,
    handleCloseTab,
  } = useIde(isDekstop, initialTabs, initialExpandedFolders);

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
                classname="border-0"
                key={item.id}
                toggle={handleToggleFolder}
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
            <div className="my-5 px-fluid lg:p-16">
              <div className=" projects-container">
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
