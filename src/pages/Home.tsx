import React from 'react';
import { Shield, ChevronRight, Lock, Server, Users, Globe, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceSlideshow from '../components/ServiceSlideshow';

function Home() {
  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
              Enterprise-Grade Cybersecurity Solutions for Every Business
            </h1>
            <p className="text-xl text-brand-grey mb-4">
              Built with Love, Fortified with Security
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/consultation" className="bg-brand-green text-brand-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition flex items-center">
                Get a Free Consultation <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Slideshow */}
      <ServiceSlideshow />

      {/* Live Cyber Threat Map */}
      <div className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">Live Cyber Threat Map</h2>
            <p className="text-brand-grey">Watch cyber threats unfold in real-time across the globe</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full overflow-hidden rounded-xl shadow-2xl">
              <iframe 
                width="100%" 
                height="462" 
                src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" 
                frameBorder="0"
                title="Kaspersky Cyberthreat Real-Time Map"
                className="bg-black"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-6 font-montserrat">
                Why Choose SafeWall?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-brand-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 font-montserrat text-brand-dark dark:text-white">Certified Experts</h3>
                    <p className="text-brand-dark/70 dark:text-white/70">Industry-leading certifications and expertise in cybersecurity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-brand-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 font-montserrat text-brand-dark dark:text-white">Global Protection</h3>
                    <p className="text-brand-dark/70 dark:text-white/70">24/7 monitoring and protection across all time zones</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-brand-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 font-montserrat text-brand-dark dark:text-white">Rapid Response</h3>
                    <p className="text-brand-dark/70 dark:text-white/70">Swift incident response and threat mitigation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800"
                alt="Security Operations Center"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-brand-blue/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-brand-grey mb-8">
            Schedule your free consultation today and discover how SafeWall can protect your digital assets
          </p>
          <Link to="/consultation" className="bg-brand-green text-brand-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition inline-flex items-center">
            Book a 15-Minute Strategy Call <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;