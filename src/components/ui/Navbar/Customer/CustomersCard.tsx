import { CustomersCardProps } from "@/types/NavTypes";
import Image from "next/image";

export default function CustomersCard({
  title,
  subtitle,
  stat,
  description,
  tag,
  imgSrc,
}: CustomersCardProps & { imgSrc?: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl hover:bg-black bg-black/70 border border-white/10 py-6 px-4 h-64 transition-all duration-500 hover:border-white/20 hover:-translate-y-1 cursor-pointer">
      {/* Background Image */}
      <Image
        src={imgSrc || "/assets/customers/default.png"}
        alt=""
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />

      {/* Content */}
      <div className="relative z-10">
        {!stat && <h3 className="text-lg font-semibold text-white">{title}</h3>}

        {subtitle && <p className="text-white text-sm mt-2">{subtitle}</p>}

        {stat && (
          <div className="mt-10">
            <h3 className="text-4xl font-bold text-white">{stat}</h3>
            <p className="text-white text-sm mt-2">{description}</p>
          </div>
        )}

        {tag && (
          <div className="absolute bottom-4 right-4 text-xs text-white/50">
            {tag}
          </div>
        )}
      </div>

      <button className="absolute cursor-pointer bottom-4 right-4 text-white/80 hover:text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        Learn More
      </button>
    </div>
  );
}
