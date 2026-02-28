import CustomersCard from "./CustomersCard";

export default function CustomersMegaMenu() {
  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="col-span-2">
        <CustomersCard
          title="All Case Studies"
          subtitle="Explore success stories"
          imgSrc="/assets/customer/customer1.svg"
        />
      </div>

      <CustomersCard
        title="Obvi"
        description="Win-rate increase"
        tag="eCommerce"
        imgSrc="/assets/customer/customer2.svg"
      />

      <CustomersCard
        title="Elementor"
        description="Reduction in time spent managing chargebacks"
        tag="SaaS"
        imgSrc="/assets/customer/customer3.jpg"
      />

      <CustomersCard
        title="Fanatics"
        description="Chargeback Win Rate"
        tag="Marketplace"
        imgSrc="/assets/customer/customer4.svg"
      />

      <CustomersCard
        title="Hexclad"
        description="Hours saved"
        tag="Travel"
        imgSrc="/assets/customer/customer5.jpg"
      />
    </div>
  );
}
