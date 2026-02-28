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

      <div className="col-span-2 grid grid-cols-2 gap-2">
        <CompanySideCard
          imgSrc="/assets/CompanyNav/company1.svg"
          title="Brand"
        />
        <CompanySideCard
          imgSrc="/assets/CompanyNav/company2.svg"
          title="Careers"
          badge="We're Hiring!"
        />
        <CompanySideCard imgSrc="/assets/CompanyNav/company3.svg" title="Become a Partner" />
        <CompanySideCard imgSrc="/assets/CompanyNav/company4.svg" title="Contact Us" />
      </div>
    </motion.div>
  );
}
