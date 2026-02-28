import Image from "next/image";
import logo from '../../../../../public/1.svg';


import IntegrationCard from "./IntegrationCard";
export default function IntegrationsMegaMenu() {
  return (
    <div className="grid grid-cols-5 gap-6 items-stretch">
      {/* LEFT LARGE CARD */}
      <div className="col-span-3">
        <div className="relative group overflow-hidden rounded-2xl bg-black/70 hover:bg-black cursor-pointer border border-white/10 p-8 h-full hover:border-white/20 transition-all duration-500 group hover:-translate-y-1">
          <h3 className="text-white text-lg font-semibold mb-2">
            All Integrations
          </h3>

          <p className="text-sm mb-10 max-w-sm">
            Choose from hundreds of integrated platforms.
          </p>
          <Image
            src={logo}
            alt="Company image"
            fill
            className="object-cover pointer-events-none opacity-60"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority={false}
          />

          <button className="absolute cursor-pointer bottom-4 right-4 text-white/80 hover:text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            Learn More
          </button>
        </div>
      </div>

      {/* RIGHT SIDE STACKED */}
      <div className="col-span-2 flex flex-col gap-2">
        <IntegrationCard
          title="Stripe"
          subtitle="#1 Chargeback Solution for Stripe Merchants"
          imgSrc="/assets/CompanyNav/company1.svg"
        />
        <IntegrationCard
          title="Shopify"
          subtitle="Powering 30k+ Shopify Merchants"
          imgSrc="/assets/CompanyNav/company2.svg"
        />
        <IntegrationCard
          title="WooCommerce"
          subtitle="Native WooCommerce Integration"
          imgSrc="/assets/CompanyNav/company3.svg"
        />
      </div>
    </div>
  );
}
