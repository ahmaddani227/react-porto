import TabBar from "./TabBar";

const Sidebar = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="flex min-h-full grow-0 border-r border-midnight-slate min-w-[275px]">
      {children}
    </aside>
  );
};

const Main = ({ children }: React.PropsWithChildren) => {
  return <div className="flex flex-col w-full overflow-hidden">{children}</div>;
};

const IDE = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col h-auto lg:h-full lg:flex-row lg:space-y-0">
      {children}
    </div>
  );
};

IDE.Sidebar = Sidebar;
IDE.Main = Main;
IDE.TabBar = TabBar;

export default IDE;
