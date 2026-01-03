
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type TimelineItem = {
  title: string;
  content: React.ReactNode;
};

type TimelineProps = {
  data: TimelineItem[];
  className?: string;
};

export function Timeline({ data, className }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.9"], // tweak feel
  });

  // height of the beam based on scroll
  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={`relative ${className || ""}`}>
      {/* Scroll beam / vertical line */}
      <div className="pointer-events-none absolute left-4 top-0 bottom-0 flex justify-center">
        <motion.div
          style={{ height: beamHeight }}
          className="w-0.5 origin-top rounded-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"
        />
      </div>

      <div className="space-y-12">
        {data.map((item, index) => (
          <div key={index} className="relative flex gap-8">
            {/* Dot */}
            <div className="relative z-10 flex-shrink-0 pt-1">
              <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-2 pb-12">
              <div className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:border-slate-700 transition-all duration-300">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
