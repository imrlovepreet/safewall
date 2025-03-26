import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, Shield } from 'lucide-react';
import { services } from '../../data/services';

function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  console.log(`id is ${serviceId}`);
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              {service.headline}
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Image */}
          <div className="relative mb-16">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-brand-blue/10 rounded-xl"></div>
          </div>

          {/* Features & Benefits */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 font-montserrat text-brand-dark">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Shield className="h-5 w-5 text-brand-blue mt-1 mr-3" />
                    <span className="text-brand-dark/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 font-montserrat text-brand-dark">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-blue mt-1 mr-3" />
                    <span className="text-brand-dark/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-montserrat text-brand-dark text-center">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="bg-brand-grey/10 p-6 rounded-xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-blue text-white rounded-full mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat text-brand-dark text-center">
                    {step.title}
                  </h3>
                  <p className="text-brand-dark/70 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-dark rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4 font-montserrat">
              Ready to Get Started?
            </h2>
            <p className="text-brand-grey mb-6">
              Contact us today to learn more about our {service.title.toLowerCase()} solutions
            </p>
            <Link
              to="/consultation"
              className="inline-block bg-brand-green text-brand-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;