import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Phone, 
  MapPin, 
  Star, 
  Wifi, 
  UtensilsCrossed, 
  Car, 
  Clock,
  ArrowRight,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { pgData } from '../mockData';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 bg-gradient-to-br from-zinc-50 to-orange-50 dark:from-zinc-900 dark:to-orange-950/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/30 border-0 text-xs sm:text-sm">
                <Star className="w-3 h-3 mr-1 fill-orange-500 text-orange-500" />
                {pgData.rating} Rating • {pgData.totalReviews} Reviews
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
                {pgData.name}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Premium accommodation for medical students & working professionals. Experience comfort, convenience, and community.
              </p>

              <div className="flex items-start space-x-2 text-zinc-700 dark:text-zinc-300">
                <MapPin className="w-5 h-5 mt-1 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <p className="text-sm">
                  Opposite Bangalore Medical College & Research Institute, Chamrajpet
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a href={`tel:${pgData.phone}`} className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-200 dark:shadow-orange-900/20">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href={`https://wa.me/91${pgData.phone}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-orange-600 dark:border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/30">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </a>
                <Link to="/rooms">
                  <Button size="lg" variant="outline" className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 dark:text-white">
                    View Rooms
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative order-first lg:order-last mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl transform rotate-1 sm:rotate-2 md:rotate-3"></div>
              <img
                src={pgData.buildingImage}
                alt="SRM PG Building"
                className="relative rounded-3xl shadow-2xl w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mess Highlight Section - PRIME FOCUS */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-orange-600 to-amber-700 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <Badge className="bg-white/20 text-white hover:bg-white/20 border-0 mb-3 sm:mb-4 text-xs sm:text-sm">
              Our Specialty
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">Homely Food That Feels Like Home</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-2">
              Our in-house mess serves delicious, nutritious meals prepared with care - the best part of living at SRM PG!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <Card className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <div className="flex items-center sm:block">
                <UtensilsCrossed className="w-8 h-8 sm:w-12 sm:h-12 mb-0 sm:mb-4 mr-4 sm:mr-0 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">3 Meals Daily</h3>
                  <p className="text-sm sm:text-base text-orange-100">Breakfast, lunch, and dinner included in every package</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CheckCircle2 className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hygienic & Fresh</h3>
              <p className="text-orange-100">Prepared with quality ingredients and proper hygiene</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <Star className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Home-Style Taste</h3>
              <p className="text-orange-100">Traditional recipes that remind you of home</p>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link to="/mess">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-zinc-100">
                Learn More About Our Mess
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-950">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Why Choose SRM PG?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              We provide everything you need for a comfortable and productive stay
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pgData.highlights.map((highlight) => {
              const Icon = {
                'map-pin': MapPin,
                'chef-hat': UtensilsCrossed,
                'graduation-cap': Star,
                'shield-check': CheckCircle2
              }[highlight.icon];

              return (
                <Card key={highlight.id} className="p-6 border-zinc-200 dark:border-zinc-800 hover:border-orange-500 dark:hover:border-orange-600 hover:shadow-lg transition-all duration-300 group bg-white dark:bg-zinc-900">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 dark:group-hover:bg-orange-600 transition-colors">
                    <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{highlight.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{highlight.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Amenities & Facilities</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              All-inclusive facilities designed for your comfort and convenience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pgData.amenities.map((amenity) => {
              const Icon = {
                wifi: Wifi,
                utensils: UtensilsCrossed,
                droplet: Clock,
                car: Car,
                clock: Clock,
                'book-open': Star
              }[amenity.icon];

              return (
                <Card key={amenity.id} className="p-6 border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow bg-white dark:bg-zinc-900">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{amenity.name}</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{amenity.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/amenities">
              <Button size="lg" variant="outline" className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-white">
                View All Amenities
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-950">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Room Options & Pricing</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Choose the perfect room that fits your budget and needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pgData.rooms.map((room) => (
              <Card key={room.id} className={`p-6 relative overflow-hidden border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all bg-white dark:bg-zinc-900 ${
                room.popular ? 'ring-2 ring-orange-500 dark:ring-orange-600' : ''
              }`}>
                {room.popular && (
                  <Badge className="absolute top-4 right-4 bg-orange-600 text-white">
                    Popular
                  </Badge>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{room.type}</h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-orange-600 dark:text-orange-400">₹{room.price.toLocaleString()}</span>
                    <span className="text-zinc-600 dark:text-zinc-400">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {room.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Book Now
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/rooms">
              <Button size="lg" variant="outline" className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-white">
                View Detailed Room Info
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="p-8 md:p-12 bg-gradient-to-br from-zinc-50 to-orange-50 dark:from-zinc-900 dark:to-orange-950/30 border border-orange-200 dark:border-zinc-800 rounded-xl text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">Ready to Make SRM PG Your Home?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a visit or to book your room. We're here to help!
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
                  Get in Touch
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

export default Home;
