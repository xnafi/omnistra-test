"use client";

import Image from "next/image";
import logo from "../../../../public/assets/logo.webp";
import logo2 from "../../../../public/assets/logo-2.png";
import { motion, AnimatePresence } from "framer-motion";
import NavMenu from "./NavMenu";
import { ReButton } from "@/components/re-ui/ReButton";


interface Props {
  scrolled: boolean;
  activeMenu: string | null;
  setActiveMenu: (value: string | null) => void;
  menuItems: string[];
}

export default function NavContainer({
  scrolled,
  activeMenu,
  setActiveMenu,
  menuItems,
}: Props) {
  const isCompact = scrolled || activeMenu !== null;

  return (
    <motion.nav
      layout
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 z-50 ${
        scrolled ? "top-0 py-4" : "top-5 py-4"
      }`}
    >
      <motion.div
        layout
        onMouseLeave={() => setActiveMenu(null)}
        className={`
          ${isCompact ? "container" : "containerNav"}
          flex items-center justify-between
          font-(--font-navbar)
          transition-all duration-500
          ${
            scrolled
              ? "rounded-full bg-black/60 backdrop-blur-md shadow-lg px-6 py-2"
              : ""
          }
        `}
      >
        {/* Logo */}
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

        <NavMenu items={menuItems} setActiveMenu={setActiveMenu} />

        <div className="hidden lg:flex gap-6 text-sm font-medium">
          <ReButton href="/login" variant="dark">
            Sign In
          </ReButton>
          <ReButton href="/login" variant="primary">
            Sign Up
          </ReButton>
        </div>
      </motion.div>
    </motion.nav>
  );
}
