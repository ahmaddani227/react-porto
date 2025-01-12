import { RiCloseFill } from "react-icons/ri";

type Tab = {
  id: string;
  title: string;
};

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  closeTab: (e: React.MouseEvent<HTMLButtonElement>, tabId: string) => void;
}

export default function TabBar({
  tabs,
  activeTab,
  setActiveTab,
  closeTab,
}: TabBarProps) {
  return (
    <div className="flex min-h-[39px] w-max">
      {tabs?.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center h-full py-2 border-r cursor-pointer border-midnight-slate w-max ${
            tab.id === activeTab
              ? "bg-midnight-slate text-white"
              : "text-slate-muted"
          }`}
        >
          <p className="px-3 text-sm">{tab.title}</p>
          <button
            onClick={(e) => closeTab(e, tab.id)}
            className="mx-3 transition hover:scale-[1.3]"
          >
            <RiCloseFill className="w-4 h-4 " />
          </button>
        </div>
      ))}
    </div>
  );
}
