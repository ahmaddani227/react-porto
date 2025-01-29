export default function Content({ children }: React.PropsWithChildren) {
  return (
    <section
      id="content"
      className={`lg:h-[calc(100vh-186px)] lg:overflow-y-scroll min-h-[calc(100vh-380px)]}`}
    >
      {children}
    </section>
  );
}
