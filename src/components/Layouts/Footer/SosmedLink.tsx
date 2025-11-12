interface SosmedProps {
  url: string;
  Svg: React.ElementType;
  classname?: string;
  children?: React.ReactNode;
}

function SosmedLink({ url, Svg, classname, children }: SosmedProps) {
  return (
    <a
      href={url}
      target="_blank"
      className={`footer-sosmed group ${classname}`}
    >
      {children}
      <Svg className="sosmed-icon group-hover:fill-slate-muted group-hover:opacity-100" />
    </a>
  );
}

export default SosmedLink;
