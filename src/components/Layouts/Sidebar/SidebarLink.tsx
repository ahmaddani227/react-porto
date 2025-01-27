import { ElementType } from "react";
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
    Svg?: React.ElementType;
    classname: {
      fillIcon: string;
    };
  };
}

type FolderTypes = {
  activeTab: string;
  id: string;
  classname: string;
};

const Folder = ({ id, activeTab, classname }: FolderTypes) => {
  return (
    <>
      <RiArrowRightSLine
        className={`w-5 h-5 fill-slate-muted transition duration-300 ${
          id === activeTab && "rotate-90"
        }`}
      />
      <RiFolder3Fill className={`w-[18px] h-[18px] ${classname}`} />
    </>
  );
};

const File = ({ classname }: { classname: string }) => {
  return <RiMarkdownFill className={`w-5 h-5 ${classname}`} />;
};

type CheckboxTypes = {
  Svg: ElementType;
  classname: string;
  id: string;
  activeTab: string;
};

const Checkbox = ({ Svg, classname, id, activeTab }: CheckboxTypes) => {
  return (
    <div className="z-10 flex items-center ps-7">
      <input
        type="checkbox"
        checked={id === activeTab}
        className={`w-4 h-4 mr-4 rounded-sm cursor-pointer ${
          id === activeTab
            ? "accent-slate-muted"
            : "appearance-none border-2 border-slate-muted"
        }`}
      />
      <Svg
        className={`w-6 h-6 ${
          id === activeTab ? "fill-slate-muted" : classname
        }`}
      />
    </div>
  );
};

const SidebarLink = ({ addTab, activeTab, data }: SidebarLinkProps) => {
  const { id, title, type, classname, Svg } = data;

  return (
    <>
      <button
        onClick={() => addTab(id, title)}
        className={`flex items-center text-sm text-slate-muted transition hover:text-white gap-x-1 ${
          type == "file" && "ml-6"
        } ${activeTab == id && "text-white"}`}
      >
        {type === "folder" && (
          <Folder
            id={id}
            activeTab={activeTab}
            classname={classname.fillIcon}
          />
        )}
        {type === "file" && <File classname={classname.fillIcon} />}
        {Svg && type == "checkbox" && (
          <Checkbox
            Svg={Svg}
            classname={classname.fillIcon}
            id={id}
            activeTab={activeTab}
          />
        )}
        <span className="ps-2">{title}</span>
      </button>
    </>
  );
};

export default SidebarLink;
