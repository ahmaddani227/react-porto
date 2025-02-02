import { useEffect, useState } from "react";
import IDE from "../../../components/Layouts/Ide";
import SidebarMenu from "../../../components/Layouts/Sidebar/SidebarMenu";
import { contacts } from "../../../constants/menu/contacts";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import ContactsLink from "../../../components/Layouts/Sidebar/ContactsLink";
import Content from "../../../components/Layouts/Ide/Content";
import FormPreview from "./FormPreview";
import InputField from "../../../components/elements/InputField";
import Button from "../../../components/elements/Button";

const Contact = () => {
  const isDekstop = useMediaQuery();

  type TabType = {
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

  const [tabs, setTabs] = useState<TabType[]>([
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

  type FormType = {
    name: string;
    email: string;
    message: string;
  };

  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });

  return (
    <>
      <h1 className="py-3 lg:hidden px-fluid">_contact-me</h1>
      <IDE>
        <IDE.Sidebar>
          <div className="flex flex-col w-full">
            {contacts.map((item) => (
              <SidebarMenu
                classname={`${
                  item.id === "Find Me Also" ? "border-0" : "border-b"
                }`}
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
              <div id="form-contact" className="form-contact-container">
                <form className="form-contact">
                  <InputField
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                    }}
                    title="_name"
                    type="text"
                    name="name"
                  />
                  <InputField
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
                    title="_email"
                    type="enail"
                    name="email"
                  />
                  <InputField
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                    }}
                    title="_message"
                    name="message"
                    isTextarea={true}
                  />
                  <Button>send-message</Button>
                </form>
              </div>
              <FormPreview dataForm={form} />
            </div>
          </Content>
        </IDE.Main>
      </IDE>
    </>
  );
};

export default Contact;
