import TabBar from "./TabBar";

const Sidebar = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="flex min-h-[calc(100vh-149px)] border-r border-midnight-slate min-w-[275px]">
      {children}
    </aside>
  );
};

const IDE = ({ children }: React.PropsWithChildren) => {
  return (
    <main>
      <div className="flex">{children}</div>
    </main>
  );
};

IDE.Sidebar = Sidebar;
IDE.TabBar = TabBar;

export default IDE;
