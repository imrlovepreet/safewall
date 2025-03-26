import React from 'react';
import { Lock, Shield, Server, Network, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function FirewallService() {
  const features = [
    {
      icon: Lock,
      title: "Enterprise Firewall Solutions",
      description: "Implementation of industry-leading firewalls from Fortinet, Palo Alto, and Cisco."
    },
    {
      icon: Shield,
      title: "Network Security Policies",
      description: "Custom security policies tailored to your business needs and compliance requirements."
    },
    {
      icon: Server,
      title: "24/7 Monitoring",
      description: "Continuous monitoring and threat detection to prevent security breaches."
    },
    {
      icon: Network,
      title: "Performance Optimization",
      description: "Regular updates and optimization to maintain peak firewall performance."
    }
  ];

  const benefits = [
    "Enhanced network security against cyber threats",
    "Compliance with industry security standards",
    "Reduced risk of data breaches",
    "Improved network performance",
    "Real-time threat monitoring and response",
    "Expert security management"
  ];

  const process = [
    {
      title: "Assessment",
      description: "Evaluate current security posture and requirements"
    },
    {
      title: "Design",
      description: "Create custom firewall architecture"
    },
    {
      title: "Implementation",
      description: "Deploy and configure firewall solutions"
    },
    {
      title: "Testing",
      description: "Verify security policies and performance"
    },
    {
      title: "Monitoring",
      description: "Continuous security monitoring"
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
              Enterprise-Grade Firewall Solutions
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Protect your network with advanced firewall security and expert management
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
                Advanced Network Protection
              </h2>
              <p className="text-lg text-brand-dark/70 dark:text-white/70 mb-6">
                In today's digital landscape, a robust firewall is your first line of defense against cyber threats. Our enterprise-grade firewall solutions provide comprehensive protection for your network infrastructure.
              </p>
              <p className="text-lg text-brand-dark/70 dark:text-white/70">
                We specialize in implementing and managing industry-leading firewall solutions from Fortinet, Palo Alto, and Cisco, ensuring your business stays protected against evolving security threats.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                alt="Network Security"
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
            Comprehensive Firewall Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-brand-dark/50 p-8 rounded-xl shadow-sm border border-brand-grey/10 dark:border-white/10">
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
            Benefits of Our Firewall Solutions
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
            Implementation Process
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white dark:bg-brand-dark/50 p-6 rounded-xl text-center border border-brand-grey/10 dark:border-white/10">
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
            Ready to Secure Your Network?
          </h2>
          <p className="text-xl text-brand-grey mb-8">
            Get started with our enterprise-grade firewall solutions today
          </p>
          <Link 
            to="/consultation" 
            className="bg-brand-green text-brand-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition inline-flex items-center"
          >
            Schedule a Security Assessment
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FirewallService;