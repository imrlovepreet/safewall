import React from 'react';
import { Monitor, Shield, Users, Settings, Lock, Database, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ComputerSetupService() {
  const features = [
    {
      icon: Monitor,
      title: "Workstation Deployment",
      description: "Professional setup and configuration of business workstations and laptops."
    },
    {
      icon: Shield,
      title: "Active Directory Setup",
      description: "Centralized user and resource management for enhanced security and control."
    },
    {
      icon: Users,
      title: "User Account Administration",
      description: "Efficient management of user accounts, permissions, and access controls."
    },
    {
      icon: Settings,
      title: "Group Policy Configuration",
      description: "Standardized security policies and settings across your organization."
    }
  ];

  const benefits = [
    "Streamlined user management and access control",
    "Enhanced security through centralized administration",
    "Improved productivity with standardized setups",
    "Efficient resource allocation and management",
    "Reduced IT support overhead",
    "Simplified compliance management"
  ];

  const process = [
    {
      title: "Planning",
      description: "Define user roles and access requirements"
    },
    {
      title: "Configuration",
      description: "Set up Active Directory and group policies"
    },
    {
      title: "Deployment",
      description: "Roll out standardized workstation configurations"
    },
    {
      title: "Testing",
      description: "Verify all systems and policies"
    },
    {
      title: "Training",
      description: "User training and documentation"
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
              Computer Setup & Active Directory Management
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Professional workstation deployment and Active Directory configuration for seamless network management and enhanced security.
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
                Professional Workstation Management
              </h2>
              <p className="text-lg text-brand-dark/70 dark:text-white/70 mb-6">
                Efficient computer setup and Active Directory management are crucial for maintaining a secure and productive business environment. Our comprehensive services ensure your workstations and user management systems operate seamlessly.
              </p>
              <p className="text-lg text-brand-dark/70 dark:text-white/70">
                From individual workstation deployment to enterprise-wide Active Directory implementation, our experts handle every aspect of your computer infrastructure setup and management.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
                alt="Computer Setup"
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
            Our Services
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
            Benefits
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
            Ready to Optimize Your Workstation Management?
          </h2>
          <p className="text-xl text-brand-grey mb-8">
            Let our experts help you implement efficient computer setup and Active Directory solutions.
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

export default ComputerSetupService;