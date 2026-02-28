import ProductCard from "./ProductCard";

export default function ProductMegaMenu() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 mb-6 lg:mb-0">
      <ProductCard
        title="Prevent"
        badge="NEW"
        description="Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens."
        imgSrc="/assets/products/product1.png"
      />

      <ProductCard
        title="Automation"
        description="Fully automated chargeback recovery with 4x ROI guarantee."
        imgSrc="/assets/products/product2.png"
      />

      <ProductCard
        title="Alerts"
        description="Cut 90% of chargebacks before they happen, powered by Visa and Mastercard."
        imgSrc="/assets/products/product3.png"
      />

      <ProductCard
        title="Insights"
        badge="FREE"
        description="Get a bird's-eye view into your payments and chargebacks, all in a single dashboard."
        imgSrc="/assets/products/product4.png"
      />

      <ProductCard
        title="Connect"
        badge="FOR PLATFORMS"
        description="Integrate Chargeflow into your platform via Embedding, Whitelabel or API."
        imgSrc="/assets/products/product55.png"
      />
    </div>
  );
}
