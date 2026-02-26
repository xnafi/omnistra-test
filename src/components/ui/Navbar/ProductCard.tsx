interface ProductCardProps {
  title: string;
  description: string;
  badge?: string;
}

export default function ProductCard({
  title,
  description,
  badge,
}: ProductCardProps) {
  return (
    <div className=" relative rounded-2xl bg-linear-to-b from-white/5 to-white/0 border border-white/10 p-6 h-72 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:-translate-y-1 cursor-pointer">
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
