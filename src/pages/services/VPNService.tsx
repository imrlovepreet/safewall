import React from 'react';
import { Lock, Shield, Globe, Users, Key, Network, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function VPNService() {
  const principles = [
    {
      icon: Lock,
      title: "Least Privilege Access",
      description: "Users get only the permissions they need, nothing more."
    },
    {
      icon: Shield,
      title: "Continuous Authentication & Monitoring",
      description: "Verifies identities at every step, even after login."
    },
    {
      icon: Network,
      title: "Micro-Segmentation",
      description: "Restricts access to sensitive resources to prevent lateral movement."
    },
    {
      icon: Key,
      title: "Multi-Factor Authentication (MFA)",
      description: "Adds extra layers of verification for secure access."
    }
  ];

  const vpnSolutions = [
    {
      icon: Globe,
      title: "Site-to-Site VPNs",
      description: "Secure connections between branch offices and headquarters."
    },
    {
      icon: Users,
      title: "Remote Access VPNs",
      description: "Secure remote work environments for employees and contractors."
    },
    {
      icon: Network,
      title: "Cloud VPNs",
      description: "Securely connect users to cloud applications and data centers."
    },
    {
      icon: Shield,
      title: "SSL & IPSec VPNs",
      description: "Advanced encryption for safe communication across the internet."
    }
  ];

  const benefits = [
    {
      icon: Lock,
      title: "Prevents Unauthorized Access",
      description: "Strict user authentication policies reduce the risk of breaches."
    },
    {
      icon: Globe,
      title: "Secures Remote Workforce",
      description: "Employees can securely access company resources from anywhere."
    },
    {
      icon: Shield,
      title: "Improves Compliance",
      description: "Meets data protection standards like GDPR, HIPAA, and PCI-DSS."
    },
    {
      icon: Network,
      title: "Enhances Performance",
      description: "Optimized VPN solutions ensure fast and secure connections."
    }
  ];

  const features = [
    "Certified Security Experts – We design custom VPN & Zero Trust solutions tailored to your business",
    "End-to-End Encryption – Ensures secure communication for remote users",
    "Seamless Integration – Works with existing firewalls, identity providers, and security policies"
  ];

  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              VPN & Zero Trust Security Solutions
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Secure remote access and advanced security architecture for the modern workplace
            </p>
          </div>
        </div>
      </div>

      {/* Zero Trust Introduction */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-6 font-montserrat">
                What is Zero Trust Security?
              </h2>
              <p className="text-lg text-brand-dark/70 dark:text-white/70 mb-6">
                The Zero Trust model follows the principle of "never trust, always verify." Unlike traditional security models that assume trust within a network, Zero Trust requires continuous verification of every device, user, and application before granting access.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800"
                alt="Zero Trust Security"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-brand-blue/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Zero Trust Principles */}
      <div className="py-16 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
            Key Principles of Zero Trust Security
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white dark:bg-brand-dark/50 p-8 rounded-xl shadow-sm">
                <principle.icon className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 font-montserrat text-brand-dark dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-brand-dark/70 dark:text-white/70">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VPN Solutions */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-6 font-montserrat">
              Secure VPN Solutions
            </h2>
            <p className="text-lg text-brand-dark/70 dark:text-white/70 max-w-3xl mx-auto">
              A Virtual Private Network (VPN) creates a secure, encrypted tunnel between remote users and corporate networks. SafeWall helps businesses deploy and manage enterprise-grade VPN solutions to protect remote access.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vpnSolutions.map((solution, index) => (
              <div key={index} className="bg-brand-grey/10 dark:bg-white/5 p-8 rounded-xl">
                <solution.icon className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 font-montserrat text-brand-dark dark:text-white">
                  {solution.title}
                </h3>
                <p className="text-brand-dark/70 dark:text-white/70">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
            Benefits of VPN & Zero Trust Security
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-brand-dark/50 p-8 rounded-xl shadow-sm">
                <benefit.icon className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 font-montserrat text-brand-dark dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-brand-dark/70 dark:text-white/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose SafeWall */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
            Why Choose SafeWall?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Shield className="h-6 w-6 text-brand-blue mt-1 mr-3" />
                <p className="text-brand-dark/70 dark:text-white/70">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Get Started with Secure Remote Access
          </h2>
          <p className="text-xl text-brand-grey mb-8">
            Secure your workforce with VPN & Zero Trust Security today! Let SafeWall protect your business from unauthorized access and cyber threats.
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

export default VPNService;