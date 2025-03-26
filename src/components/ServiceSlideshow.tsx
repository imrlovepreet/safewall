import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

function ServiceSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services: Service[] = [
    {
      id: 'firewall',
      title: 'Managed Firewall Services',
      description: 'Advanced network protection with enterprise-grade firewall solutions.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 'support',
      title: 'IT Support & Consulting',
      description: 'Expert IT guidance and support for your business needs.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 'network',
      title: 'Network Security Solutions',
      description: 'Comprehensive network protection and monitoring services.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 'cloud',
      title: 'Cloud Security & Compliance',
      description: 'Secure cloud solutions with regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 'training',
      title: 'Cybersecurity Awareness Training',
      description: 'Employee training programs for enhanced security.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 'startup',
      title: 'IT Startup Boostplan: Launch Essentials',
      description: 'Complete IT setup package for new businesses.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="relative overflow-hidden bg-brand-grey dark:bg-black/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
          Our Services
        </h2>
        
        <div className="relative">
          <div className="relative h-[500px] overflow-hidden rounded-xl">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-montserrat">{service.title}</h3>
                    <p className="text-lg mb-4 text-white/80">{service.description}</p>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center bg-brand-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSlideshow;