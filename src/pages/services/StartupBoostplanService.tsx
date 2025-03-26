import React from 'react';
import { Rocket, Globe, Monitor, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function StartupBoostplanService() {
  const features = [
    {
      icon: Globe,
      title: "Professional Website Development",
      description: "Custom-built website to establish your online presence and attract customers."
    },
    {
      icon: Monitor,
      title: "Domain & Email Setup",
      description: "Professional email addresses and domain configuration for your brand."
    },
    {
      icon: Users,
      title: "Basic IT Infrastructure",
      description: "Complete setup for up to five devices with network configuration."
    },
    {
      icon: Rocket,
      title: "Tech Training",
      description: "One-hour comprehensive training session for your team."
    }
  ];

  const benefits = [
    "Quick launch with essential IT infrastructure",
    "Professional brand presence from day one",
    "Secure and reliable network setup",
    "Expert guidance and support",
    "Cost-effective startup package",
    "Scalable foundation for growth"
  ];

  const process = [
    {
      title: "Consultation",
      description: "Understanding your business needs and goals"
    },
    {
      title: "Planning",
      description: "Creating your custom IT roadmap"
    },
    {
      title: "Setup",
      description: "Implementing all essential services"
    },
    {
      title: "Training",
      description: "Team orientation and guidance"
    },
    {
      title: "Support",
      description: "Ongoing assistance as needed"
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
              IT Startup Boostplan: Launch Essentials
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Kickstart your business with a complete IT setup, ensuring you have all the essential tools to operate smoothly
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
                Launch Your Business with Confidence
              </h2>
              <p className="text-lg text-brand-dark/70 dark:text-white/70 mb-6">
                Starting a business requires the right IT foundation. Our Startup Boostplan provides everything you need to hit the ground running, from professional web presence to secure network setup.
              </p>
              <p className="text-lg text-brand-dark/70 dark:text-white/70">
                Let our experts handle your IT setup while you focus on growing your business. We ensure a smooth, professional start with all the essential tech tools you need.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Startup Team"
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
            What's Included
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
            Benefits of Our Startup Package
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Rocket className="h-6 w-6 text-brand-blue mt-1 mr-3" />
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
            Ready to Launch Your Business?
          </h2>
          <p className="text-xl text-brand-grey mb-8">
            Get started with our comprehensive IT startup package today
          </p>
          <Link 
            to="/consultation" 
            className="bg-brand-green text-brand-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition inline-flex items-center"
          >
            Get Started Today
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StartupBoostplanService;