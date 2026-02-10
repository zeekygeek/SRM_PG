import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { pgData } from '../mockData';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 text-gray-700 dark:text-zinc-300 border-t border-gray-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                SRM
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-bold text-lg">{pgData.name}</h3>
              </div>
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              Your trusted accommodation partner near Bangalore Medical College. Comfortable living for medical students and working professionals.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-orange-500 transition-colors dark:text-zinc-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-sm hover:text-orange-500 transition-colors">
                  Rooms & Pricing
                </Link>
              </li>
              <li>
                <Link to="/mess" className="text-sm hover:text-orange-500 transition-colors">
                  Mess Facility
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-sm hover:text-orange-500 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-orange-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <div className="text-sm">
                  <a href={`tel:${pgData.phone}`} className="hover:text-orange-500 transition-colors block">
                    {pgData.phone}
                  </a>
                  <a href={`tel:${pgData.alternatePhone}`} className="hover:text-orange-500 transition-colors block">
                    {pgData.alternatePhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <a href={`mailto:${pgData.email}`} className="text-sm hover:text-orange-500 transition-colors">
                  {pgData.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <span className="text-sm">Open {pgData.openHours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Our Location</h4>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
              <address className="text-sm not-italic text-gray-600 dark:text-zinc-400">
                {pgData.address.line1}<br />
                {pgData.address.line2 && <>{pgData.address.line2}<br /></>}
                {pgData.address.area}<br />
                {pgData.address.city}, {pgData.address.state} {pgData.address.pincode}
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} {pgData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
