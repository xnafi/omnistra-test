import ProductCard from "./ProductCard";

export default function ProductMegaMenu() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <ProductCard
        title="Prevent"
        badge="NEW"
        description="Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens."
      />

      <ProductCard
        title="Automation"
        description="Fully automated chargeback recovery with 4x ROI guarantee."
      />

      <ProductCard
        title="Alerts"
        description="Cut 90% of chargebacks before they happen, powered by Visa and Mastercard."
      />

      <ProductCard
        title="Insights"
        badge="FREE"
        description="Get a bird's-eye view into your payments and chargebacks, all in a single dashboard."
      />

      <ProductCard
        title="Connect"
        badge="FOR PLATFORMS"
        description="Integrate Chargeflow into your platform via Embedding, Whitelabel or API."
      />
    </div>
  );
}
