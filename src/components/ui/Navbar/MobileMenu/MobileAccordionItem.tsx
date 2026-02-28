"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiArrowDownFill } from "react-icons/ri";
import ProductMegaMenu from "../Product/ProductMegaMenu";
import Link from "next/link";

export default function MobileAccordionItem({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  const isProduct = label === "Product";
  const hasSubmenu = label !== "Pricing";

  /* PRICING (No submenu) */

  if (!hasSubmenu) {
    return (
      <div className="border-b border-white/10">
        <Link
          href="/pricing"
          className="w-full block py-5 text-xs uppercase tracking-wide text-white/80 font-navbar hover:text-white transition"
        >
          {label}
        </Link>
      </div>
    );
  }

  /* DEFAULT ACCORDION */

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-wide text-white/80 font-navbar">
          {label}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-white/60"
        >
          <RiArrowDownFill size={12} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: "easeInOut" },
              opacity: { duration: 0.25 },
            }}
            className="overflow-hidden text-sm text-white/60"
          >
            {isProduct ? (
              <ProductMegaMenu />
            ) : (
              <div className="flex flex-col gap-3 mb-4 px-1">
                <a href="#">Sub item 1</a>
                <a href="#">Sub item 2</a>
                <a href="#">Sub item 3</a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
