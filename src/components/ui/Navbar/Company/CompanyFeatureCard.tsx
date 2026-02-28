import Image from "next/image";

export default function CompanyFeatureCard() {
  return (
    <div className="relative overflow-hidden group rounded-2xl bg-black/70 border border-white/10 p-6 h-full cursor-pointer transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:bg-black">
      <h3 className="text-white text-lg font-semibold mb-2">Who We Are</h3>
      <Image
        src="/assets/CompanyNav/company2.svg"
        alt="company background"
        fill
        className="object-center pointer-events-none"
        sizes="(max-width: 1024px) 100vw, 33vw"
        priority={false}
      />

      <p className="text-white/60 text-sm max-w-xs">
        The story behind the Chargeflow.
      </p>
    </div>
  );
}
