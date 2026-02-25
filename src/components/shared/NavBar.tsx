"use client";

import Image from "next/image";
import logo from "../../../public/assets/logo.webp";
import logo2 from "../../../public/assets/logo-2.png";
import Marquee from "../ui/Marquee";
import { ReButton } from "../re-ui/ReButton";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCompact = scrolled || activeMenu !== null;

  return (
    <header>
    <Marquee activeMenu={activeMenu} />

      <motion.nav
        layout
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 ${
          scrolled ? "top-0 py-4" : "top-5 py-4"
        }`}
      >
        {/* NAV CONTAINER */}
        <motion.div
          layout
          onMouseLeave={() => setActiveMenu(null)}
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-xs font-medium uppercase">
            {menuItems.map((item) => (
              <div
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                className="cursor-pointer tracking-wide hover:text-white transition-colors duration-200"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex gap-6 text-sm font-medium">
            <ReButton href="/login" variant="dark">
              Sign In
            </ReButton>
            <ReButton href="/login" variant="primary">
              Sign Up
            </ReButton>
          </div>
        </motion.div>

        {/* MEGA MENU */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 20 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 mt-4"
            >
              <div className="container">
                <div className="rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl p-10">
                  <div className="grid grid-cols-5 gap-8">
                    <MenuCard
                      title="Prevent"
                      description="Stop friendly fraud before it happens."
                    />
                    <MenuCard
                      title="Automation"
                      description="Fully automated chargeback recovery."
                    />
                    <MenuCard
                      title="Alerts"
                      description="Proactive fraud alerts."
                    />
                    <MenuCard
                      title="Insights"
                      description="Advanced analytics dashboard."
                    />
                    <MenuCard
                      title="Connect"
                      description="Embed or integrate via API."
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

function MenuCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-3 cursor-pointer hover:-translate-y-1 transition-transform duration-200">
      <h4 className="text-white font-semibold text-base">{title}</h4>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
