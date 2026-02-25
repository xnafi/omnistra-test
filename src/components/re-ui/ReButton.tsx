import { ButtonProps } from "@/types/ButtonType";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ReButton({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const primary = "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-colors duration-500";

  const dark = "bg-black text-white hover-glassEffect";

  return (
    <Link
      href={href}
      className={`
        relative inline-flex items-center justify-center
        rounded-full px-0.5 py-0.5
        overflow-hidden
        animated-border
        ${className}
      `}
    >
      <span
        className={`
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
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </span>
    </Link>
  );
}
