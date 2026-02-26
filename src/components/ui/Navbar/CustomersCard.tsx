import { CustomersCardProps } from "@/types/NavTypes";

export default function CustomersCard({
  title,
  subtitle,
  stat,
  description,
  tag,
}: CustomersCardProps) {
  return (
    <div className=" group relative rounded-2xl bg-linear-to-b from-white/5 to-white/0 border border-white/10 p-6 h-64 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:-translate-y-1 cursor-pointer">
      {!stat && <h3 className="text-lg font-semibold text-white">{title}</h3>}

      {subtitle && <p className="text-white/60 text-sm mt-2">{subtitle}</p>}

      {stat && (
        <div className="mt-10">
          <h3 className="text-4xl font-bold text-white">{stat}</h3>
          <p className="text-white/60 text-sm mt-2">{description}</p>
        </div>
      )}

      {tag && (
        <div className="absolute bottom-4 right-4 text-xs text-white/50">
          {tag}
        </div>
      )}
    </div>
  );
}
