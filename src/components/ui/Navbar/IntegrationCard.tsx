import { IntegrationCardProps } from "@/types/NavTypes";

export default function IntegrationCard({
  title,
  subtitle,
}: IntegrationCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-b from-white/6 to-white/2 border border-white/10 p-6 hover:border-white/20 hover:bg-white/6 transition-all duration-500 group cursor-pointer">
      {/* Soft Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/3" />

      <h4 className="relative text-white font-semibold text-base mb-1">
        {title}
      </h4>

      <p className="relative text-white/60 text-sm">{subtitle}</p>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[20px_20px]" />
    </div>
  );
}
