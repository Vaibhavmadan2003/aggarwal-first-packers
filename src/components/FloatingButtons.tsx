'use client';

import { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Floating Call Button */}
      <div className="fixed left-4 bottom-20 z-50">
        <a
          href="tel:+917820015001"
          className={`flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 animate-pulse-custom ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
          aria-label="Call Now"
        >
          <span className="text-2xl">📞</span>
        </a>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed right-4 bottom-20 z-50">
        <a
          href="https://wa.me/917820015001?text=Hi, I need help with packers and movers service"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-110 animate-bounce-custom ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
          aria-label="WhatsApp Chat"
        >
          <span className="text-2xl">💬</span>
        </a>
      </div>

      {/* Floating Quote Button */}
      <div className="fixed right-4 bottom-36 z-50">
        <a
          href="#contact"
          className={`flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
          aria-label="Get Quote"
        >
          <span className="text-xl">💰</span>
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden">
        <div className="grid grid-cols-3 gap-1 p-2">
          <a
            href="tel:+917820015001"
            className="flex flex-col items-center justify-center py-3 px-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <span className="text-xl mb-1">📞</span>
            <span className="text-xs font-semibold">Call</span>
          </a>
          
          <a
            href="https://wa.me/917820015001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 px-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          >
            <span className="text-xl mb-1">💬</span>
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>
          
          <a
            href="#contact"
            className="flex flex-col items-center justify-center py-3 px-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          >
            <span className="text-xl mb-1">📝</span>
            <span className="text-xs font-semibold">Quote</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
