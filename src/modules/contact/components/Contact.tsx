import { useEffect, useState } from "react";
import IDE from "../../../components/Layouts/Ide";
import SidebarMenu from "../../../components/Layouts/Sidebar/SidebarMenu";
import { contacts } from "../../../constants/menu/contacts";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import ContactsLink from "../../../components/Layouts/Sidebar/ContactsLink";
import Content from "../../../components/Layouts/Ide/Content";
import CommentedContent from "../../../components/Layouts/Ide/CommentedContent";
import FormContact from "./FormContact";

const Contact = () => {
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

  const [tabs, setTabs] = useState<Tab[]>([
    { id: "Contacts", title: "contacts" },
  ]);
  const [activeTab, setActiveTab] = useState("Contacts");

  const handleCloseTab = (e: any, tabId: string) => {
    e.stopPropagation();
    setTabs((prev) => prev.filter((tab) => tab.id !== tabId));
    if (activeTab === tabId) {
      setActiveTab(tabs[0]?.id);
    }
  };

  return (
    <>
      <h1 className="py-3 lg:hidden px-fluid">_contact-me</h1>
      <IDE>
        <IDE.Sidebar>
          <div className="flex flex-col w-full">
            {contacts.map((item) => (
              <SidebarMenu
                key={item.id}
                toggle={handleToggle}
                expandedFolders={expandedFolders}
                data={item}
              >
                <div className="py-2 space-y-3 lg:ps-5">
                  {item.contactsMenu.map((item) => (
                    <ContactsLink key={item.title} data={item} />
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
            <div className="flex h-full lg:grid lg:grid-cols-2">
              <FormContact />
              <div className="hidden h-full lg:block">
                <div className="p-4">
                  <CommentedContent>
                    <p className="text-periwinkle-blue">
                      <span className="text-purple-400">const</span> button{" "}
                      <span className="text-white">= </span>
                      document.querySelector
                      <div className="inline text-slate-muted">(</div>
                      <span className="text-peach">'#sendBtn'</span>
                      <div className="inline text-slate-muted">);</div>
                    </p>
                    <p className="text-periwinkle-blue">
                      <span className="text-purple-400">const</span> message =
                    </p>
                  </CommentedContent>
                </div>
              </div>
            </div>
          </Content>
        </IDE.Main>
      </IDE>
    </>
  );
};

export default Contact;
