import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

export default function IntegrationFloatingLogo({
  src,
  x,
  y,
  scrollProgress,
}: {
  src: string;
  x: number;
  y: number;
  scrollProgress: MotionValue<number>;
}) {
  const moveX = useTransform(scrollProgress, [0, 0.55], [x, 0]);
  const moveY = useTransform(scrollProgress, [0, 0.55], [y, 0]);

  const scale = useTransform(scrollProgress, [0.45, 0.7], [1, 0.4]);
  const opacity = useTransform(scrollProgress, [0.5, 0.75], [1, 0]);
  const blur = useTransform(scrollProgress, [0.5, 0.75], [0, 10]);

  // ✅ Correct way
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.div
      style={{
        x: moveX,
        y: moveY,
        scale,
        opacity,
        filter: blurFilter,
      }}
      className="absolute w-18 h-18 md:w-28 md:h-28 bg-white rounded-2xl shadow-md flex items-center justify-center will-change-transform"
    >
      <Image src={src} alt="" width={70} height={70} />
    </motion.div>
  );
}
