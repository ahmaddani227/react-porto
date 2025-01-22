export default function Content({ children }: React.PropsWithChildren) {
  return (
    <section
      id="content"
      className="lg:h-[calc(100vh-190px)] p-3.5 lg:overflow-y-scroll"
    >
      {children}
    </section>
  );
}
