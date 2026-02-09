import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const TicketBarn = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pasture-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-4xl md:text-6xl text-pasture-900 mb-6">
            Pick Your Package
          </h2>
          <p className="font-nunito text-xl text-pasture-700 max-w-2xl mx-auto">
            Whether you're popping in for a quick hello or throwing a barnyard bash, we have a spot for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Basic Tier */}
          <Card className="rounded-3xl border-2 border-slate-100 hover:border-sunray-200 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 bg-white">
            <CardHeader className="p-8 pb-4">
              <h3 className="font-fredoka text-2xl text-pasture-900">Just Visiting</h3>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-4xl font-bold text-pasture-900">$15</span>
                <span className="text-slate-500 font-nunito">/person</span>
              </div>
              <p className="text-slate-500 font-nunito mt-2">Perfect for a quick dose of farm happiness.</p>
            </CardHeader>
            <CardContent className="p-8 pt-4">
              <ul className="space-y-4">
                {['1 Hour Farm Access', 'Petting Zoo Entry', 'Free Parking', 'Photo Opportunities'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-nunito text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button variant="outline" className="w-full h-12 rounded-xl text-lg font-bold border-slate-200 hover:bg-slate-50 text-slate-700">
                Select Date
              </Button>
            </CardFooter>
          </Card>

          {/* Featured Tier */}
          <Card className="rounded-3xl border-4 border-sunray-400 shadow-2xl shadow-sunray-500/20 relative md:-mt-8 bg-white overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2 bg-sunray-400" />
            <div className="absolute top-4 right-4 bg-sunray-100 text-sunray-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> Most Popular
            </div>
            
            <CardHeader className="p-8 pb-4">
              <h3 className="font-fredoka text-3xl text-pasture-900">The Feed Pail</h3>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-5xl font-bold text-pasture-900">$25</span>
                <span className="text-slate-500 font-nunito">/person</span>
              </div>
              <p className="text-slate-500 font-nunito mt-2">Get up close and personal with snacks!</p>
            </CardHeader>
            <CardContent className="p-8 pt-4">
              <ul className="space-y-4">
                {['All "Just Visiting" Perks', 'Large Feed Bucket Included', 'Goat Brush Access', 'Priority Entry'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-nunito text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-sunray-100 flex items-center justify-center text-sunray-600">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button className="w-full h-14 rounded-xl text-lg font-bold bg-sunray-500 hover:bg-sunray-600 text-white shadow-lg shadow-sunray-500/25">
                Book This Package
              </Button>
            </CardFooter>
          </Card>

          {/* Party Tier */}
          <Card className="rounded-3xl border-2 border-slate-100 hover:border-pasture-200 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 bg-white">
            <CardHeader className="p-8 pb-4">
              <h3 className="font-fredoka text-2xl text-pasture-900">Party Animal</h3>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-4xl font-bold text-pasture-900">$350</span>
                <span className="text-slate-500 font-nunito">/group</span>
              </div>
              <p className="text-slate-500 font-nunito mt-2">Private events for up to 15 guests.</p>
            </CardHeader>
            <CardContent className="p-8 pt-4">
              <ul className="space-y-4">
                {['2 Hours Private Area', 'Feed for Everyone', 'Dedicated Staff Guide', 'Picnic Tables Reserved'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-nunito text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button variant="outline" className="w-full h-12 rounded-xl text-lg font-bold border-slate-200 hover:bg-slate-50 text-slate-700">
                Inquire Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TicketBarn;
