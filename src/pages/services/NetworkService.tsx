import React from 'react';
import { Network, Shield, Server, Wifi, Settings, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function NetworkService() {
  const features = [
    {
      icon: Wifi,
      title: "Wired & Wireless Network Setup",
      description: "Secure and optimized networking solutions for seamless connectivity across your organization."
    },
    {
      icon: Shield,
      title: "Firewall & Security Implementation",
      description: "Robust protection against cyber threats and unauthorized access to your network."
    },
    {
      icon: Server,
      title: "Network Monitoring & Maintenance",
      description: "24/7 monitoring and proactive maintenance to prevent downtime and ensure optimal performance."
    },
    {
      icon: Settings,
      title: "Scalability for Future Growth",
      description: "Future-proof infrastructure designed to grow with your business needs."
    }
  ];

  const benefits = [
    "Enhanced network performance and reliability",
    "Reduced downtime and operational disruptions",
    "Improved security and data protection",
    "Cost-effective scalability",
    "Professional IT support and maintenance",
    "Streamlined business operations"
  ];

  const process = [
    {
      title: "Assessment",
      description: "We evaluate your current infrastructure, business requirements, and growth plans."
    },
    {
      title: "Design",
      description: "Our experts create a customized network architecture tailored to your needs."
    },
    {
      title: "Implementation",
      description: "Professional installation and configuration of all network components."
    },
    {
      title: "Testing",
      description: "Rigorous testing to ensure optimal performance and security."
    },
    {
      title: "Monitoring",
      description: "Continuous monitoring and maintenance to prevent issues."
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
              Network Installation & IT Management
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              A strong, secure network is the backbone of any business. Whether you're setting up a new office or upgrading your existing network, SafeWall ensures a fast, secure, and scalable IT infrastructure.
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
                Enterprise-Grade Network Solutions
              </h2>
              <p className="text-lg text-brand-dark/70 dark:text-white/70 mb-6">
                In today's digital landscape, a reliable and secure network infrastructure is crucial for business success. Our comprehensive network installation and IT management services ensure your business operates efficiently and securely.
              </p>
              <p className="text-lg text-brand-dark/70 dark:text-white/70">
                From initial setup to ongoing maintenance, our team of certified professionals handles every aspect of your network infrastructure, allowing you to focus on your core business operations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
                alt="Network Infrastructure"
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
            What We Offer
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
            Benefits of Our Network Solutions
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
            Our Implementation Process
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
            Need a Reliable Network Setup?
          </h2>
          <p className="text-xl text-brand-grey mb-8">
            Let SafeWall handle it for you. Our experts are ready to design and implement the perfect network solution for your business.
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

export default NetworkService;