import { useState } from "react";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiFolder3Fill,
  RiMarkdownFill,
  RiTriangleFill,
} from "react-icons/ri";
import { sidebarData } from "../../../constants/menu";
import Contacts from "./Contacts";

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
      className={`flex items-center text-slate-muted hover:text-white transition text-sm gap-x-1 ${
        activeTab == data.id && "text-white"
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

interface FileProps {
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

const File = ({ addTab, activeTab, data }: FileProps) => {
  return (
    <button
      onClick={() => addTab(data.id, data.title)}
      className={`flex items-center text-sm text-slate-muted transition hover:text-white gap-x-1 ml-6 ${
        activeTab == data.id && "text-white"
      }`}
    >
      <RiMarkdownFill className={`w-5 h-5 ${data.classname.fillIcon}`} />
      <span className="ms-2">{data.title}</span>
    </button>
  );
};

interface ActivityBarProps {
  Svg: any;
  activeActivityBar: string;
  id: string;
  setActiveActivityBar: (activityBarId: string) => void;
}

const ActivityBar = ({
  Svg,
  activeActivityBar,
  id,
  setActiveActivityBar,
}: ActivityBarProps) => {
  return (
    <button onClick={() => setActiveActivityBar(id)}>
      <Svg
        className={`w-6 h-6 transition fill-slate-muted ${
          activeActivityBar != id ? "opacity-40 hover:opacity-100" : ""
        }`}
      />
    </button>
  );
};

interface SidebarProps {
  addTab: (id: string, title: string) => void;
  activeTab: string;
}

export default function Sidebar({ addTab, activeTab }: SidebarProps) {
  const [activeActivityBar, setActiveActivityBar] =
    useState("Profesional Info");

  return (
    <aside className="flex min-h-[calc(100vh-149px)] border-r border-midnight-slate min-w-[275px]">
      <div className="border-r border-midnight-slate">
        <div className="flex flex-col px-5 py-6 gap-y-6">
          {sidebarData.map((item) => (
            <ActivityBar
              key={item.id}
              id={item.id}
              Svg={item.Svg}
              activeActivityBar={activeActivityBar}
              setActiveActivityBar={setActiveActivityBar}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          {sidebarData
            .filter((item) => item.id === activeActivityBar)
            .map((item) => (
              <div key={item.id}>
                <div className="flex items-center ps-2.5 py-2 border-b gap-x-2 border-midnight-slate">
                  <RiTriangleFill className="w-2 h-2 rotate-[60deg]" />
                  <p className="text-sm">{item.title}</p>
                </div>
                <div className="flex flex-col p-1.5 border-b gap-y-2.5 border-midnight-slate">
                  {item.sidebarData.map((item) => (
                    <>
                      {item.type == "folder" ? (
                        <Folder
                          key={item.id}
                          addTab={addTab}
                          activeTab={activeTab}
                          data={item}
                        />
                      ) : item.type == "file" ? (
                        <File
                          addTab={addTab}
                          activeTab={activeTab}
                          data={item}
                        />
                      ) : null}
                    </>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <Contacts />
      </div>
    </aside>
  );
}
