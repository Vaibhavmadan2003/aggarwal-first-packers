'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function GalleryPage() {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
      <Header />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Work Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our professional packing and moving services through our comprehensive gallery. 
            See why thousands of customers trust Agarwal First Packers and Movers for their relocation needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917820015001"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              📞 Call Now: +91 93762 70777
            </a>
            <a
              href="https://wa.me/917820015001"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <Gallery />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
