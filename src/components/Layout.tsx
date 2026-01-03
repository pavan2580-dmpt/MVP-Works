import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Static/Nav/NavBar";
import Footer from "../pages/Home/components/Footer";

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <div className={`min-h-screen bg-gray-900 ${isHomePage ? "relative" : ""}`}>
      {/* Navbar - will overlay on home page, normal position on other pages */}
      <div className={isHomePage ? "absolute top-0 left-0 w-full z-50" : "relative z-50"}>
        <Navbar />
      </div>
      
      {/* Page content */}
      <main className={isHomePage ? "" : "pt-24"}>
        <Outlet />
      </main>
      
      {/* Footer will be added here later */}
      <Footer />
    </div>
  );
}

