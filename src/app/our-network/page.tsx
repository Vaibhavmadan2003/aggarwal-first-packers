'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function OurNetwork() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const networkLocations = [
    // Gujarat
    { name: 'Packers and Movers Ahmedabad', state: 'Gujarat' },
    { name: 'Packers and Movers Gandhinagar', state: 'Gujarat' },
    { name: 'Packers and Movers Surat', state: 'Gujarat' },
    { name: 'Packers and Movers Vadodara', state: 'Gujarat' },
    { name: 'Packers and Movers Rajkot', state: 'Gujarat' },
    { name: 'Packers and Movers Bhavnagar', state: 'Gujarat' },
    { name: 'Packers and Movers Jamnagar', state: 'Gujarat' },
    { name: 'Packers and Movers Junagadh', state: 'Gujarat' },
    
    // Delhi NCR
    { name: 'Packers and Movers Delhi', state: 'Delhi NCR' },
    { name: 'Packers and Movers Gurgaon', state: 'Delhi NCR' },
    { name: 'Packers and Movers Noida', state: 'Delhi NCR' },
    { name: 'Packers and Movers Ghaziabad', state: 'Delhi NCR' },
    { name: 'Packers and Movers Faridabad', state: 'Delhi NCR' },
    
    // Maharashtra
    { name: 'Packers and Movers Mumbai', state: 'Maharashtra' },
    { name: 'Packers and Movers Pune', state: 'Maharashtra' },
    { name: 'Packers and Movers Nagpur', state: 'Maharashtra' },
    { name: 'Packers and Movers Nashik', state: 'Maharashtra' },
    { name: 'Packers and Movers Aurangabad', state: 'Maharashtra' },
    
    // Rajasthan
    { name: 'Packers and Movers Jaipur', state: 'Rajasthan' },
    { name: 'Packers and Movers Jodhpur', state: 'Rajasthan' },
    { name: 'Packers and Movers Udaipur', state: 'Rajasthan' },
    { name: 'Packers and Movers Kota', state: 'Rajasthan' },
    
    // Karnataka
    { name: 'Packers and Movers Bangalore', state: 'Karnataka' },
    { name: 'Packers and Movers Mysore', state: 'Karnataka' },
    { name: 'Packers and Movers Hubli', state: 'Karnataka' },
    
    // Tamil Nadu
    { name: 'Packers and Movers Chennai', state: 'Tamil Nadu' },
    { name: 'Packers and Movers Coimbatore', state: 'Tamil Nadu' },
    { name: 'Packers and Movers Madurai', state: 'Tamil Nadu' },
    
    // Andhra Pradesh
    { name: 'Packers and Movers Hyderabad', state: 'Andhra Pradesh' },
    { name: 'Packers and Movers Vijayawada', state: 'Andhra Pradesh' },
    { name: 'Packers and Movers Visakhapatnam', state: 'Andhra Pradesh' },
    
    // West Bengal
    { name: 'Packers and Movers Kolkata', state: 'West Bengal' },
    { name: 'Packers and Movers Howrah', state: 'West Bengal' },
    
    // Other States
    { name: 'Packers and Movers Bhubaneswar', state: 'Odisha' },
    { name: 'Packers and Movers Chandigarh', state: 'Punjab' },
    { name: 'Packers and Movers Lucknow', state: 'Uttar Pradesh' },
    { name: 'Packers and Movers Kanpur', state: 'Uttar Pradesh' },
    { name: 'Packers and Movers Agra', state: 'Uttar Pradesh' },
    { name: 'Packers and Movers Indore', state: 'Madhya Pradesh' },
    { name: 'Packers and Movers Bhopal', state: 'Madhya Pradesh' },
    { name: 'Packers and Movers Patna', state: 'Bihar' },
    { name: 'Packers and Movers Ranchi', state: 'Jharkhand' },
    { name: 'Packers and Movers Guwahati', state: 'Assam' },
    { name: 'Packers and Movers Dehradun', state: 'Uttarakhand' },
    { name: 'Packers and Movers Goa', state: 'Goa' }
  ];

  const groupedLocations = networkLocations.reduce((acc, location) => {
    if (!acc[location.state]) {
      acc[location.state] = [];
    }
    acc[location.state].push(location);
    return acc;
  }, {} as Record<string, typeof networkLocations>);

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-blue-200 font-semibold text-lg">Our Network</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">
            Packers And Movers In All India
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We provide reliable packing and moving services across India with our extensive network 
            of professional teams and modern facilities.
          </p>
        </div>
      </section>

      {/* Network Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {Object.entries(groupedLocations).map(([state, locations], index) => (
              <div
                key={state}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                  isLoaded ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-bold text-center">{state}</h3>
                </div>
                
                <div className="space-y-2">
                  {locations.map((location, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-2 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <span className="text-blue-600">📍</span>
                      <span className="text-gray-700 hover:text-blue-600 transition-colors">
                        {location.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Need Moving Services in Your City?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today to check availability in your area and get a free quote 
              for your relocation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917820015001"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                📞 Call Now: +91 93762 70777
              </a>
              <a
                href="https://wa.me/917820015001"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
