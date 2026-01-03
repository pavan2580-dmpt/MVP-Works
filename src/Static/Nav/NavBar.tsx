import GlassSurface from "./GlassSurface";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full h-fit flex items-center justify-center py-6 text-white">
        <GlassSurface
          height={70}
          borderRadius={40}
          opacity={0.65}
          blur={20}
          displace={5}
          className="w-full flex items-center backdrop-blur-lg px-6 md:w-[80%] rounded-2xl "
        >
          <div className="flex w-full items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
              MVP Works
            </Link>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/home" className="hover:text-blue-300 duration-200">
                Home
              </Link>
              <Link to="/services" className="hover:text-blue-300 duration-200">
                Services
              </Link>
              <Link to="/about" className="hover:text-blue-300 duration-200">
                About
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex md:hidden flex-col gap-1.5 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </GlassSurface>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 md:hidden px-3">
          <div className="flex flex-col gap-4 bg-black/90 backdrop-blur-lg py-6 rounded-2xl border border-white/10">
            <Link
              to="/home"
              className="hover:text-blue-300 duration-200 w-full text-center py-3 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-300 duration-200 w-full text-center py-3 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-300 duration-200 w-full text-center py-3 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
