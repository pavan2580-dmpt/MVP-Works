import { Zap, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950 px-4 sm:px-6 md:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 lg:gap-12 mb-10 md:mb-12">
          {/* MVP Works Section */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">MVP Works</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Transforming ideas into digital reality.
            </p>
          </div>

          {/* Company Section */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/30 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-slate-400 text-sm">
            © 2025 MVP Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
