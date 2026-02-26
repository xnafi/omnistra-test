import IntegrationCard from "./IntegrationCard";

export default function IntegrationsMegaMenu() {
  return (
    <div className="grid grid-cols-5 gap-6">
      {/* LEFT BIG CARD */}
      <div className="col-span-3">
        <div
          className="
          relative rounded-2xl
          bg-linear-to-b from-white/5 to-white/0
          border border-white/10
          p-8 h-full
          hover:border-white/20
          hover:bg-white/5
          transition-all duration-300
          cursor-pointer
        "
        >
          <h3 className="text-white text-lg font-semibold mb-2">
            All Integrations
          </h3>

          <p className="text-white/60 text-sm mb-8">
            Choose from hundreds of integrated platforms.
          </p>

          {/* Decorative visual placeholder */}
          <div className="absolute bottom-6 left-6 right-6 h-32 bg-white/5 rounded-xl" />
        </div>
      </div>

      {/* RIGHT STACKED CARDS */}
      <div className="col-span-2 flex flex-col gap-6">
        <IntegrationCard
          title="Stripe"
          subtitle="#1 Chargeback Solution for Stripe Merchants"
        />

        <IntegrationCard
          title="Shopify"
          subtitle="Powering 30k+ Shopify Merchants"
        />

        <IntegrationCard
          title="WooCommerce"
          subtitle="Native WooCommerce Integration"
        />
      </div>
    </div>
  );
}
