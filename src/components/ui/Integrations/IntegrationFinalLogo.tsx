import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

export default function IntegrationFinalLogo({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollProgress, [0.65, 0.85], [0, 1]);
  const scale = useTransform(scrollProgress, [0.65, 0.85], [0.6, 1]);
  const rotate = useTransform(scrollProgress, [0.65, 0.85], [-10, 0]);

  return (
    <motion.div
      style={{ opacity, scale, rotate }}
      className="absolute w-40 h-40 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl z-30"
    >
      <Image
        src="/logos/main-logo.png"
        alt="Final Logo"
        width={110}
        height={110}
      />
    </motion.div>
  );
}
