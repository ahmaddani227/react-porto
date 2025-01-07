import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTiktokFill,
} from "react-icons/ri";

function Footer() {
  return (
    <footer className="hidden border-t lg:block border-midnight-slate">
      <div className="flex justify-between w-full h-[40px]">
        <div className="flex h-full text-slate-muted">
          <h1 className="flex items-center h-full px-6 text-sm border-r text-slate-muted border-midnight-slate">
            find me in:
          </h1>
          <a
            href="#"
            className="flex items-center h-full px-3 text-sm transition border-r border-midnight-slate group hover:bg-midnight-slate"
          >
            <RiInstagramFill className="w-6 h-6 fill-midnight-slate group-hover:fill-slate-muted" />
          </a>
          <a
            href="#"
            className="flex items-center h-full px-3 text-sm transition border-r border-midnight-slate group hover:bg-midnight-slate"
          >
            <RiTiktokFill className="w-6 h-6 fill-midnight-slate group-hover:fill-slate-muted" />
          </a>
          <a
            href="#"
            className="flex items-center h-full px-3 text-sm transition border-r border-midnight-slate group hover:bg-midnight-slate"
          >
            <RiLinkedinFill className="w-6 h-6 fill-midnight-slate group-hover:fill-slate-muted" />
          </a>
        </div>
        <a
          href="#"
          target="_blank"
          className="flex items-center h-full px-6 text-sm transition-all border-l hover:bg-midnight-slate text-slate-muted border-midnight-slate"
        >
          @ahmaddani227
          <span className="ml-1">
            <RiGithubFill className="w-6 h-6 fill-slate-muted" />
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
