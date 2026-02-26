import IntegrationCard from "./IntegrationCard";
export default function IntegrationsMegaMenu() {
  return (
    <div className="grid grid-cols-5 gap-6 items-stretch">
      {/* LEFT LARGE CARD */}
      <div className="col-span-3">
        <div
          className="
          relative overflow-hidden
          rounded-2xl
          bg-linear-to-b from-white/6 to-white/2
          border border-white/10
          p-8 h-full
          hover:border-white/20
          transition-all duration-500
          group
        "
        >
          <h3 className="text-white text-lg font-semibold mb-2">
            All Integrations
          </h3>

          <p className="text-white/60 text-sm mb-10 max-w-sm">
            Choose from hundreds of integrated platforms.
          </p>

          {/* Radial Glow */}
          <div className="absolute -bottom-15 -right-15 w-65 h-65 bg-white/10 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition" />

          {/* Center Node */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="relative w-24 h-24 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/20 blur-sm" />
            </div>
          </div>

          {/* Radar background */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[24px_24px]" />
        </div>
      </div>

      {/* RIGHT SIDE STACKED */}
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
