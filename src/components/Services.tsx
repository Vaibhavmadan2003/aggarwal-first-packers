'use client';

import { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '🏠',
      title: 'Home Relocation',
      description: 'Relocating the home is a difficult task. The home relocation is stressful that needs proper pre-planning.',
      features: ['Professional Packing', 'Safe Transportation', 'Timely Delivery', 'Unpacking Services'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: '🚪',
      title: 'Door To Door Moving',
      description: 'Door To Door has a safe, reliable, and more affordable way to move. It\'s easy and convenient.',
      features: ['Complete Door Service', 'No Hidden Charges', 'Reliable Service', 'Customer Support'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: '🚛',
      title: 'Transportation Services',
      description: 'We specialize in goods transport services for both household and commercial products.',
      features: ['Fleet of Vehicles', 'GPS Tracking', 'Insurance Coverage', 'Nationwide Network'],
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: '🚗',
      title: 'Car Transportation',
      description: 'With the expertise and knowledge of our customers\' needs, we have emerged as one of the leading car carriers.',
      features: ['Damage-Free Transport', 'Door to Door Service', 'Insurance Available', 'Real-time Tracking'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: '🏢',
      title: 'Office Shifting',
      description: 'Professional office relocation services with minimal downtime and maximum efficiency.',
      features: ['IT Equipment Handling', 'Furniture Dismantling', 'Quick Setup', 'Minimal Downtime'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: '🏪',
      title: 'Warehousing',
      description: 'We ensure safe and secure cargo warehousing to our customers with modern facilities.',
      features: ['Secure Storage', 'Climate Control', 'CCTV Surveillance', 'Easy Access'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: '🛡️',
      title: 'Insurance Services',
      description: 'We believe in satisfying our customers from each corner. Comprehensive insurance coverage for your belongings.',
      features: ['Full Coverage', 'Quick Claims', 'Transparent Process', 'Peace of Mind'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: '🏍️',
      title: 'Bike Transportation',
      description: 'Safe and secure bike transportation services with proper handling and care.',
      features: ['Secure Packaging', 'Damage Protection', 'Timely Delivery', 'Affordable Rates'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="text-blue-600 font-semibold text-lg">OUR SERVICES</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Moving Services For Every Need
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Reliable moving services tailored for every need, including home shifting, 
            office relocation, vehicle transport, packing, loading, and safe delivery with 
            complete care and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                {selectedService === index && (
                  <div className="animate-fadeInUp">
                    <div className="border-t pt-4 mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {selectedService === index ? 'HIDE DETAILS' : 'LEARN MORE'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              We will take care of all your moving needs from A to Z!
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              We handle every aspect of your move from start to finish, ensuring a smooth, 
              stress-free experience with expert packing, secure transport, timely delivery, and 
              complete care for all your belongings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                GET A FREE QUOTE
              </button>
              <a
                href="tel:+917820015001"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                CALL NOW: +91-93762 70777
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;