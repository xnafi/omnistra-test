import { motion } from "framer-motion";
import ProductMegaMenu from "./Product/ProductMegaMenu";
import CustomersMegaMenu from "./Customer/CustomersMegaMenu";
import IntegrationsMegaMenu from "./Integrations/IntegrationsMegaMenu";
import { MegaMenuProps } from "@/types/NavTypes";
import ResourcesMegaMenu from "./Resources/ResourcesMegaMenu";
import CompanyMegaMenu from "./Company/CompanyMegaMenu";


export default function MegaMenu({ activeMenu }: MegaMenuProps) {
  return (
    <motion.div
      key={activeMenu}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 16 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 z-40 top-18"
    >
      <div className="container">
        <div className="rounded-2xl bg-black/70 backdrop-blur-2xl border border-white/10 shadow-2xl py-4 px-2">
          {activeMenu === "Product" && <ProductMegaMenu />}
          {activeMenu === "Customers" && <CustomersMegaMenu />}
          {activeMenu === "Integrations" && <IntegrationsMegaMenu />}
          {activeMenu === "Resources" && <ResourcesMegaMenu />}
          {activeMenu === "Company" && <CompanyMegaMenu />}
        </div>
      </div>
    </motion.div>
  );
}
