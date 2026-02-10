import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { pgData } from '../mockData';

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-zinc-950">
      <section className="px-4 py-12 bg-gradient-to-br from-zinc-50 to-orange-50 dark:from-zinc-900 dark:to-orange-950/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Gallery</h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Take a virtual tour of our PG and see what makes us special
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgData.gallery.map((image, index) => (
              <Card key={index} className="overflow-hidden border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow bg-white dark:bg-zinc-900">
                <img
                  src={image}
                  alt={`SRM PG ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 md:p-12 bg-gradient-to-br from-zinc-50 to-orange-50 dark:from-zinc-900 dark:to-orange-950/30 border-orange-200 dark:border-zinc-800 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">Want to See More?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
              Schedule a visit to see our facilities in person. We'd love to show you around!
            </p>
            <a href={`tel:${pgData.phone}`}>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Schedule a Visit
              </Button>
            </a>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
