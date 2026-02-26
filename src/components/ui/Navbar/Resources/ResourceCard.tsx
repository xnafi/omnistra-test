

export default function ResourceCard({ title }: { title: string }) {
  return (
    <div className=" relative overflow-hidden rounded-2xl bg-linear-to-b from-white/6 to-white/2 border border-white/10 p-6 hover:border-white/20 hover:bg-white/6 transition-all duration-500 group cursor-pointer h-72 hover:-translate-y-1">
      {/* Radar background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[24px_24px]" />

      {/* Subtle ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full border border-white/10" />
      </div>

      <h4 className="relative text-white font-semibold text-base">{title}</h4>
    </div>
  );
}
