import { motion } from "framer-motion";
import CompanyFeatureCard from "./CompanyFeatureCard";
import CompanySideCard from "./CompanySideCard";

export default function CompanyMegaMenu() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="grid grid-cols-5 gap-6 items-stretch"
    >
      <div className="col-span-3">
        <CompanyFeatureCard />
      </div>

      <div className="col-span-2 grid grid-cols-2 gap-6">
        <CompanySideCard title="Brand" />
        <CompanySideCard title="Careers" badge="We're Hiring!" />
        <CompanySideCard title="Become a Partner" />
        <CompanySideCard title="Contact Us" />
      </div>
    </motion.div>
  );
}
