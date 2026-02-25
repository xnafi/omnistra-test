"use client";

import { useEffect, useRef, useState } from "react";
import Marquee from "../../ui/Marquee";
import { motion, AnimatePresence } from "framer-motion";
import NavLogo from "../../ui/Navbar/NavLogo";
import NavMenu from "../../ui/Navbar/NavMenu";
import NavActions from "../../ui/Navbar/NavActions";
import MegaMenu from "../../ui/Navbar/MegaMenu";
import { ReButton } from "@/components/re-ui/ReButton";
import { Menu, X } from "lucide-react";

const menuItems = [
  "Product",
  "Customers",
  "Pricing",
  "Integrations",
  "Resources",
  "Company",
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  /* Scroll Detection */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll on mobile open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const isCompact = scrolled || activeMenu !== null;

  return (
    <header>
      <Marquee activeMenu={activeMenu} />

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.nav
          layout
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed left-0 right-0 z-50 ${
            scrolled ? "top-0 py-4" : "top-5 py-4"
          }`}
        >
          <motion.div
            layout
            transition={{ duration: 0.4 }}
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
            <NavLogo scrolled={scrolled} />

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <NavMenu menuItems={menuItems} setActiveMenu={setActiveMenu} />
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:block">
              <NavActions />
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </motion.div>
        </motion.nav>

        {/* Desktop Mega Menu */}
        <AnimatePresence mode="wait">
          {activeMenu && <MegaMenu activeMenu={activeMenu} />}
        </AnimatePresence>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setMobileOpen(false)}
              />

              {/* Slide Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 right-0 h-full w-80 bg-black z-50 p-6 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <span className="text-white font-semibold text-lg">Menu</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-white"
                    aria-label="Close menu"
                  >
                    <X size={26} />
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6 text-white uppercase text-sm font-medium">
                  {menuItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => setMobileOpen(false)}
                      className="text-left tracking-wide hover:text-white/70 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="flex-1" />

                {/* Actions */}
                <div className="flex flex-col gap-4">
                  <ReButton href="/login" variant="dark">
                    Sign In
                  </ReButton>
                  <ReButton href="/login" variant="primary">
                    Sign Up
                  </ReButton>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
