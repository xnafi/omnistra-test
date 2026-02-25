import Image from "next/image";
import logo2 from "../../../public/assets/logo-2.png";

export default function Marquee() {
  return (
    <div className="max-w-360 mx-auto overflow-hidden whitespace-nowrap py-2">
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

        {/* Duplicate for seamless loop */}
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
