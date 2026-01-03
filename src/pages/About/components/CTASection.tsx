import { Rocket } from "lucide-react";
export function CTASection() {
  return (
    <div className="relative py-32 bg-background-dark overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 max-w-2xl px-6">
        <h2 className="text-white text-4xl md:text-5xl font-black mb-6 tracking-tight">
          Need expert hands on deck?
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          Leverage our collective expertise for your next big project. We are
          ready to build.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="h-12 px-8 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
            Work With Us{" "}
            <span className="material-symbols-outlined text-sm">
              <Rocket />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
