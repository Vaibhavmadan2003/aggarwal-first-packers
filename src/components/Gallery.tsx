'use client';

import { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<'image' | 'video'>('image');
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

  const galleryItems = [
    { id: 1, src: '/images/1000199569.jpg', type: 'image' as const },
    { id: 2, src: '/images/1000199571.jpg', type: 'image' as const },
    { id: 3, src: '/images/1000199575.jpg', type: 'image' as const },
    { id: 4, src: '/images/1000199583.jpg', type: 'image' as const },
    { id: 5, src: '/images/1000199591.jpg', type: 'image' as const },
    { id: 6, src: '/images/1000199593.jpg', type: 'image' as const },
    { id: 7, src: '/images/1000199597.jpg', type: 'image' as const },
    { id: 8, src: '/images/1000199601.jpg', type: 'image' as const },
    { id: 9, src: '/images/1000199605.jpg', type: 'image' as const },
    { id: 10, src: '/images/1000199629.jpg', type: 'image' as const },
    { id: 11, src: '/images/1000196611.jpg', type: 'image' as const },
    { id: 12, src: '/images/IMG-20260519-WA0021.jpg', type: 'image' as const },
    { id: 13, src: '/videos/1000199545.mp4', type: 'video' as const },
    { id: 14, src: '/videos/VID-20260519-WA0027.mp4', type: 'video' as const }
  ];

  const handleMediaClick = (src: string, type: 'image' | 'video') => {
    setSelectedMedia(src);
    setSelectedType(type);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const totalItems = galleryItems.length;
  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Gallery
          </h2>
          <div className="bg-white rounded-lg p-4 inline-block shadow-md">
            <p className="text-blue-600 font-bold text-lg">
              📸 Total Items: {totalItems} | 🖼️ Photos: {photoCount} | 🎥 Videos: {videoCount}
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer bg-white ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                minHeight: '280px'
              }}
              onClick={() => handleMediaClick(item.src, item.type)}
            >
              {/* Media Container */}
              <div className="relative w-full h-48 overflow-hidden">
                {item.type === 'video' ? (
                  <div className="relative w-full h-full">
                    <video
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzY2NzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKWtiBWaWRlbzwvdGV4dD48L3N2Zz4="
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    {/* Video Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={`Gallery item ${item.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {item.type === 'video' ? '🎥 Video' : '📷 Photo'}
                  </span>
                  <span className="text-gray-400 text-sm font-bold">
                    #{item.id}
                  </span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">Click to {item.type === 'video' ? 'play' : 'view'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full View */}
        {selectedMedia && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-6xl max-h-full w-full">
              {selectedType === 'video' ? (
                <video
                  controls
                  autoPlay
                  className="w-full h-auto max-h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <source src={selectedMedia} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedMedia}
                  alt="Gallery Item"
                  className="w-full h-auto max-h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors text-xl font-bold"
              >
                ✕
              </button>
              
              {/* Media Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <p className="text-lg font-semibold">
                  {selectedType === 'video' ? '🎥 Video' : '📷 Photo'}
                </p>
                <p className="text-sm text-gray-300">
                  Click outside to close
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Professional Service?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Contact us today for a free consultation and let us handle your moving needs 
              with the same care and professionalism shown in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917820015001"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📞 Call Now: +91 93762 70777
              </a>
              <a
                href="https://wa.me/917820015001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
