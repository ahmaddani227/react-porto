import Footer from "./Footer";
import Navbar from "./Nabvbar";

export default function AppLayouts({ children }: React.PropsWithChildren) {
  return (
    <div className=" min-h-screen lg:min-h-[calc(100vh-60px)] 2xl:min-h-screen border lg:rounded-lg border-midnight-slate bg-midnight-blue flex flex-col justify-between">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
