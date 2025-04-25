import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // or any icon lib you're using


const HeroSliderCard = () => {
    const slides = [
        {
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          title: "Discover Ghana's Beauty",
          description:
            "Explore the rich culture, stunning landscapes, and unforgettable experiences across Ghana.",
          subtext: "Plan better with 300,000+ travel experiences.",
        },
        {
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          title: "Experience Cape Coast",
          description:
            "Visit historic castles, pristine beaches, and immerse yourself in the vibrant coastal culture.",
          subtext: "Guided tours available year-round.",
        },
        {
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          title: "Adventure in Kakum National Park",
          description:
            "Walk among the treetops on the famous canopy walkway and discover Ghana's incredible wildlife.",
          subtext: "Eco-tourism at its finest.",
        },
        {
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          title: "Explore Accra's Vibrant Markets",
          description:
            "Dive into the colors, sounds, and flavors of Ghana's bustling capital city.",
          subtext: "Cultural experiences you'll never forget.",
        },
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
      const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    
      const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, [slides.length]);
    
      const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }, [slides.length]);
    
      const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
      };
    
      useEffect(() => {
        if (!isAutoPlaying) return;
    
        const interval = setInterval(() => {
          nextSlide();
        }, 5000);
    
        return () => clearInterval(interval);
      }, [isAutoPlaying, nextSlide]);
    
      return (
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover brightness-[0.7] w-full h-full"
                />
              </div>
    
              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-8">{slide.description}</p>
                  <p className="text-white/80 mb-8">{slide.subtext}</p>
                  <button className="bg-[#CE1126] hover:bg-[#CE1126]/90 text-white px-6 py-3 rounded-md font-medium flex items-center">
                    Explore Destinations <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
    
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
    
          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
  );
};

export default HeroSliderCard;
