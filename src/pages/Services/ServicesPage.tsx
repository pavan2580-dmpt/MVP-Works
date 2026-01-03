import { Link } from "react-router-dom";

function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full pt-32 pb-20">
        {/* Hero Header */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 via-purple-400">
                Core Ecosystem
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between vision and reality. Explore our
              integrated services designed to accelerate your growth through
              strategy, product, and talent.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Professional Services Section */}
          <section className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent rounded-3xl blur-xl -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center space-x-2 text-purple-400 mb-4 border border-purple-500/30 rounded-full px-3 py-1 bg-purple-500/10">
                  <span className="text-sm">💼</span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Consulting & Strategy
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Professional Services
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Tailored consulting and strategy development to scale your
                  business operations effectively. We dive deep into market
                  analytics and operational frameworks to provide the blueprint
                  for your success.
                </p>
                <div className="space-y-6">
                  <div className="flex flex-col gap-2 border-l-2 border-purple-500/30 pl-6 hover:border-purple-500 transition-colors">
                    <h3 className="text-xl font-semibold text-white">
                      Strategic Business Consulting
                    </h3>
                    <p className="text-slate-500 text-sm">
                      Comprehensive roadmaps for digital transformation and
                      scaling.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-l-2 border-purple-500/30 pl-6 hover:border-purple-500 transition-colors">
                    <h3 className="text-xl font-semibold text-white">
                      Market Analysis & Research
                    </h3>
                    <p className="text-slate-500 text-sm">
                      Data-driven insights to identify opportunities and
                      mitigate risks.
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <a
                    className="inline-flex items-center text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors"
                    href="#"
                  >
                    Explore Strategy <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-blue-600/10 rounded-2xl blur-lg"></div>
                <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 overflow-hidden h-[400px] flex flex-col shadow-2xl dots-pattern">
                  <div className="flex justify-between items-center mb-8">
                    <div className="h-3 w-32 bg-slate-700/50 rounded"></div>
                    <div className="h-8 w-8 rounded-full bg-slate-700/50"></div>
                  </div>
                  <div className="flex-1 flex items-end justify-between gap-4 px-4 pb-4">
                    <div className="w-full bg-purple-500/20 rounded-t-lg h-[40%] relative group-hover:h-[60%] transition-all duration-700 delay-100">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        +24%
                      </div>
                    </div>
                    <div className="w-full bg-purple-500/40 rounded-t-lg h-[60%] relative group-hover:h-[80%] transition-all duration-700 delay-200">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        +45%
                      </div>
                    </div>
                    <div className="w-full bg-purple-500/60 rounded-t-lg h-[50%] relative group-hover:h-[75%] transition-all duration-700 delay-300">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        +32%
                      </div>
                    </div>
                    <div className="w-full bg-purple-500 rounded-t-lg h-[75%] relative group-hover:h-[95%] transition-all duration-700 delay-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white font-bold opacity-100">
                        Growth
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-xs text-slate-500">
                    <span>Q1 Analysis</span>
                    <span>Project: FinTech Scaling</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Innovative Products Section */}
          <section className="relative group">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/20 to-transparent rounded-3xl blur-xl -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-bl from-blue-600/20 to-cyan-600/10 rounded-2xl blur-lg"></div>
                <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-1 overflow-hidden h-[400px] shadow-2xl bg-[size:40px_40px] bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)]">
                  <div className="bg-slate-950 w-full h-full rounded-xl flex flex-col border border-white/5">
                    <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                      <div className="ml-4 h-2 w-32 bg-slate-800 rounded"></div>
                    </div>
                    <div className="flex-1 flex p-4 gap-4">
                      <div className="w-16 flex flex-col gap-3">
                        <div className="h-8 w-8 rounded bg-blue-500/20 mb-4"></div>
                        <div className="h-2 w-10 bg-slate-800 rounded"></div>
                        <div className="h-2 w-8 bg-slate-800 rounded"></div>
                        <div className="h-2 w-12 bg-slate-800 rounded"></div>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="col-span-2 bg-slate-800/20 rounded-lg p-3 border border-white/5">
                          <div className="h-2 w-24 bg-blue-500/40 rounded mb-2"></div>
                          <div className="h-16 w-full bg-gradient-to-r from-blue-500/10 to-transparent rounded"></div>
                        </div>
                        <div className="bg-slate-800/20 rounded-lg p-3 border border-white/5">
                          <div className="h-10 w-10 rounded-full border-2 border-blue-500/50 mb-2"></div>
                          <div className="h-2 w-16 bg-slate-700 rounded"></div>
                        </div>
                        <div className="bg-slate-800/20 rounded-lg p-3 border border-white/5 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500/20 rounded-bl-lg"></div>
                          <div className="h-2 w-12 bg-slate-700 rounded mt-8"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-white/5 text-right">
                      <span className="text-[10px] text-blue-400 font-mono">
                        STATUS: DEPLOYED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center space-x-2 text-blue-400 mb-4 border border-blue-500/30 rounded-full px-3 py-1 bg-blue-500/10">
                  <span className="text-sm">🚀</span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Product Development
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Innovative Products
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Cutting-edge SaaS solutions and digital products designed to
                  automate workflows and enhance user engagement. We build
                  scalable, secure, and intuitive platforms.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-2xl mb-2 block">⚙️</span>
                    <h4 className="font-bold text-white mb-1">Custom SaaS</h4>
                    <p className="text-xs text-slate-400">
                      Tailored platforms built for your specific needs.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-2xl mb-2 block">🤖</span>
                    <h4 className="font-bold text-white mb-1">AI Automation</h4>
                    <p className="text-xs text-slate-400">
                      Intelligent workflows that save time.
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <a
                    className="inline-flex items-center text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors"
                    href="#"
                  >
                    View Products <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Freelancing Section */}
          <section className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-transparent rounded-3xl blur-xl -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center space-x-2 text-pink-400 mb-4 border border-pink-500/30 rounded-full px-3 py-1 bg-pink-500/10">
                  <span className="text-sm">👥</span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Talent Network
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Expert Freelancing
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Access a curated network of top-tier freelance talent ready to
                  integrate into your team. From developers to designers, we vet
                  the best so you don't have to.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-4 text-pink-400">
                      1
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Vetted Developer Talent
                      </h3>
                      <p className="text-sm text-slate-500">
                        Rigorous testing process ensuring top 1% quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-4 text-pink-400">
                      2
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        On-Demand Design Teams
                      </h3>
                      <p className="text-sm text-slate-500">
                        Scale your creative output instantly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <a
                    className="inline-flex items-center text-white border-b border-pink-500 pb-1 hover:text-pink-400 transition-colors"
                    href="#"
                  >
                    Find Talent <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-pink-600/20 to-purple-600/10 rounded-2xl blur-lg"></div>
                <div className="relative h-[400px] flex items-center justify-center">
                  <div className="absolute top-10 left-10 w-64 bg-slate-900 border border-white/10 p-4 rounded-xl shadow-xl transform -rotate-6 transition-transform group-hover:-rotate-12 duration-500 z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500"></div>
                      <div>
                        <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                        <div className="h-2 w-12 bg-white/10 rounded"></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-2 py-1 rounded bg-white/5 text-[10px] text-pink-300">
                        React
                      </div>
                      <div className="px-2 py-1 rounded bg-white/5 text-[10px] text-pink-300">
                        Node.js
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-24 right-10 w-64 bg-slate-900 border border-white/10 p-4 rounded-xl shadow-2xl transform rotate-3 transition-transform group-hover:rotate-6 duration-500 z-20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                      <div>
                        <div className="h-2 w-24 bg-white/20 rounded mb-1"></div>
                        <div className="h-2 w-16 bg-white/10 rounded"></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-2 py-1 rounded bg-white/5 text-[10px] text-blue-300">
                        UI/UX
                      </div>
                      <div className="px-2 py-1 rounded bg-white/5 text-[10px] text-blue-300">
                        Figma
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center">
                      <div className="flex text-yellow-500 text-[10px]">
                        ★★★★★
                      </div>
                      <span className="text-[10px] text-green-400">
                        Available
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-20 w-64 bg-slate-900 border border-white/10 p-4 rounded-xl shadow-xl transform rotate-6 transition-transform group-hover:rotate-12 duration-500 z-0 opacity-60 blur-[1px]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500"></div>
                      <div>
                        <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                        <div className="h-2 w-10 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Seamless Integration Section */}
        <div className="mt-40 bg-black/20 border-y border-white/5 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-blue-900/40 z-10 mix-blend-overlay"></div>
                  <img
                    alt="Team collaborating"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  />
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                      <span className="flex h-3 w-3 absolute -top-1 -right-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <p className="text-white text-xs font-bold">
                        Live Collaboration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  Seamless Integration
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  We don't just offer services; we offer a convergence. By
                  combining expert freelancing with robust product solutions, we
                  eliminate the friction between hiring and building.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Hybrid Model
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Flexible engagement models that adapt to your project
                      lifecycle.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Rapid Deployment
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Get your MVP to market faster with our pre-built modules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 mt-32">
          <div className="relative rounded-3xl overflow-hidden p-12 lg:p-24 text-center border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90 z-0"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 z-0"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Build Your Vision?
              </h2>
              <p className="text-blue-100 text-xl mb-12 font-light">
                Join hundreds of innovators who have accelerated their journey
                with MVP Works.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 hover:cursor-pointer">
                <Link to="/start-project">
                  <button className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
