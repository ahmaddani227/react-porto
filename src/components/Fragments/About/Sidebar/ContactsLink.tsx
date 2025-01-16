type ContactsLinkProps = {
  data: {
    title: string;
    Svg: React.ElementType;
    url: string;
  };
};

export default function ContactsLink({ data }: ContactsLinkProps) {
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
