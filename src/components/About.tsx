'use client';

import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    customers: 0,
    happyClients: 0,
    awards: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetValues = {
    experience: 25,
    customers: 4000,
    happyClients: 3500,
    awards: 5
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        experience: Math.floor(targetValues.experience * progress),
        customers: Math.floor(targetValues.customers * progress),
        happyClients: Math.floor(targetValues.happyClients * progress),
        awards: Math.floor(targetValues.awards * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, stepDuration);
  };

  return (
    <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-lg">ABOUT US</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
                Welcome To Agarwal First Packers and Movers
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Agarwal First Packers and Movers are recognized as the best packers and movers in 
              Ahmedabad due to our excellent and timely services. With hard work, determination, 
              and willpower, we branded ourselves as the top packers and movers in Gujarat.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We started small, but with our consumer's continued faith and trust, we 
              expanded, and now we provide numerous relocating services. Our services include home 
              relocation, packing, and unpacking, warehousing services, car carrier services 
              amongst many more.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our growth has been continuous and remarkable giving us the title of the top 
              moving and packing service of Ahmedabad. We have a fleet of vehicles, professional 
              packers, and warehouses to store your belongings in case of city relocation.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Dedicated</div>
                  <div className="text-sm text-gray-600">Professional Mover</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">🏆</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Top 10</div>
                  <div className="text-sm text-gray-600">Moving Service</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xl">💡</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Solutions</div>
                  <div className="text-sm text-gray-600">Moving Problems</div>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              LEARN MORE ABOUT US
            </button>
          </div>

          {/* Right Images */}
          <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/images/1000199583.jpg"
                    alt="Award and Recognition"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="/images/1000199591.jpg"
                    alt="Professional Team"
                    className="rounded-lg shadow-lg w-full h-32 object-cover"
                  />
                </div>
                <div className="mt-8">
                  <img
                    src="/images/1000199605.jpg"
                    alt="Team Excellence and Awards"
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-lg p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">{counters.experience}+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                100% Safe and Fast Services
              </h3>
              <p className="text-gray-600">Our Company Achievements</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`text-center ${isVisible ? 'animate-countUp' : ''}`}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📦</span>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {counters.customers.toLocaleString()}+
                </div>
                <div className="text-gray-600">Shifting Complete</div>
              </div>
              
              <div className={`text-center ${isVisible ? 'animate-countUp' : ''}`}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">👥</span>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {counters.customers.toLocaleString()}+
                </div>
                <div className="text-gray-600">Our Clients</div>
              </div>
              
              <div className={`text-center ${isVisible ? 'animate-countUp' : ''}`}>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">😊</span>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {counters.happyClients.toLocaleString()}+
                </div>
                <div className="text-gray-600">Clients Are Happy</div>
              </div>
              
              <div className={`text-center ${isVisible ? 'animate-countUp' : ''}`}>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 text-2xl">🏆</span>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {counters.awards}+
                </div>
                <div className="text-gray-600">Winning Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;