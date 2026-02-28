import { IntegrationsHeroSection } from "@/components/ui/Integrations/IntegrationsSection";



export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="flex min-h-[200vh] w-full flex-col container">
        <IntegrationsHeroSection />
      </main>
    </div>
  );
}
