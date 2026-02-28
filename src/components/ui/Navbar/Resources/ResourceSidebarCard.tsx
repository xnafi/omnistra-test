import { ResourceSidebarCardProps } from "@/types/NavTypes";


export default function ResourceSidebarCard({
  title,
  children,
}: ResourceSidebarCardProps) {
  return (
    <div className=" relative rounded-2xl bg-linear-to-b from-white/6 to-white/2 border border-white/10 p-5 hover:border-white/20 hover:bg-white/6 transition-all duration-500 hover:-translate-y-1">
      <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
      {children}
    </div>
  );
}
