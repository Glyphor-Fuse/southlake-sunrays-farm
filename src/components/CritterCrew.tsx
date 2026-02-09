import { useState } from 'react';
import { Award, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Animal {
  id: string;
  name: string;
  species: string;
  personality: string;
  image: string;
  color: string;
}

const animals: Animal[] = [
  {
    id: '1',
    name: 'Barnaby',
    species: 'Highland Cow',
    personality: 'The Gentle Giant',
    image: '/images/animal-cow.jpg',
    color: 'bg-amber-100'
  },
  {
    id: '2',
    name: 'Pip & Pop',
    species: 'Pygmy Goats',
    personality: 'Chaos Twins',
    image: '/images/animal-goat.jpg',
    color: 'bg-blue-100'
  },
  {
    id: '3',
    name: 'Luna',
    species: 'Alpaca',
    personality: 'Professional Hugger',
    image: '/images/animal-alpaca.jpg',
    color: 'bg-rose-100'
  }
];

export const CritterCrew = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-cream-50" id="animals">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Award variant="secondary" className="mb-4 bg-pasture-100 text-pasture-800 hover:bg-pasture-200">
            Meet the Crew
          </Award>
          <h2 className="font-fredoka text-4xl md:text-6xl text-pasture-900 mb-6">
            Farm Famous Faces
          </h2>
          <p className="font-nunito text-xl text-pasture-700 max-w-2xl mx-auto">
            These aren't just animals; they're the stars of the show. Click a card to see who you'll meet on your tour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <div 
              key={animal.id}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ease-out cursor-pointer hover:-translate-y-2 ${activeId === animal.id ? 'ring-4 ring-sunray-400 scale-[1.02]' : ''}`}
              onMouseEnter={() => setActiveId(animal.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className={`aspect-[3/4] ${animal.color}`}>
                <img 
                  src={animal.image} 
                  alt={animal.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Card Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold mb-3 border border-white/30">
                    {animal.species}
                  </span>
                  <h3 className="font-fredoka text-4xl mb-2">{animal.name}</h3>
                  <p className="font-nunito text-lg text-white/90 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sunray-400" />
                    {animal.personality}
                  </p>
                  
                  <Button className="w-full rounded-full bg-sunray-500 hover:bg-sunray-600 text-white font-bold h-12 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    Book a Meet & Greet
                    <Heart className="w-4 h-4 ml-2 fill-current" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CritterCrew;
