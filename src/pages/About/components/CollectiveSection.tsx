import { UsersRound ,Earth } from "lucide-react";

export function CollectiveSection() {
  return (
    <div className="py-24 bg-surface-dark border-t border-white/5">
      <div className="layout-container flex justify-center px-4 md:px-10">
        <div className="max-w-[1200px] w-full">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-primary"></div>
                <span className="text-primary font-mono text-sm tracking-widest font-bold">
                  ESTABLISHED 2025
                </span>
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">
                A Collective Without Borders
              </h2>
              <p className="text-gray-400 max-w-2xl text-lg">
                We are not defined by a boardroom of founders, but by the sum of
                our parts. Our strength lies in our distributed network of
                specialized freelancers who come together to solve complex
                problems.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-background-dark p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-dark border border-primary/30 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    <UsersRound />
                  </span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">
                  Unified Expertise
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Instead of a top-down hierarchy, we operate as a flat network
                  of peer experts. This ensures that every project benefits from
                  direct senior-level involvement, fostering innovation that
                  traditional structures often stifle.
                </p>
              </div>
            </div>

            <div className="bg-background-dark p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-dark border border-accent-pink/30 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-accent-pink text-2xl">
                    <Earth />
                  </span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">
                  Global Reach
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Our freelance model transcends geographical limits. We curate
                  the best talent from around the globe, creating a diverse
                  melting pot of ideas and technical prowess that is available
                  to our clients 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
