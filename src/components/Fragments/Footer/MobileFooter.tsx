import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTiktokFill,
} from "react-icons/ri";

function MobileFooter() {
  return (
    <footer className="border-t border-midnight-slate lg:hidden">
      <div className="flex justify-between w-full h-[40px]">
        <div className="flex justify-between w-full h-full text-slate-muted">
          <h1 className="flex items-center h-full px-6 text-sm text-slate-muted ">
            find me in:
          </h1>

          <div className="flex justify-end">
            <a
              href="#"
              className="flex items-center h-full px-3 text-sm transition border-l border-midnight-slate group hover:bg-midnight-slate"
            >
              <RiInstagramFill className="w-6 h-6 fill-midnight-slate group-hover:fill-slate-muted" />
            </a>
            <a
              href="#"
              className="flex items-center h-full px-3 text-sm transition border-l border-midnight-slate group hover:bg-midnight-slate"
            >
              <RiTiktokFill className="w-6 h-6 fill-midnight-slate group-hover:fill-slate-muted" />
            </a>
            <a
              href="#"
              className="flex items-center h-full px-3 text-sm transition border-l border-midnight-slate group hover:bg-midnight-slate"
            >
              <RiLinkedinFill className="w-6 h-6 fill-midnight-slate group-hover:fill-slate-muted" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MobileFooter;
