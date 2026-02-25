import Image from "next/image";
import logo2 from "../../../public/assets/logo-2.png";

export default function Marquee({ activeMenu }: { activeMenu: string | null }) {
  const isActive = activeMenu !== null;

  return (
    <div
      className={`transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] mx-auto overflow-hidden whitespace-nowrap ${isActive ? "max-w-[72.72rem] px-4 py-2" : "max-w-full px-6 py-2"}
      `}
    >
      <div className="marquee flex w-max items-center gap-6 text-sm font-bold uppercase cursor-pointer">
        <div className="flex items-center gap-3">
          <Image src={logo2} alt="Logo" width={20} height={32} />
          <span className="accentColor">
            Announcing our $35m series A funding
          </span>
          <span>to take down friendly fraud – read more →</span>

          <Image src={logo2} alt="Logo" width={20} height={32} />
          <span className="accentColor">
            Announcing our $35m series A funding
          </span>
          <span>to take down friendly fraud – read more →</span>

          <Image src={logo2} alt="Logo" width={20} height={32} />
          <span className="accentColor">
            Announcing our $35m series A funding
          </span>
          <span>to take down friendly fraud – read more →</span>

          <Image src={logo2} alt="Logo" width={20} height={32} />
          <span className="accentColor">
            Announcing our $35m series A funding
          </span>
          <span>to take down friendly fraud – read more →</span>
        </div>

        <div className="flex items-center gap-3">
          <Image src={logo2} alt="Logo" width={20} height={32} />
          <span className="accentColor">
            Announcing our $35m series A funding
          </span>
          <span>to take down friendly fraud – read more →</span>
        </div>
      </div>
    </div>
  );
}
