import { IntegrationCardProps } from "@/types/NavTypes";


export default function IntegrationCard({
  title,
  subtitle,
}: IntegrationCardProps) {
  return (
    <div
      className="relative rounded-2xl bg-linear-to-b from-white/5 to-white/0 border border-white/10 p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer"
    >
      <h4 className="text-white font-semibold text-base mb-1">{title}</h4>

      <p className="text-white/60 text-sm">{subtitle}</p>
    </div>
  );
}
