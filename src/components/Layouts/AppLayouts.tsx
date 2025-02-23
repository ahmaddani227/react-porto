import Footer from "./Footer";
import Navbar from "./Nabvbar";

export default function AppLayouts({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 w-full h-full overflow-hidden basis-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
