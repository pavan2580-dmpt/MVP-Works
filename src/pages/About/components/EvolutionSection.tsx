
import { Rocket ,Flag ,Sparkles} from "lucide-react";
export function EvolutionSection() {
  return (
    <div className="relative py-24 bg-background-dark/95">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(140,37,244,0.03),transparent)] pointer-events-none"></div>
      <div className="layout-container flex justify-center px-4 md:px-10">
        <div className="max-w-[800px] w-full flex flex-col items-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-16 tracking-tight text-center">
            Our Evolution
          </h2>
          <div className="w-full">
            <div className="grid grid-cols-[60px_1fr] gap-x-6">
              {/* Timeline Item 1 */}
              <div className="flex flex-col items-center h-full">
                <div className="relative flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-surface-dark border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(140,37,244,0.5)] text-primary">
                    <Flag />
                  </div>
                </div>
                <div className="w-[2px] bg-gradient-to-b from-primary to-surface-dark h-full min-h-[100px] -mt-2"></div>
              </div>
              <div className="pb-16 pt-2">
                <div className="text-primary font-mono text-sm mb-1">2025</div>
                <h3 className="text-white text-xl font-bold mb-2">
                  The Founding Vision
                </h3>
                <p className="text-gray-400">
                  MVP Works was officially established as a revolutionary model
                  for digital work, uniting a decentralized network of elite
                  freelancers under a single brand of excellence.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex flex-col items-center h-full">
                <div className="relative flex items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full bg-surface-dark border border-gray-600 group-hover:border-primary flex items-center justify-center text-gray-400">
                    <Rocket />
                  </div>
                </div>
                <div className="w-[2px] bg-surface-dark h-full min-h-[100px] -mt-2"></div>
              </div>
              <div className="pb-16 pt-1">
                <div className="text-gray-500 font-mono text-sm mb-1">
                  Today
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Productizing Expertise
                </h3>
                <p className="text-gray-400">
                  Leveraging our collective experience, we launched our first
                  suite of internal SaaS products alongside client services.
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-pink flex items-center justify-center animate-pulse">
                    <span className="material-symbols-outlined text-white text-sm">
                     <Sparkles />
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <div className="text-accent-pink font-mono text-sm mb-1">
                  FUTURE
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  The New Standard
                </h3>
                <p className="text-gray-400">
                  Redefining what a digital agency looks like: decentralized,
                  expert-led, and fiercely independent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
