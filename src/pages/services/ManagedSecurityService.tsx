import React from 'react';
import { Shield, Server, Bell, Clock, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ManagedSecurityService() {
  const features = [
    {
      icon: Shield,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring of your network and systems for potential security threats."
    },
    {
      icon: Server,
      title: "Incident Response",
      description: "Rapid response and remediation of security incidents to minimize impact."
    },
    {
      icon: Bell,
      title: "Threat Detection",
      description: "Advanced threat detection using AI and machine learning technologies."
    },
    {
      icon: Clock,
      title: "Regular Reporting",
      description: "Detailed security reports and analytics for informed decision-making."
    }
  ];

  const benefits = [
    "Proactive threat prevention",
    "Reduced security risks",
    "Continuous protection",
    "Expert security management",
    "Cost-effective security",
    "Compliance maintenance"
  ];

  const process = [
    {
      title: "Setup",
      description: "Initial security assessment and monitoring setup"
    },
    {
      title: "Monitor",
      description: "Continuous security surveillance"
    },
    {
      title: "Detect",
      description: "Identify potential threats"
    },
    {
      title: "Respond",
      description: "Rapid incident response"
    },
    {
      title: "Report",
      description: "Regular security updates"
    }
  ];

  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Managed Security Services
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              24/7 security monitoring and management for comprehensive protection
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-6 font-montserrat">
                Comprehensive Security Management
              </h2>
              <p className="text-lg text-brand-dark/70 dark:text-white/70 mb-6">
                Our Managed Security Services provide continuous monitoring and protection for your IT infrastructure. With expert security professionals and advanced threat detection systems, we ensure your business stays protected 24/7.
              </p>
              <p className="text-lg text-brand-dark/70 dark:text-white/70">
                From real-time monitoring to incident response and regular security assessments, our comprehensive approach keeps your systems secure and compliant.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
                alt="Security Operations Center"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-brand-blue/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
            Our Security Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-brand-dark/50 p-8 rounded-xl shadow-sm">
                <feature.icon className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 font-montserrat text-brand-dark dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-brand-dark/70 dark:text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
            Benefits of Managed Security
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Shield className="h-6 w-6 text-brand-blue mt-1 mr-3" />
                <p className="text-brand-dark/70 dark:text-white/70">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
            Our Security Process
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white dark:bg-brand-dark/50 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 font-montserrat text-brand-dark dark:text-white">
                  {step.title}
                </h3>
                <p className="text-brand-dark/70 dark:text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Ready for Expert Security Management?
          </h2>
          <p className="text-xl text-brand-grey mb-8">
            Let our security experts protect your business 24/7
          </p>
          <Link 
            to="/consultation" 
            className="bg-brand-green text-brand-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition inline-flex items-center"
          >
            Schedule a Consultation
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManagedSecurityService;