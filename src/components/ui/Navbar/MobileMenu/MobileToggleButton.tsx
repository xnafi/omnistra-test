import { motion } from "framer-motion";

interface Props {
  open: boolean;
  onClick: () => void;
}

export default function MobileToggleButton({ open, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="relative w-8 h-8 flex items-center justify-center lg:hidden"
      aria-label="Toggle menu"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
        transition={{ duration: 0.3 }}
        className="absolute w-6 h-0.5 bg-white rounded"
      />

      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute w-6 h-0.5 bg-white rounded"
      />

      <motion.span
        animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
        transition={{ duration: 0.3 }}
        className="absolute w-6 h-0.5 bg-white rounded"
      />
    </button>
  );
}
