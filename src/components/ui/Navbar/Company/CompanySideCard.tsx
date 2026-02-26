import { useState } from "react";
import { motion } from "framer-motion";
import { CompanySidebarCardProps } from "@/types/NavTypes";

export default function CompanySideCard({ title, badge }: CompanySidebarCardProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className=" relative overflow-hidden rounded-2xl bg-linear-to-b from-white/6 to-white/2 border border-white/10 p-6 group cursor-pointer h-47.5 transition-all duration-500 hover:border-white/20 hover:-translate-y-1"
    >
      {/* Radar background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[24px_24px]" />

      {/* Mouse Spotlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.12), transparent 60%)`,
        }}
      />

      <div className="flex items-center justify-between mb-2 relative">
        <h4 className="text-white font-semibold text-sm">{title}</h4>

        {badge && (
          <span className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-white/70">
            {badge}
          </span>
        )}
      </div>

      {/* Subtle animated ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none"
      >
        <div className="w-28 h-28 rounded-full border border-white/10" />
      </motion.div>
    </motion.div>
  );
}
