import CustomersCard from "./CustomersCard";

export default function CustomersMegaMenu() {
  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="col-span-2">
        <CustomersCard
          title="All Case Studies"
          subtitle="Explore success stories"
        />
      </div>

      <CustomersCard
        title="Obvi"
        stat="170%"
        description="Win-rate increase"
        tag="eCommerce"
      />

      <CustomersCard
        title="Elementor"
        stat="90%"
        description="Reduction in time spent managing chargebacks"
        tag="SaaS"
      />

      <CustomersCard
        title="Fanatics"
        stat="2X"
        description="Chargeback Win Rate"
        tag="Marketplace"
      />

      <CustomersCard
        title="Hexclad"
        stat="328"
        description="Hours saved"
        tag="Travel"
      />
    </div>
  );
}
