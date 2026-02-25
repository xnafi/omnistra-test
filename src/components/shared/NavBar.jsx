import Image from "next/image";
import logo from "../../../public/assets/logo.webp";
import Marquee from "../ui/Marquee";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Marquee />

      <nav className="bg-transparent">
        <div className="containerNav mx-auto flex items-center justify-between py-4 font-(--font-navbar)">
          {/* Logo */}
          <Image src={logo} alt="Logo" width={180} height={32} />

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-xs font-medium uppercase glassEffect py-3 px-6 rounded-full">
            <Link href="/product">Product</Link>
            <Link href="/customers">Customers</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/integrations">Integrations</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/company">Company</Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex gap-6 text-sm font-medium">
            <Link href="/login">Login</Link>
            <Link href="/pricing" className="font-semibold">
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />

            <label htmlFor="menu-toggle" className="cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Overlay */}
            <div className="fixed inset-0 bg-black/40 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300" />

            {/* Mobile Drawer */}
            <div
              className="
              fixed top-0 right-0 h-full w-72 bg-black text-white
              transform translate-x-full
              peer-checked:translate-x-0
              transition-transform duration-300 ease-in-out
              p-6
            "
            >
              <div className="flex justify-end mb-8">
                <label htmlFor="menu-toggle" className="cursor-pointer">
                  ✕
                </label>
              </div>

              <div className="flex flex-col gap-6 text-sm uppercase font-medium">
                <Link href="/product">Product</Link>
                <Link href="/customers">Customers</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/integrations">Integrations</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/company">Company</Link>

                <div className="pt-6 border-t border-white/20">
                  <Link href="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
