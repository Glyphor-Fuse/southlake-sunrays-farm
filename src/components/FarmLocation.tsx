import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FarmLocation = () => {
  return (
    <section className="bg-pasture-900 text-white py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="font-fredoka text-4xl md:text-5xl mb-6">
              Come Say Howdy!
            </h2>
            <p className="font-nunito text-xl text-pasture-100/80 leading-relaxed max-w-md">
              We're located in the heart of Southlake, just down the road from the Town Square. Look for the big red barn mailbox!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-sunray-400" />
                </div>
                <div>
                  <h3 className="font-fredoka text-xl mb-1">Our Address</h3>
                  <p className="font-nunito text-pasture-100">1234 Sunny Lane<br/>Southlake, TX 76092</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-sunray-400" />
                </div>
                <div>
                  <h3 className="font-fredoka text-xl mb-1">Visiting Hours</h3>
                  <p className="font-nunito text-pasture-100">Sat - Sun: 9am - 4pm<br/>Weekdays: By Appointment Only</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-sunray-400" />
                </div>
                <div>
                  <h3 className="font-fredoka text-xl mb-1">Contact Us</h3>
                  <p className="font-nunito text-pasture-100">hello@sunraysfarm.com<br/>(817) 555-0123</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-sunray-500 hover:bg-sunray-600 text-white border-0 mt-8 rounded-full px-8 h-12">
              Get Directions
            </Button>
          </div>

          {/* Map/Image Side */}
          <div className="relative rounded-3xl overflow-hidden aspect-square border-4 border-white/20 shadow-2xl">
             <img 
               src="/images/map-illustration.jpg" 
               alt="Illustrated map of Southlake Sunrays Farm" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 pointer-events-none border-4 border-white/10 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmLocation;
