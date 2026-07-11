'use client';

import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: 'Hitesh Bhai',
      location: 'Ahmedabad to Delhi',
      rating: 5,
      text: 'I was transferred from Ahmedabad to Delhi. Transporting the luggage was a big headache for me. Agarwal First Packers and Movers was a great help for me. The service was very good at both the ends. The staff was very cooperative and decent.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Jayesh Meena',
      location: 'Gandhinagar',
      rating: 5,
      text: 'Trustful and worthy. Best service if you want to send anything on short notice urgently or even generally. Truly safe and supporting staff. Would surely suggest you to choose them. Best trusted service for valuable items.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Kishan P',
      location: 'Surat',
      rating: 5,
      text: 'It was superb service by them. They handled all glasses items very carefully. Workers were very polite and did their job perfectly. Thank you so much for the service Agarwal First Packers and Movers.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Devendra Bhai',
      location: 'Rajkot',
      rating: 5,
      text: 'Would like to say Thank you for shifting my Household Items properly without delaying a single minute. Professional service with great care and attention to detail.',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Priya Sharma',
      location: 'Vadodara',
      rating: 5,
      text: 'Excellent service! The team was punctual, professional, and handled our office relocation seamlessly. Highly recommend Agarwal First Packers and Movers for any moving needs.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Rahul Patel',
      location: 'Pune to Ahmedabad',
      rating: 5,
      text: 'Amazing experience with car transportation service. My car was delivered safely without any scratches. The tracking system kept me updated throughout the journey.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="text-blue-600 font-semibold text-lg">TESTIMONIALS</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            What Our Customers are Saying
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            See what our customers are saying about Agarwal First Packers and Movers 
            for reliable, safe, and hassle-free moving experiences.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className={`relative ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 lg:p-12">
                    <div className="max-w-4xl mx-auto">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Testimonial Content */}
                        <div>
                          <div className="flex mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                            "{testimonial.text}"
                          </blockquote>
                          <div className="flex items-center">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover mr-4"
                            />
                            <div>
                              <div className="font-bold text-gray-800 text-lg">
                                {testimonial.name}
                              </div>
                              <div className="text-gray-600">
                                {testimonial.location}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="hidden lg:block">
                          <div className="relative">
                            <div className="w-64 h-64 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-6xl text-blue-600 opacity-20">💬</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            →
          </button>
        </div>

        {/* Google Reviews Link */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-8 h-8 mr-3"
              />
              <span className="text-2xl font-bold text-gray-800">Google Reviews</span>
            </div>
            <div className="flex justify-center mb-4">
              {renderStars(5)}
              <span className="ml-2 text-gray-600 font-semibold">5.0 out of 5</span>
            </div>
            <p className="text-gray-600 mb-6">
              Based on 100+ verified customer reviews
            </p>
            <a
              href="https://www.google.com/maps/place/Agarwal+first+Packers+and+Movers+Ahmedabad/@22.9983555,72.5092273,17z/data=!3m1!4b1!4m6!3m5!1s0x395e9bb629e9bafb:0x34b93b54162d2fcb!8m2!3d22.9983506!4d72.5118022!16s%2Fg%2F11z4y1ktpp?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;