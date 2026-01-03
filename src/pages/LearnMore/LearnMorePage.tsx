function LearnMorePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Learn More About MVP Works
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Your all-in-one platform for turning ideas into reality
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* What We Do */}
            <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50">
              <h2 className="text-3xl font-bold mb-4 text-purple-400">What We Do</h2>
              <p className="text-slate-300 leading-relaxed">
                MVP Works is a comprehensive platform that combines professional services, 
                innovative products, and expert freelancing to help you build your vision faster. 
                We understand that bringing an idea to life requires multiple components working 
                together seamlessly, and that's exactly what we provide.
              </p>
            </section>

            {/* Our Services */}
            <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50">
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Services</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Professional Services</h3>
                  <p>
                    Access a wide range of professional services tailored to your needs. 
                    From consulting to implementation, we've got you covered.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Innovative Products</h3>
                  <p>
                    Discover cutting-edge products designed to accelerate your development 
                    process and enhance your capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Expert Freelancing</h3>
                  <p>
                    Connect with top-tier freelancers from around the world who specialize 
                    in bringing your ideas to life.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50">
              <h2 className="text-3xl font-bold mb-4 text-pink-400">Why Choose MVP Works?</h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Integrated approach - everything you need in one place</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Fast turnaround times to get your MVP to market quickly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Enterprise-grade security to protect your ideas and data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Global network of talented professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Proven track record of successful projects</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-slate-300 mb-6">
                Join hundreds of entrepreneurs who've turned their ideas into reality with MVP Works.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMorePage;

