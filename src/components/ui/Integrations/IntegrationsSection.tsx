"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { ReButton } from "@/components/re-ui/ReButton";

export default function IntegrationsSection() {
  const sectionRef = useRef(null);

  useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative text-center z-10">
          <h1 className="text-5xl font-semibold text-white font-navbar">
            One platform,
            <br />
            unlimited integrations
          </h1>

          <ReButton
            href=""
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            {"Explore Integrations"}
          </ReButton>
        </div>
      </div>
    </section>
  );
}
