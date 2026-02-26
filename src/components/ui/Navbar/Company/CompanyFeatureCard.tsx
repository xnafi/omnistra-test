import { motion } from "framer-motion";

export default function CompanyFeatureCard() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className=" relative overflow-hidden rounded-2xl bg-linear-to-b from-white/6 to-white/2 border border-white/10 p-8 h-full group cursor-pointer hover:-translate-y-1 transition-all duration-500"
    >
      <h3 className="text-white text-lg font-semibold mb-2">Who We Are</h3>

      <p className="text-white/60 text-sm max-w-xs">
        The story behind the Chargeflow.
      </p>

      {/* Rotating Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-72 h-72 rounded-full border border-white/10 relative">
          <div className="absolute inset-0 rounded-full border border-white/5 rotate-45" />
          <div className="absolute inset-10 rounded-full border border-white/10" />
          <div className="absolute inset-20 rounded-full border border-white/5" />
        </div>
      </motion.div>

      {/* Pulsing Core */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-16 h-16 rounded-full bg-white/10 blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Glow */}
      <div className="absolute -bottom-20 -right-20 w-87.5 h-87.5 bg-white/10 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition duration-500" />
    </motion.div>
  );
}
