import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiFolder3Fill,
  RiGamepadFill,
  RiMailFill,
  RiPhoneFill,
  RiTerminalBoxFill,
  RiTriangleFill,
  RiUser4Fill,
} from "react-icons/ri";

const FolderData = [
  {
    id: "Experience",
    title: "experience",
    classname: {
      fillIcon: "fill-peach",
    },
  },
  {
    id: "Hard Skills",
    title: "hard-skills",
    classname: {
      fillIcon: "fill-mint-green",
    },
  },
  {
    id: "Soft Skills",
    title: "soft-skills",
    classname: {
      fillIcon: "fill-[#3A49A4]",
    },
  },
];

const ActivityBarData = [
  {
    id: "Profesinal Info",
    Svg: RiTerminalBoxFill,
    classname: "",
  },
  {
    id: "Personal Info",
    Svg: RiUser4Fill,
    classname: "opacity-40 hover:opacity-100",
  },
  {
    id: "Hobbies Info",
    Svg: RiGamepadFill,
    classname: "opacity-40 hover:opacity-100",
  },
];

interface FolderProps {
  addTab: (id: string, title: string) => void;
  activeTab: string;
  data: {
    id: string;
    title: string;
    classname: {
      fillIcon: string;
    };
  };
}

const Folder = ({ addTab, activeTab, data }: FolderProps) => {
  return (
    <button
      onClick={() => addTab(data.id, data.title)}
      className={`flex items-center text-sm gap-x-1 ${
        activeTab == data.id ? "text-white" : "text-slate-muted"
      }`}
    >
      {activeTab == data.id ? (
        <RiArrowDownSLine className="w-5 h-5 fill-slate-muted" />
      ) : (
        <RiArrowRightSLine className="w-5 h-5 fill-slate-muted" />
      )}
      <RiFolder3Fill
        className={`w-[18px] h-[18px] ${data.classname.fillIcon}`}
      />
      <span className="ps-2">{data.title}</span>
    </button>
  );
};

interface ActivityBarProps {
  Svg: any;
  classname: string;
}

const ActivityBar = ({ Svg, classname }: ActivityBarProps) => {
  return (
    <button>
      <Svg className={`w-6 h-6 transition fill-slate-muted ${classname}`} />
    </button>
  );
};

const Contacts = () => {
  return (
    <div className="flex flex-col">
      <div className="flex ps-2.5 py-2 border-b gap-x-2 border-midnight-slate">
        <RiTriangleFill className="w-2 h-2.w-2 rotate-[60deg]" />{" "}
        <p className="text-sm">contacts</p>
      </div>
      <div className="flex flex-col py-2 gap-y-2 ps-3 ">
        <a
          href="#"
          className="flex items-center text-sm text-slate-muted gap-x-1"
        >
          <RiMailFill className="w-5 h-5 fill-slate-muted" />{" "}
          <span className="ps-2.5">user@gmail.com</span>
        </a>
        <a
          href="#"
          className="flex items-center text-sm text-slate-muted gap-x-1"
        >
          <RiPhoneFill className="w-5 h-5 fill-slate-muted" />
          <span className="ps-2.5">+628531950</span>
        </a>
      </div>
    </div>
  );
};

interface SidebarProps {
  addTab: (id: string, title: string) => void;
  activeTab: string;
}

export default function Sidebar({ addTab, activeTab }: SidebarProps) {
  return (
    <aside className="flex min-h-[calc(100vh-149px)] border-r border-midnight-slate min-w-[275px]">
      <div className="border-r border-midnight-slate">
        <div className="flex flex-col px-5 py-6 gap-y-6">
          {ActivityBarData.map((item) => (
            <ActivityBar
              key={item.id}
              Svg={item.Svg}
              classname={item.classname}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <div className="flex items-center ps-2.5 py-2 border-b gap-x-2 border-midnight-slate">
            <RiTriangleFill className="w-2 h-2 rotate-[60deg]" />{" "}
            <p className="text-sm">professional-info</p>
          </div>
          <div className="flex flex-col p-1.5 border-b gap-y-2 border-midnight-slate">
            {FolderData.map((folder) => (
              <Folder
                key={folder.id}
                addTab={addTab}
                activeTab={activeTab}
                data={folder}
              />
            ))}
          </div>
        </div>
        <Contacts />
      </div>
    </aside>
  );
}
