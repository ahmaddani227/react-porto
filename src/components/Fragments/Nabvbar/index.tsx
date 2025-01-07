import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function index() {
  const isDekstop = useMediaQuery("(min-width: 1024px)");

  return <>{isDekstop ? <Navbar /> : <MobileNavbar />}</>;
}
