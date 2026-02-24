import Image from "next/image";
import logo from "../../../public/assets/logo.webp";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 font-(--font-navbar) containerNav">
      <h1 className="text-lg font-medium">
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={32}
          className="inline-block mr-2"
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
  );
}
