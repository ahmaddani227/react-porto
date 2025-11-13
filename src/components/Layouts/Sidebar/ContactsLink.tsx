import { ContactMenuItemType } from "../../../types/menu";

export default function ContactsLink({ data }: { data: ContactMenuItemType }) {
  const { title, url, Svg } = data;
  return (
    <a
      href={url}
      className="flex items-center text-sm text-slate-muted gap-x-1 ps-1"
    >
      <Svg className="w-5 h-5 fill-slate-muted" />
      <span className="ps-2.5">{title}</span>
    </a>
  );
}
