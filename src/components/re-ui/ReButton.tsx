import { ButtonProps } from "@/types/ButtonType";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ReButton({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const primary =
    "bg-[#3448ff] text-white hover:bg-[#2c3be0] transition-colors duration-300";

  const dark = "bg-gray-900 text-white transition-colors duration-300";

  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center rounded-full px-0.5 py-0.5 overflow-hidden animated-border ${className}`}
    >
      <span
        className={`
          group
          relative z-10
          px-4 py-2
          rounded-full
          flex items-center gap-2
          font-semibold
          ${variant === "primary" ? primary : dark}
        `}
      >
        {children}
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300  group-hover:translate-x-1 group-hover:rotate-45"
        />
      </span>
    </Link>
  );
}
