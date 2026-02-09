import { SunnyHero } from "@/components/SunnyHero";
import { CritterCrew } from "@/components/CritterCrew";
import { TicketBarn } from "@/components/TicketBarn";
import { FarmLocation } from "@/components/FarmLocation";

const Index = () => {
  return (
    <main className="min-h-screen bg-cream-50 font-nunito selection:bg-sunray-300">
      <SunnyHero />
      <CritterCrew />
      <TicketBarn />
      <FarmLocation />
      
      {/* Simple Footer */}
      <footer className="bg-pasture-950 text-pasture-200 py-8 text-center text-sm font-nunito">
        <p>© {new Date().getFullYear()} Southlake Sunrays Farm. All rights reserved.</p>
        <p className="mt-2 text-pasture-400">Designed with sunshine and love.</p>
      </footer>
    </main>
  );
};

export default Index;