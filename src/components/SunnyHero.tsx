import { ArrowRight, Calendar, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SunnyHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-sunray-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-farm-family.jpg" 
          alt="Happy family feeding animals at Southlake Sunrays Farm" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sunray-100 mb-6 animate-fade-in-up">
          <Sun className="w-5 h-5 text-sunray-400" />
          <span className="font-nunito font-semibold tracking-wide">Southlake's Favorite Petting Zoo</span>
        </div>
        
        <h1 className="font-fredoka text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] animate-fade-in-up delay-100">
          Where Sunshine <br />
          <span className="text-sunray-400">Meets Snuggles</span>
        </h1>
        
        <p className="font-nunito text-xl md:text-2xl text-gray-100 max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200">
          Escape the city and make furry friends. Book your family's private farm experience today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-sunray-500 hover:bg-sunray-600 text-white shadow-lg shadow-sunray-500/30 transition-all hover:scale-105">
            Book Your Visit
            <Calendar className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 border-white text-pasture-900 bg-white/90 hover:bg-white hover:text-pasture-800 transition-all">
            Meet the Animals
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 60C480 60 600 90 720 100C840 110 960 100 1080 85C1200 70 1320 50 1380 40L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFFBEB"/>
        </svg>
      </div>
    </section>
  );
};

export default SunnyHero;
