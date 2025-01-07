interface FooterLayoutsProps extends React.PropsWithChildren {
  classname?: string;
}

export default function FooterLayouts({
  children,
  classname = "",
}: FooterLayoutsProps) {
  return (
    <footer className={`border-t border-midnight-slate ${classname}`}>
      <div className="flex justify-between w-full h-[40px]">{children}</div>
    </footer>
  );
}
