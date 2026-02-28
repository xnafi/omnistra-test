"use client";

import { useEffect, useRef, useState } from "react";
import Marquee from "../../../src/components/ui/Marquee";
import { motion, AnimatePresence } from "framer-motion";
import NavLogo from "../../../src/components/ui/Navbar/NavLogo";
import NavMenu from "../../../src/components/ui/Navbar/NavMenu";
import NavActions from "../../../src/components/ui/Navbar/NavActions";
import MegaMenu from "../../../src/components/ui/Navbar/MegaMenu";
import MobileNav from "@/components/ui/Navbar/MobileMenu/MobileNav";
import MobileToggleButton from "@/components/ui/Navbar/MobileMenu/MobileToggleButton";

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
            <MobileToggleButton
              open={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            />
          </motion.div>
        </motion.nav>

        {/* Desktop Mega Menu */}
        <AnimatePresence mode="wait">
          {activeMenu && <MegaMenu activeMenu={activeMenu} />}
        </AnimatePresence>

        {/* MOBILE MENU */}
        <MobileNav
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          menuItems={menuItems}
        />
      </div>
    </header>
  );
}
