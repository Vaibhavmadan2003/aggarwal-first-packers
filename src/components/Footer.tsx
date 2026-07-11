'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Home Relocation',
    'Office Shifting',
    'Car Transportation',
    'Bike Transportation',
    'Packing & Moving',
    'Warehousing',
    'Door to Door Moving',
    'Insurance Services'
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Gallery', href: '/gallery' },
    { name: 'Our Network', href: '/our-network' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const locations = [
    'Packers and Movers Ahmedabad',
    'Packers and Movers Gandhinagar',
    'Packers and Movers Surat',
    'Packers and Movers Vadodara',
    'Packers and Movers Rajkot',
    'Packers and Movers Delhi',
    'Packers and Movers Mumbai',
    'Packers and Movers Pune'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center -space-x-2 mb-6">
              {/* Company Logo */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Agarwal First Packers and Movers Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-red-600 tracking-wider font-serif uppercase">AGARWAL</h3>
                <p className="text-gray-400 text-sm font-medium">First Packers & Movers</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Agarwal First Packers and Movers offers reliable, affordable, safe 
              relocation services with professional packing, timely delivery, and customer 
              satisfaction guaranteed across India.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <span>Call Center 24/7</span>
              </div>
              <div className="text-2xl font-bold text-blue-400">
                +91 93762 70777
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  📘
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  📷
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  🐦
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  📺
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Office No. 1, Jala Pagi No Vas, Opp Baliyadev Temple, 
                    Vejalpur, Makarba Rd, Makarba, Ahmedabad, Gujarat 380051
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <div className="text-gray-300 text-sm">
                  <a 
                    href="tel:+917820015001" 
                    className="hover:text-blue-400 transition-colors block"
                  >
                    +91 93762 70777
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <a 
                  href="mailto:agarwalcarepm@gmail.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  agarwalcarepm@gmail.com
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+917820015001"
                className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/917820015001"
                className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors text-sm"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Service Locations */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-xl font-bold mb-6 text-center">Our Service Locations</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((location, index) => (
              <Link
                key={index}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm text-center"
              >
                {location}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                Copyright © {currentYear} Agarwal First Packers and Movers. All Rights Reserved.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
