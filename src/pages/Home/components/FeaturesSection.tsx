import { useState } from "react";
import { Zap, Shield, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Get your MVP up and running in record time with our streamlined process.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "Bank-grade security protocols to keep your data and ideas protected.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Global Talent",
      desc: "Access top-tier freelancers and services from around the world.",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose MVP Works?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Everything you need to bring your ideas to life, all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Link
              key={i}
              to="/learn-more"
              className="group p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

