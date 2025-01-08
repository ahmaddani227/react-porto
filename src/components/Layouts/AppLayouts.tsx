import Footer from "../Fragments/Footer/index.tsx";
import Navbar from "../Fragments/Nabvbar/index.tsx";

export default function AppLayouts({ children }: React.PropsWithChildren) {
  return (
    <div className="border lg:rounded-lg border-midnight-slate bg-midnight-blue">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
