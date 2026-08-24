import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar/> 
      <main className="flex-grow">
        <Outlet /> {/* This is where your page sections will render */}
      </main>
      <Footer/>
    </div>
  );
};