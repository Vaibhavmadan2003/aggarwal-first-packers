'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Home Relocation',
    'Office Shifting',
    'Car Transportation',
    'Bike Transportation',
    'Packing & Moving',
    'Warehousing',
    'Insurance Services',
    'Door to Door Moving'
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📞 +91 7820015001</span>
            <span className="hidden md:block">📧 agarwalcarepm@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:block">📍 Vejalpur, Ahmedabad, Gujarat</span>
            <button className="bg-white text-blue-600 px-3 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">
              GET FREE QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center -space-x-4 relative pl-20">
              {/* Company Logo */}
              <div className="w-28 h-28 flex items-center justify-center absolute -top-8 -left-2 z-10">
                <img 
                  src="/logo.png" 
                  alt="Agarwal First Packers and Movers Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-black text-red-600 tracking-wider font-serif uppercase">AGARWAL</h1>
                <p className="text-xs text-gray-600 font-medium">First Packers & Movers</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border animate-fadeInUp">
                    <div className="py-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={`#services`}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Our Gallery
              </Link>
              <Link href="/our-network" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Our Network
              </Link>
              <Link href="#why-choose-us" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Why Choose Us
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
              
              <div className="flex items-center space-x-3">
                <a
                  href="tel:+917820015001"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/917820015001"
                  className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-fadeInUp">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  Home
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  About Us
                </Link>
                <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  Services
                </Link>
                <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  Our Gallery
                </Link>
                <Link href="/our-network" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  Our Network
                </Link>
                <Link href="#why-choose-us" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  Why Choose Us
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <a
                    href="tel:+917820015001"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/917820015001"
                    className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
