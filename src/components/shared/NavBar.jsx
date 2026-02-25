import Image from "next/image";
import logo from "../../../public/assets/logo.webp";
import Marquee from "../ui/Marquee";

export default function NavBar() {
  return (
    <div className="overflow-hidden">
      <Marquee />
      <nav className="flex items-center justify-between font-(--font-navbar) containerNav border">
        <h1 className="text-lg font-medium">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={32}
            className="inline-block"
          />
        </h1>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
        </div>
      </nav>
    </div>
  );
}
