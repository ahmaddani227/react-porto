import { sidebarAbout } from "../../../constants/menu/sidebar";

interface ActivityBarProps {
  activeActivityBar: string;
  setActiveActivityBar: (activityBarId: string) => void;
}

const ActivityBar = ({
  activeActivityBar,
  setActiveActivityBar,
}: ActivityBarProps) => {
  return (
    <div className="hidden border-r border-midnight-slate lg:block">
      <div className="flex flex-col px-5 py-6 gap-y-6">
        {sidebarAbout.map(({ id, Svg }) => {
          const Icon = Svg; // alias biar jelas

          return (
            <button key={id} onClick={() => setActiveActivityBar(id)}>
              {Icon ? (
                <Icon
                  className={`w-6 h-6 transition fill-slate-muted ${
                    activeActivityBar !== id
                      ? "opacity-40 hover:opacity-100"
                      : ""
                  }`}
                />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityBar;
