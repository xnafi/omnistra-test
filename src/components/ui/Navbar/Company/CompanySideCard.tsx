import { CompanySidebarCardProps } from "@/types/NavTypes";
import Image from "next/image";

export default function CompanySideCard({
  title,
  badge,
  imgSrc,
}: CompanySidebarCardProps & { imgSrc?: string }) {
  return (
    <div className="relative overflow-hidden group rounded-2xl bg-black/70 border border-white/10 p-6 h-40 cursor-pointer transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:bg-black">
      {/* Background Image */}
      <Image
        src={imgSrc || "/assets/company/default.png"}
        alt="company background"
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 1024px) 100vw, 33vw"
        priority={false}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between mb-3">
        <h4 className="text-white font-semibold text-lg">{title}</h4>

        {badge && (
          <span className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-white/80">
            {badge}
          </span>
        )}
      </div>

      {/* Hover CTA */}
      <button className="absolute bottom-4 right-4 text-white/80 hover:text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        Learn More
      </button>
    </div>
  );
}
