import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

function index() {
  const isDekstop = useMediaQuery();

  return <>{isDekstop ? <Footer /> : <MobileFooter />}</>;
}

export default index;
