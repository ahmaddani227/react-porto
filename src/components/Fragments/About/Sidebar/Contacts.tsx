import { RiArrowDropDownFill, RiMailFill, RiPhoneFill } from "react-icons/ri";

export default function Contacts() {
  return (
    <div className="flex flex-col mt-0.5 lg:mt-0">
      <button className="flex items-center w-full py-1 lg:cursor-text ps-3.5 lg:px-1 lg:border-b bg-midnight-slate lg:bg-transparent border-midnight-slate">
        <RiArrowDropDownFill className="w-7 h-7" />
        <p className="text-sm">contacts</p>
      </button>
      <div className="flex flex-col py-2 gap-y-2 ps-10 lg:ps-3">
        <a
          href="#"
          className="flex items-center text-sm text-slate-muted gap-x-1"
        >
          <RiMailFill className="w-5 h-5 fill-slate-muted" />
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
}
