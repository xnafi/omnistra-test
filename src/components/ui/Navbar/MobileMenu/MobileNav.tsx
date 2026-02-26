import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReButton } from "@/components/re-ui/ReButton";
import { MobileNavProps } from "@/types/NavTypes";
import DotDivider from "@/components/ui/Navbar/MobileMenu/DotDivider";
import MobileAccordionItem from "@/components/ui/Navbar/MobileMenu/MobileAccordionItem";

export default function MobileNav({
  open,
  onClose,
  menuItems,
}: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            onClick={onClose}
          />

          {/* Slide From Top */}
          <motion.div
            key="panel"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.5, 1],
            }}
            className="fixed inset-0 z-40 flex items-start justify-center pt-20 overflow-auto"
          >
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden">
              <div className="relative p-6 flex flex-col">
                {/* Buttons */}
                <div className="flex items-center justify-between mb-6 gap-4">
                  <ReButton
                    href="/login"
                    variant="dark"
                    className="text-sm border border-white/10"
                  >
                    Sign In
                  </ReButton>

                  <ReButton href="/demo" variant="primary" className="text-sm">
                    Schedule a Demo
                  </ReButton>
                </div>

                <DotDivider />

                {/* Menu Sections */}
                <div className="mt-4">
                  {menuItems.map((item) => (
                    <MobileAccordionItem key={item} label={item} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
