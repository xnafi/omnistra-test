import Image from "next/image";
import hero from '../../public/assets/hero.jpg';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="flex min-h-[200vh] w-full flex-col container">
        <Image
          src={hero}
          alt="Hero Image"
          height={400}
          width={400}
          className="w-full h-auto rounded-lg mt-8"
        />
      </main>
    </div>
  );
}
