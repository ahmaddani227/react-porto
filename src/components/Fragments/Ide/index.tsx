import TabBar from "./TabBar";

const Sidebar = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="flex h-full border-r border-midnight-slate min-w-[275px]">
      {children}
    </aside>
  );
};

const IDE = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="h-screen lg:h-[calc(100vh-149px)]">
      <div className="flex flex-col h-auto space-y-5 lg:h-full lg:flex-row lg:space-y-0">
        {children}
      </div>
    </main>
  );
};

IDE.Sidebar = Sidebar;
IDE.TabBar = TabBar;

export default IDE;
