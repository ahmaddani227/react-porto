import { useState } from "react";

// Komponen konten terpisah
const BioContent = () => (
  <div>
    <h2 className="text-2xl font-bold">Bio</h2>
    <p>This is the content for Bio.</p>
  </div>
);

const CertificationContent = () => (
  <div>
    <h2 className="text-2xl font-bold">Certification</h2>
    <p>This is the content for Certification.</p>
  </div>
);

const EducationContent = () => (
  <div>
    <h2 className="text-2xl font-bold">Education</h2>
    <p>This is the content for Education.</p>
  </div>
);

const TabsPage = () => {
  type Tab = {
    id: number;
    title: string;
  };

  const [tabs, setTabs] = useState<Tab[]>([{ id: 1, title: "Bio" }]);
  const [activeTab, setActiveTab] = useState(1);

  const addTab = (title: string) => {
    const existingTab = tabs.find((tab) => tab.title === title);
    if (existingTab) {
      setActiveTab(existingTab.id); // Pindah ke tab yang sudah ada
    } else {
      const newTabId = tabs.length + 1;
      const newTab = {
        id: newTabId,
        title,
      };
      setTabs([...tabs, newTab]);
      setActiveTab(newTabId);
    }
  };

  const closeTab = (id: number) => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);
    if (id === activeTab && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0].id); // Pindah ke tab pertama jika yang aktif ditutup
    } else if (updatedTabs.length === 0) {
      setActiveTab(0); // Jika tidak ada tab tersisa, set active tab ke 0
    }
  };

  const handleSidebarClick = (section: string) => {
    if (section === "certification") {
      addTab("Certification");
    } else if (section === "education") {
      addTab("Education");
    } else if (section === "bio") {
      addTab("Bio");
    }
  };

  // Fungsi untuk merender konten berdasarkan tab yang aktif
  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <BioContent />;
      case 2:
        return <CertificationContent />;
      case 3:
        return <EducationContent />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 p-4 text-white bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold">Sidebar</h3>
        <button
          className="w-full px-4 py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => handleSidebarClick("certification")}
        >
          Certification
        </button>
        <button
          className="w-full px-4 py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => handleSidebarClick("education")}
        >
          Education
        </button>
        <button
          className="w-full px-4 py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => handleSidebarClick("bio")}
        >
          Bio
        </button>
      </div>

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        {/* TabBar */}
        <div className="flex p-2 bg-gray-100">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`px-4 py-2 rounded-t-lg cursor-pointer ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } mr-2 flex items-center justify-between`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
              <button
                className="ml-2 text-gray-400 bg-transparent hover:text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.id);
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 border-t border-gray-300">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default TabsPage;
