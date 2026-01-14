import type { ReactNode } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "~/components/ui/sonner"


// interface LayoutProps {
//   children: ReactNode;
// }

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20"><Outlet/></main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
