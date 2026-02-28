"use client";

import Image from "next/image";

export default function ResourceCard({
  title,
  imgSrc,
  badge,
}: {
  title: string;
  imgSrc?: string;
  badge?: string;
}) {
  return (
    <div className="relative overflow-hidden group rounded-2xl bg-black/70 border border-white/10 transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:bg-black cursor-pointer p-6 h-72">
      {/* Background Image */}
      <Image
        src={imgSrc || "/assets/resources/default.png"}
        alt="resource background"
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
      </div>

      {/* Hover CTA */}
      <button className="absolute bottom-4 right-4 text-white/80 hover:text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cursor-pointer">
        Explore
      </button>
    </div>
  );
}
