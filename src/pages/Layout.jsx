import { Outlet } from "react-router-dom";
import Navbar from "../ui/components/Navbar";
import Footer from '../ui/components/Footer'
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;