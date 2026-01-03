import {Infinity, Orbit} from "lucide-react";

export function FreelanceAdvantageSection() {
  return (
    <div className="relative py-20 bg-background-dark">
      <div className="layout-container flex justify-center px-4 md:px-10">
        <div className="max-w-[1200px] w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-surface-dark border border-white/10 rounded-md text-primary font-mono text-sm tracking-widest font-bold">
                  EST. 2025
                </span>
              </div>
              <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
                The Freelance Advantage
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Established in 2025 as a visionary collective, we aren't a
                traditional agency, and we aren't a hiring platform. We are a
                unified team of independent builders.
                <br />
                <br />
                Every member of MVP Works is an autonomous expert who chooses to
                collaborate. This unique structure allows us to bring
                specialized mastery to every project without the overhead of
                corporate structures. We offer direct access to the talent
                actually doing the work.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-surface-dark border border-white/5">
                  <div className="text-primary text-3xl mb-2 block">
                    <Orbit />
                  </div>
                  <h3 className="text-white font-bold text-lg">Autonomy</h3>
                  <p className="text-gray-500 text-sm">
                    Driven by passion &amp; ownership
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface-dark border border-white/5">
                  <div className="text-accent-pink text-3xl mb-2 block">
                    <Infinity />
                  </div>
                  <h3 className="text-white font-bold text-lg">Flexibility</h3>
                  <p className="text-gray-500 text-sm">
                    Scaling expertise on demand
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Circles */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-pink rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 rounded-2xl bg-surface-dark border border-white/10 overflow-hidden min-h-[400px] flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop")',
                  }}
                ></div>
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="flex gap-4">
                    <div className="w-32 h-32 rounded-full border-2 border-primary/50 bg-primary/10 backdrop-blur-md flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(140,37,244,0.3)] text-center px-2 text-sm">
                      Expert
                      <br />
                      Services
                    </div>
                    <div className="w-32 h-32 rounded-full border-2 border-accent-pink/50 bg-accent-pink/10 backdrop-blur-md flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(244,37,214,0.3)] -ml-8 mt-12 text-center px-2 text-sm">
                      Digital
                      <br />
                      Products
                    </div>
                  </div>
                  <div className="w-32 h-32 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center text-white font-bold -mt-16 text-center px-2 text-sm">
                    Freelance
                    <br />
                    Mastery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



