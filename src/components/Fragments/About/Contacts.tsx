import { RiMailFill, RiPhoneFill, RiTriangleFill } from "react-icons/ri";

export default function Contacts() {
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
}
