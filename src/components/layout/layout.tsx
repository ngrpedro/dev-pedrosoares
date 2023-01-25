import { ReactNode } from "react";
import Footer from "./footer";
import NavBar from "./navBar";

interface Layout {
  children: ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <div className="max-w-[1300px] m-auto px-4 sm:px-8">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
