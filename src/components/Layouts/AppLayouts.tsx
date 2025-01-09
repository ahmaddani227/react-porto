import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Nabvbar";

export default function AppLayouts({ children }: React.PropsWithChildren) {
  return (
    <div className="border lg:rounded-lg border-midnight-slate bg-midnight-blue">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
