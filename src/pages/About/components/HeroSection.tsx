export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0f]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a2a25] via-[#2a1b33] to-[#0b0b0f]" />

      {/* Glow Orbs */}
      <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] bg-purple-600/25 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -right-40 w-[620px] h-[620px] bg-pink-500/20 rounded-full blur-[160px]" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-6xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 backdrop-blur-md text-sm text-purple-300">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          A Collective of Independent Experts
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-white font-black tracking-tight leading-[1.05]
          text-5xl md:text-7xl lg:text-8xl">
          Elite Freelancers{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            United
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 mx-auto max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed">
          We are MVP Works. A tightly-knit squad of top-tier freelancers
          collaborating to build innovative products, deliver professional
          services, and redefine the future of independent work.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="h-14 px-8 rounded-xl bg-white text-black font-semibold
            hover:bg-gray-100 transition">
            Our Capabilities
          </button>

          <button className="h-14 px-8 rounded-xl border border-white/25
            bg-white/5 text-white font-semibold backdrop-blur-md
            hover:border-white/50 transition">
            The Collective
          </button>
        </div>
      </div>
    </section>
  );
}
