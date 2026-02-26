import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiArrowDownFill } from "react-icons/ri";



export default function MobileAccordionItem({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-wide text-white/80 font-navbar">
          {label}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/60"
        >
          <RiArrowDownFill size={12} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pb-4 text-sm text-white/60"
          >
            <div className="flex flex-col gap-3">
              <a href="#">Sub item 1</a>
              <a href="#">Sub item 2</a>
              <a href="#">Sub item 3</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}