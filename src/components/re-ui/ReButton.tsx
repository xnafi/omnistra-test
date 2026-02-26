"use client";

import { ButtonProps } from "@/types/ButtonType";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";

interface ResponsiveButtonProps extends ButtonProps {
  fullWidth?: boolean;
}

export function ReButton({
  href,
  children,
  variant = "primary",
  className = "",
  fullWidth = false,
}: ResponsiveButtonProps) {
  const base =
    "relative inline-flex items-center justify-center rounded-full overflow-hidden animated-border px-[2px] py-[2px]";

  const primary =
    "bg-[#3448ff] text-white hover:bg-[#2c3be0] transition-colors duration-300";

  const dark =
    "bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300";

  const widthClass = fullWidth ? "w-full" : "w-fit";

  const variantClass = variant === "primary" ? primary : dark;

  return (
    <Link href={href} className={`${base} ${widthClass} ${className}`}>
      <span
        className={` group relative z-10 flex items-center justify-center gap-2 rounded-full font-semibold px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 ${variantClass}`}
      >
        {children}

        <RiArrowRightLine
          size={14}
          className=" transition-transform duration-300 -rotate-45 group-hover:translate-x-1 group-hover:rotate-0"
        />
      </span>
    </Link>
  );
}
