interface SosmedProps {
  url: string;
  Svg: any;
  classname?: string;
}

function Sosmed({ url, Svg, classname }: SosmedProps) {
  return (
    <a
      href={url}
      target="_blank"
      className={`footer-sosmed group ${classname}`}
    >
      <Svg className="sosmed-icon group-hover:fill-slate-muted group-hover:opacity-100" />
    </a>
  );
}

export default Sosmed;
