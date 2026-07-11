'use client';

import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    from: '',
    to: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      from: '',
      to: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="text-blue-600 font-semibold text-lg">CONTACT US</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Get A Free Quote Now
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to move? Contact us today for a free, no-obligation quote. 
            Our team is here to make your relocation smooth and stress-free.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Request Your Free Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="home-relocation">Home Relocation</option>
                    <option value="office-shifting">Office Shifting</option>
                    <option value="car-transportation">Car Transportation</option>
                    <option value="bike-transportation">Bike Transportation</option>
                    <option value="packing-moving">Packing & Moving</option>
                    <option value="warehousing">Warehousing</option>
                    <option value="door-to-door">Door to Door Moving</option>
                    <option value="insurance">Insurance Services</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Moving From
                    </label>
                    <input
                      type="text"
                      name="from"
                      value={formData.from}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Current Location"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Moving To
                    </label>
                    <input
                      type="text"
                      name="to"
                      value={formData.to}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Destination"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us more about your moving requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Office Address</h4>
                      <p className="text-gray-600">
                        Office No. 1, Jala Pagi No Vas, Opp Baliyadev Temple, 
                        Vejalpur, Makarba Rd, Makarba, Ahmedabad, Gujarat 380051
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone Number</h4>
                      <p className="text-gray-600">
                        <a href="tel:+917820015001" className="hover:text-blue-600 transition-colors block">
                          +91 7820015001
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email Address</h4>
                      <p className="text-gray-600">
                        <a href="mailto:agarwalcarepm@gmail.com" className="hover:text-blue-600 transition-colors">
                          agarwalcarepm@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-600 text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Working Hours</h4>
                      <p className="text-gray-600">
                        24/7 Available<br />
                        Emergency Services Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Need Immediate Assistance?
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="tel:+917820015001"
                    className="flex items-center justify-center w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    📞 Call Now: +91 7820015001
                  </a>
                  
                  <a
                    href="https://wa.me/919376270777"
                    className="flex items-center justify-center w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    💬 WhatsApp Chat
                  </a>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-blue-100">
                    Get instant quotes and expert advice from our moving specialists
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Location
                </h3>
                
                {/* Google Maps Embed */}
                <div className="mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8234567890123!2d72.5092273!3d22.9983555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bb629e9bafb%3A0x34b93b54162d2fcb!2sAgarwal%20first%20Packers%20and%20Movers%20Ahmedabad!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                <div className="text-center">
                  <a
                    href="https://www.google.com/maps/place/Agarwal+first+Packers+and+Movers+Ahmedabad/@22.9983555,72.5092273,17z/data=!3m1!4b1!4m6!3m5!1s0x395e9bb629e9bafb:0x34b93b54162d2fcb!8m2!3d22.9983506!4d72.5118022!16s%2Fg%2F11z4y1ktpp?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    📍 Get Directions
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Service Areas
                </h3>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Gujarat</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>Ahmedabad</li>
                      <li>Gandhinagar</li>
                      <li>Surat</li>
                      <li>Vadodara</li>
                      <li>Rajkot</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Major Cities</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>Delhi NCR</li>
                      <li>Mumbai</li>
                      <li>Pune</li>
                      <li>Bangalore</li>
                      <li>Chennai</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mt-4">
                  And many more cities across India. Contact us for availability in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;