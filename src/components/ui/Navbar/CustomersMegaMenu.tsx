import CaseStudyCard from "./CaseStudyCard";

export default function CustomersMegaMenu() {
  return (
    <div className="grid grid-cols-5 gap-6">
      <CaseStudyCard
        title="All Case Studies"
        subtitle="Explore success stories"
      />

      <CaseStudyCard
        title="Obvi"
        stat="170%"
        description="Win-rate increase"
        tag="eCommerce"
      />

      <CaseStudyCard
        title="Elementor"
        stat="90%"
        description="Reduction in time spent managing chargebacks"
        tag="SaaS"
      />

      <CaseStudyCard
        title="Fanatics"
        stat="2X"
        description="Chargeback Win Rate"
        tag="Marketplace"
      />

      <CaseStudyCard
        title="Hexclad"
        stat="328"
        description="Hours saved"
        tag="Travel"
      />
    </div>
  );
}
