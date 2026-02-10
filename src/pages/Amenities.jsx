import React from 'react';
import { Card } from '../components/ui/card';
import { 
  Wifi, 
  UtensilsCrossed, 
  Droplet, 
  Car, 
  Clock, 
  BookOpen,
  ShieldCheck,
  Zap,
  BedDouble,
  WashingMachine
} from 'lucide-react';
import { pgData } from '../mockData';

const Amenities = () => {
  const allAmenities = [
    {
      id: 1,
      name: "Free High-Speed WiFi",
      description: "Reliable high-speed internet connectivity throughout all floors and rooms, perfect for online classes and work.",
      icon: Wifi,
      category: "Connectivity"
    },
    {
      id: 2,
      name: "Three Meals Daily",
      description: "Nutritious and hygienic breakfast, lunch, and dinner prepared with care. Homely taste with balanced diet.",
      icon: UtensilsCrossed,
      category: "Food"
    },
    {
      id: 3,
      name: "24/7 Hot Water",
      description: "Round-the-clock hot water supply in all bathrooms. No more waiting for your turn!",
      icon: Droplet,
      category: "Utilities"
    },
    {
      id: 4,
      name: "Secure Parking",
      description: "Safe and secure parking space for bikes and vehicles. CCTV monitored for your peace of mind.",
      icon: Car,
      category: "Security"
    },
    {
      id: 5,
      name: "24/7 Access",
      description: "Open round the clock. Come and go as per your schedule with flexible timing.",
      icon: Clock,
      category: "Convenience"
    },
    {
      id: 6,
      name: "Study-Friendly Environment",
      description: "Quiet rooms and common study areas. Perfect atmosphere for medical students to focus on their studies.",
      icon: BookOpen,
      category: "Lifestyle"
    },
    {
      id: 7,
      name: "Power Backup",
      description: "Uninterrupted power supply with backup generator. Never worry about power cuts during exams.",
      icon: Zap,
      category: "Utilities"
    },
    {
      id: 8,
      name: "Comfortable Beds",
      description: "Quality mattresses and comfortable beds for a good night's sleep after long study hours.",
      icon: BedDouble,
      category: "Comfort"
    },
    {
      id: 9,
      name: "Laundry Service Nearby",
      description: "Easy access to laundry services. We can help arrange pickup and delivery.",
      icon: WashingMachine,
      category: "Convenience"
    },
    {
      id: 10,
      name: "Safety & Security",
      description: "Well-maintained facility with proper security measures. Your safety is our priority.",
      icon: ShieldCheck,
      category: "Security"
    }
  ];

  const categories = [...new Set(allAmenities.map(a => a.category))];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-zinc-950">
      <section className="px-4 py-12 bg-gradient-to-br from-zinc-50 to-orange-50 dark:from-zinc-900 dark:to-orange-950/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Amenities & Facilities</h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need for a comfortable stay, all included in your rent
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          {categories.map((category, idx) => (
            <div key={category} className={idx > 0 ? 'mt-16' : ''}>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-orange-600 dark:bg-orange-500 rounded mr-3"></span>
                {category}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allAmenities
                  .filter(amenity => amenity.category === category)
                  .map((amenity) => {
                    const Icon = amenity.icon;
                    return (
                      <Card key={amenity.id} className="p-6 border-zinc-200 dark:border-zinc-800 hover:border-orange-500 dark:hover:border-orange-600 hover:shadow-lg transition-all duration-300 group bg-white dark:bg-zinc-900">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 dark:group-hover:bg-orange-600 transition-colors">
                            <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{amenity.name}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{amenity.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-orange-600 to-amber-700 dark:from-orange-700 dark:to-amber-800 text-white border-0">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">All-Inclusive Living</h2>
              <p className="text-lg text-orange-100 mb-8">
                No hidden costs. Everything you need is included in your monthly rent. Just bring yourself and focus on your studies or work.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-semibold text-lg mb-1">Food Included</p>
                  <p className="text-sm text-orange-100">3 nutritious meals every day</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-semibold text-lg mb-1">No Extra Bills</p>
                  <p className="text-sm text-orange-100">WiFi, electricity all covered</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-semibold text-lg mb-1">Full Access</p>
                  <p className="text-sm text-orange-100">All facilities at your disposal</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
