import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { pgData } from '../mockData';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Mess', path: '/mess' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    // Close mobile menu
    setIsMobileMenuOpen(false);
    
    // If we're already on the same page, scroll to top
    if (location.pathname === path) {
      // Force a reflow to ensure the browser registers the scroll position change
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
      // Small delay to ensure the scroll happens before re-enabling scrolling
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 10);
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // For different pages, let the navigation happen naturally
      // The scroll to top will be handled by the layout effect in App.jsx
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
      } border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              SRM
            </div>
            <div>
              <h1 className="text-xl font-bold">{pgData.name}</h1>
              <p className="text-xs text-text-muted">Boys' Hostel</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-orange-600 bg-orange-50 dark:bg-orange-950 dark:text-orange-400'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-zinc-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            <ThemeToggle />
            <a href={`tel:${pgData.phone}`}>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-200 dark:shadow-orange-900/20">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <button
              className="text-zinc-700 dark:text-zinc-300 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-orange-600 bg-orange-50 dark:bg-orange-950 dark:text-orange-400'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:${pgData.phone}`} className="w-full pt-2">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
