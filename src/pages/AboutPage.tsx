import AppLayouts from "../components/Layouts/AppLayouts";

export default function AboutPage() {
  return (
    <AppLayouts>
      <main className="min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-140px)]">
        <section className="p-fluid">
          <h1>About Me</h1>
        </section>
      </main>
    </AppLayouts>
  );
}
