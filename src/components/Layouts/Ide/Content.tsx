export default function Content({ children }: React.PropsWithChildren) {
  return (
    <section id="content" className={`overflow-y-scroll h-full`}>
      {children}
    </section>
  );
}
