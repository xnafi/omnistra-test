"use client";

import { ReButton } from "@/components/re-ui/ReButton";
import SmoothScrollProvider from "@/utils/SmoothScrollProvider";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const IntegrationsHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <SmoothScrollProvider>
      <section
        ref={containerRef}
        className="relative min-h-screen font-navbar flex items-center justify-center overflow-hidden"
      >
        {/* Background Orbit Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-175 h-175 border-gray-300 opacity-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Center Content */}
        <motion.div
          style={{ scale, opacity, y }}
          className="relative z-10 text-center max-w-2xl"
        >
          <h1 className="text-5xl font-semibold text-white leading-tight">
            One platform,
            <br />
            unlimited integrations
          </h1>

          <ReButton href="" className="mt-5">
            Explore Integrations
          </ReButton>
        </motion.div>
      </section>
    </SmoothScrollProvider>
  );
};
