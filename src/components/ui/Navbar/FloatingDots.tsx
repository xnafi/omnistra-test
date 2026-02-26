import { motion } from "framer-motion";

export default function FloatingDots() {
  const dots = [
    { x: "-120px", y: "-40px" },
    { x: "100px", y: "-60px" },
    { x: "-160px", y: "40px" },
    { x: "140px", y: "60px" },
    { x: "0px", y: "100px" },
  ];

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-4 h-4 rounded-full bg-white/60"
          style={{
            transform: `translate(${dot.x}, ${dot.y})`,
          }}
        />
      ))}
    </div>
  );
}
