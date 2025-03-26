import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';
import { industries } from '../../data/industries';

function IndustryPage() {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = industries.find(i => i.id === industryId);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              {industry.headline}
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              {industry.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Industry Image */}
          <div className="relative mb-16">
            <img
              src={industry.image}
              alt={industry.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-brand-blue/10 rounded-xl"></div>
          </div>

          {/* Industry Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 font-montserrat text-brand-dark dark:text-white">Industry Challenges</h2>
              <ul className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <Shield className="h-5 w-5 text-brand-blue mt-1 mr-3" />
                    <span className="text-brand-dark/70 dark:text-white/70">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 font-montserrat text-brand-dark dark:text-white">Our Solutions</h2>
              <ul className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-blue mt-1 mr-3" />
                    <span className="text-brand-dark/70 dark:text-white/70">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 font-montserrat text-brand-dark dark:text-white">Key Benefits</h2>
              <ul className="space-y-4">
                {industry.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-blue mt-1 mr-3" />
                    <span className="text-brand-dark/70 dark:text-white/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-dark rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4 font-montserrat">
              Ready to Secure Your {industry.title}?
            </h2>
            <p className="text-brand-grey mb-6">
              Get in touch with our experts to discuss your industry-specific security needs
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

export default IndustryPage;