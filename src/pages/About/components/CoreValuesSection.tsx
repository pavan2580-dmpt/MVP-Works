export function CoreValuesSection() {
  return (
    <div className="py-24 bg-background-dark">
      <div className="layout-container flex justify-center px-4 md:px-10">
        <div className="max-w-[1200px] w-full">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 tracking-tight">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Value Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-surface-dark p-8 h-64 flex flex-col justify-end border border-white/5 hover:border-primary/50 transition-colors">
              <div className="absolute -top-10 -right-10 text-[120px] font-black text-white/5 select-none leading-none group-hover:text-primary/10 transition-colors">
                01
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                Independence
              </h3>
              <p className="text-gray-400 text-sm relative z-10">
                We cherish our freedom. It drives us to produce our best work,
                untethered by bureaucracy.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Value Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-surface-dark p-8 h-64 flex flex-col justify-end border border-white/5 hover:border-accent-pink/50 transition-colors">
              <div className="absolute -top-10 -right-10 text-[120px] font-black text-white/5 select-none leading-none group-hover:text-accent-pink/10 transition-colors">
                02
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                Mastery
              </h3>
              <p className="text-gray-400 text-sm relative z-10">
                We are a team of seniors. We bring deep expertise and craft to
                every single deliverable.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-pink to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Value Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-surface-dark p-8 h-64 flex flex-col justify-end border border-white/5 hover:border-purple-400/50 transition-colors">
              <div className="absolute -top-10 -right-10 text-[120px] font-black text-white/5 select-none leading-none group-hover:text-purple-400/10 transition-colors">
                03
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                Collaboration
              </h3>
              <p className="text-gray-400 text-sm relative z-10">
                Though independent, we are stronger together. Our synergy is our
                competitive edge.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
