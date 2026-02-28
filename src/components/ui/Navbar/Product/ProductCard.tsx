import { ProductCardProps } from "@/types/NavTypes";
import Image from "next/image";

export default function ProductCard({
  title,
  description,
  badge,
  imgSrc,
}: ProductCardProps) {
  return (
    <div className="relative overflow-hidden group rounded-2xl hover:bg-black bg-black/70 border transition-all border-white/10 py-6 px-4 h-full lg:h-72 duration-500 hover:border-white/20 hover:-translate-y-1 cursor-pointer">
      {/* Background Image */}
      <Image
        src={imgSrc || "/assets/products/default.png"}
        alt="product image"
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 1024px) 100vw, 33vw"
        priority={false}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <h4 className="text-white font-semibold text-lg">{title}</h4>

          {badge && (
            <span className="text-[8px] bg-white/10 px-2 py-1 rounded-full text-white">
              {badge}
            </span>
          )}
        </div>

        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>

      <button className="absolute cursor-pointer bottom-4 right-4 text-white/80 hover:text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        Learn More
      </button>
    </div>
  );
}
