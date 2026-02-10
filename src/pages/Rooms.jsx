import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, Users, IndianRupee, Phone, ArrowRight } from 'lucide-react';
import { pgData } from '../mockData';

const Rooms = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-zinc-950">
      <section className="px-4 py-12 bg-gradient-to-br from-zinc-50 to-orange-50 dark:from-zinc-900 dark:to-orange-950/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Rooms & Pricing</h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Choose from our range of comfortable accommodations that suit your budget and preferences
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {pgData.rooms.map((room) => (
              <Card 
                key={room.id} 
                className={`overflow-hidden relative hover:shadow-xl transition-all duration-300 border-zinc-200 dark:border-zinc-800 ${
                  room.popular 
                    ? 'ring-2 ring-orange-500 dark:ring-orange-600 scale-105' 
                    : ''
                }`}
              >
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-orange-600 text-white shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.type}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span className="text-sm font-medium">{room.capacity} Person Occupancy</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{room.type}</h3>
                  
                  <div className="flex items-baseline space-x-2 mb-6">
                    <IndianRupee className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    <span className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">{room.price.toLocaleString()}</span>
                    <span className="text-zinc-600 dark:text-zinc-400">/month</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-zinc-900 dark:text-white text-sm uppercase tracking-wide">Room Features</h4>
                    <ul className="space-y-2">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
                        </li>
                      ))}
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">3 Meals Daily</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">Free WiFi & Hot Water</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">Parking Facility</span>
                      </li>
                    </ul>
                  </div>

                  <Link to="/contact">
                    <Button 
                      className={`w-full ${
                        room.popular 
                          ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md' 
                          : 'bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white'
                      }`}
                    >
                      Book This Room
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 md:p-10 bg-gradient-to-br from-zinc-50 to-orange-50 dark:from-zinc-900 dark:to-orange-950/30 border-orange-200 dark:border-zinc-800 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6">All Prices Include</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="text-base font-semibold text-zinc-900 dark:text-white">3 Meals Daily</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Breakfast, Lunch & Dinner</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="text-base font-semibold text-zinc-900 dark:text-white">All Amenities</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">WiFi, Hot Water, Parking</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="text-base font-semibold text-zinc-900 dark:text-white">24/7 Support</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Always here to help</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="p-8 md:p-12 bg-gradient-to-br from-zinc-50 to-orange-50 dark:from-zinc-900 dark:to-orange-950/30 border border-orange-200 dark:border-zinc-800 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">Need Help Choosing?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Call us now and we'll help you find the perfect room that matches your requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${pgData.phone}`}>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call {pgData.phone}
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-white">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
