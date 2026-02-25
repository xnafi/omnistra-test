import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../../public/assets/logo.webp";
import logo2 from "../../../../public/assets/logo-2.png";

export default function NavLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <div className="relative h-8 flex items-center">
      <AnimatePresence mode="wait">
        {!scrolled ? (
          <motion.div
            key="logo1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={logo} alt="Logo" width={180} height={32} />
          </motion.div>
        ) : (
          <motion.div
            key="logo2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={logo2} alt="Logo" width={30} height={32} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
