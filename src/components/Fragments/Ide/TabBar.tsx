import { RiCloseFill } from "react-icons/ri";

type Tab = {
  id: string;
  title: string;
};

interface TabBarProps {
  children: React.ReactNode;
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
  children,
}: TabBarProps) {
  return (
    <div className="flex flex-col w-full h-full overflow-x-auto">
      <div
        id="tab-bar"
        className="w-full overflow-x-scroll overflow-y-hidden border-t border-b border-collapse lg:border-t-0 border-midnight-slate min-h-[38px] lg:min-h-max"
      >
        <div className="flex w-max">
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
      </div>
      {children}
    </div>
  );
}
