import {
  RiArrowRightSLine,
  RiFolder3Fill,
  RiMarkdownFill,
} from "react-icons/ri";

interface SidebarLinkProps {
  addTab: (id: string, title: string) => void;
  activeTab: string;
  data: {
    id: string;
    title: string;
    type: string;
    classname: {
      fillIcon: string;
    };
  };
}

const SidebarLink = ({ addTab, activeTab, data }: SidebarLinkProps) => {
  return (
    <button
      onClick={() => addTab(data.id, data.title)}
      className={`flex items-center text-sm text-slate-muted transition hover:text-white gap-x-1 ${
        data.type == "file" && "ml-6"
      } ${activeTab == data.id && "text-white"}`}
    >
      {data.type.toLowerCase() === "folder" && (
        <>
          <RiArrowRightSLine
            className={`w-5 h-5 fill-slate-muted transition duration-300 ${
              data.id === activeTab && "rotate-90"
            }`}
          />
          <RiFolder3Fill
            className={`w-[18px] h-[18px] ${data.classname.fillIcon}`}
          />
        </>
      )}
      {data.type.toLowerCase() == "file" && (
        <RiMarkdownFill className={`w-5 h-5 ${data.classname.fillIcon}`} />
      )}
      <span className="ps-2">{data.title}</span>
    </button>
  );
};

export default SidebarLink;
