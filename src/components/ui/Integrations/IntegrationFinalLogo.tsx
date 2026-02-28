import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import logo from '../../../../public/assets/logo-2.png';

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
      className="absolute w-20 h-20 md:w-30 md:h-30 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl z-30"
    >
      <Image
        src={logo}
        alt="Final Logo"
        width={50}
        height={50}
        className="lg:h-20 lg:w-20"
      />
    </motion.div>
  );
}
