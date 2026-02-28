"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import SmoothScrollProvider from "@/utils/SmoothScrollProvider";
import IntegrationsLogoCluster from "./IntegrationsLogoCluster";
import { ReButton } from "@/components/re-ui/ReButton";

export default function IntegrationsHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Blur background AFTER collapse
  const bgBlur = useTransform(scrollYProgress, [0.65, 0.85], [0, 20]);
  const blurFilter = useTransform(bgBlur, (v) => `blur(${v}px)`);

  return (
    <SmoothScrollProvider>
      <section ref={sectionRef} className="relative h-[200vh] font-navbar">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* 🔹 BLURRING CONTENT LAYER */}
          <motion.div
            style={{ filter: blurFilter }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <h1 className="text-5xl font-semibold text-white">
                One platform,
                <br />
                unlimited integrations
              </h1>

              <ReButton href="" className="mt-6">
                Explore Integrations
              </ReButton>
            </div>
          </motion.div>

          {/* 🔹 Logos ABOVE blur layer */}
          <IntegrationsLogoCluster scrollProgress={scrollYProgress} />
        </div>
      </section>
    </SmoothScrollProvider>
  );
}
