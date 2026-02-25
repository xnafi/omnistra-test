import { motion } from "framer-motion";
import ProductMegaMenu from "./ProductMegaMenu";


interface MegaMenuProps {
  activeMenu: string;
}

export default function MegaMenu({ activeMenu }: MegaMenuProps) {
  return (
    <motion.div
      key={activeMenu}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 16 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-0 right-0 top-full mt-6 z-40"
    >
      <div className="container">
        <div className="rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl p-10">
          {activeMenu === "Product" && <ProductMegaMenu />}
        </div>
      </div>
    </motion.div>
  );
}
