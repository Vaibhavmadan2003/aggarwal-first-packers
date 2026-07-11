'use client';

import { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: '🛡️',
      title: 'Quality Control System',
      description: 'Rigorous quality checks at every step to ensure your belongings are handled with utmost care.',
      color: 'blue'
    },
    {
      icon: '✅',
      title: '100% Satisfaction Guarantee',
      description: 'We guarantee complete customer satisfaction with our professional moving services.',
      color: 'green'
    },
    {
      icon: '👨‍💼',
      title: 'Highly Professional Staff',
      description: 'Our trained and experienced team ensures professional handling of your valuable items.',
      color: 'purple'
    },
    {
      icon: '🔒',
      title: 'Safe and Damage Free Handling',
      description: 'Advanced packing techniques and careful handling ensure zero damage to your belongings.',
      color: 'red'
    },
    {
      icon: '❤️',
      title: 'Understand Your Emotions',
      description: 'We understand the emotional value of your belongings and treat them with special care.',
      color: 'pink'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Competitive and transparent pricing with no hidden charges for all our services.',
      color: 'yellow'
    }
  ];

  const certifications = [
    { title: 'IBA APPROVED', icon: '🏛️' },
    { title: 'ISO CERTIFIED', icon: '📜' },
    { title: '5.0 GOOGLE RATING', icon: '⭐' },
    { title: 'QUALITY SERVICE', icon: '🏆' }
  ];

  const supportFeatures = [
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Our 24/7 support at Agarwal First Packers and Movers ensures you\'re never alone during your relocation journey.',
      buttonText: 'CALL FOR BOOKING',
      buttonLink: 'tel:+917820015001',
      buttonColor: 'blue'
    },
    {
      icon: '🚚',
      title: 'Safe Delivery',
      description: 'We prioritize safe delivery for every relocation with high-quality packing materials and secure transportation.',
      buttonText: 'GET A FREE QUOTE',
      buttonLink: '#contact',
      buttonColor: 'green'
    },
    {
      icon: '😊',
      title: 'Customer Satisfaction',
      description: 'Customer satisfaction is our top priority. We focus on delivering reliable, efficient, and hassle-free services.',
      buttonText: 'WHATSAPP NOW',
      buttonLink: 'https://wa.me/919376270777',
      buttonColor: 'green'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="text-blue-600 font-semibold text-lg">WHY CHOOSE US</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Why Choose Agarwal First Packers and Movers?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Choose Agarwal First Packers and Movers for reliable service, expert 
            handling, affordable pricing, timely delivery, and complete customer satisfaction 
            every time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-4 text-2xl`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Support Features */}
        <div className={`mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              We're always there when you need us
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <a
                  href={feature.buttonLink}
                  className={`inline-block bg-${feature.buttonColor}-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-${feature.buttonColor}-700 transition-colors`}
                >
                  {feature.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white">
                    {cert.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className={`mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">
              We'll take care of your stuff like it was our own
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Protection Services</div>
                  <div className="text-blue-100 text-sm">keeping your belongings completely safe</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Ready 24/7 Support</div>
                  <div className="text-blue-100 text-sm">available for all your relocation assistance</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Storage Center Locations</div>
                  <div className="text-blue-100 text-sm">15+ locations across India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;