import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, UtensilsCrossed, ShieldCheck, Apple, Heart } from 'lucide-react';
import { pgData } from '../mockData';

const Mess = () => {
  const iconMap = {
    'utensils': UtensilsCrossed,
    'shield-check': ShieldCheck,
    'apple': Apple,
    'heart': Heart
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-zinc-950">
      <section className="px-4 py-12 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
        <div className="container mx-auto text-center">
          <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900 border-0 mb-4">
            Our Specialty
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            {pgData.mess.title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            {pgData.mess.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pgData.mess.images.map((image, index) => (
                <Card 
                  key={index} 
                  className={`overflow-hidden border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow ${
                    index === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Mess facility ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Card>
              ))}
            </div>

            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Why Our Mess Stands Out</h2>
              <div className="space-y-6">
                {pgData.mess.features.map((feature) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div key={feature.id} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">{feature.title}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-zinc-50 to-orange-50 dark:from-zinc-900 dark:to-orange-950/30 border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 text-center">What We Offer</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {pgData.mess.menuItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="px-4 py-16 bg-gradient-to-br from-orange-600 to-amber-700 dark:from-orange-700 dark:to-amber-800">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Included in Every Room Package</h2>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            All our room packages come with full mess facility. No separate charges, no hidden costs.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-3xl font-bold mb-2">3</p>
              <p className="text-sm">Meals Daily</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-3xl font-bold mb-2">100%</p>
              <p className="text-sm">Hygienic</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-3xl font-bold mb-2">₹0</p>
              <p className="text-sm">Extra Cost</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mess;
