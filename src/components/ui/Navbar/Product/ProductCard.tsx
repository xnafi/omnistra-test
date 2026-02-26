import { ProductCardProps } from "@/types/NavTypes";

export default function ProductCard({
  title,
  description,
  badge,
}: ProductCardProps) {
  return (
    <div className="relative rounded-2xl bg-linear-to-b from-white/5 to-white/0 border border-white/10 p-6 h-full lg:h-72 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:-translate-y-1 cursor-pointer">
      {/* Radar background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[24px_24px]" />

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
  );
}
