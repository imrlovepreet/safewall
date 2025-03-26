import React from 'react';
import { Lock, Server, Users, Cloud, Shield, FileCheck, Network, Monitor, Database, Laptop, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Comprehensive Cybersecurity Solutions
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Protecting your business with enterprise-grade security services tailored to your needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Network Installation & IT Management */}
            <div className="p-8 bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm border border-brand-grey/10 dark:border-white/10 hover:shadow-md transition">
              <Network className="h-12 w-12 text-brand-blue mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-brand-dark dark:text-white">Network Installation & IT Management</h2>
              <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                Complete network infrastructure setup and ongoing IT management services for businesses of all sizes.
              </p>
              <ul className="space-y-2 mb-6 text-brand-dark/70 dark:text-white/70">
                <li>• Network design and implementation</li>
                <li>• Hardware and software setup</li>
                <li>• 24/7 network monitoring</li>
                <li>• IT infrastructure maintenance</li>
              </ul>
              <Link to="/services/network" className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Computer Setup & Active Directory */}
            <div className="p-8 bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm border border-brand-grey/10 dark:border-white/10 hover:shadow-md transition">
              <Laptop className="h-12 w-12 text-brand-blue mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-brand-dark dark:text-white">Computer Setup & Active Directory</h2>
              <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                Professional workstation setup and Active Directory configuration for seamless network management.
              </p>
              <ul className="space-y-2 mb-6 text-brand-dark/70 dark:text-white/70">
                <li>• Workstation deployment</li>
                <li>• Active Directory setup and management</li>
                <li>• User account administration</li>
                <li>• Group policy configuration</li>
              </ul>
              <Link to="/services/setup" className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Firewall Solutions */}
            <div className="p-8 bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm border border-brand-grey/10 dark:border-white/10 hover:shadow-md transition">
              <Lock className="h-12 w-12 text-brand-blue mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-brand-dark dark:text-white">Firewall Solutions</h2>
              <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                Expert implementation and management of industry-leading firewall solutions to protect your network perimeter.
              </p>
              <ul className="space-y-2 mb-6 text-brand-dark/70 dark:text-white/70">
                <li>• Fortinet, Palo Alto, Cisco firewall setup</li>
                <li>• Network security policy creation</li>
                <li>• Regular security updates and maintenance</li>
                <li>• Performance optimization</li>
              </ul>
              <Link to="/services/firewall" className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Cloud Security & VPN */}
            <div className="p-8 bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm border border-brand-grey/10 dark:border-white/10 hover:shadow-md transition">
              <Cloud className="h-12 w-12 text-brand-blue mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-brand-dark dark:text-white">Cloud Security & VPN</h2>
              <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                Comprehensive cloud security solutions and VPN implementation for secure remote access.
              </p>
              <ul className="space-y-2 mb-6 text-brand-dark/70 dark:text-white/70">
                <li>• Cloud security architecture design</li>
                <li>• VPN setup and configuration</li>
                <li>• Multi-factor authentication</li>
                <li>• Zero Trust implementation</li>
              </ul>
              <Link to="/services/vpn" className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Penetration Testing */}
            <div className="p-8 bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm border border-brand-grey/10 dark:border-white/10 hover:shadow-md transition">
              <Users className="h-12 w-12 text-brand-blue mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-brand-dark dark:text-white">Penetration Testing</h2>
              <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                Comprehensive security assessments to identify and address vulnerabilities in your systems.
              </p>
              <ul className="space-y-2 mb-6 text-brand-dark/70 dark:text-white/70">
                <li>• Network penetration testing</li>
                <li>• Web application security testing</li>
                <li>• Social engineering assessments</li>
                <li>• Detailed reporting and remediation guidance</li>
              </ul>
              <Link to="/services/testing" className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Managed Security */}
            <div className="p-8 bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm border border-brand-grey/10 dark:border-white/10 hover:shadow-md transition">
              <Server className="h-12 w-12 text-brand-blue mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-brand-dark dark:text-white">Managed Security Services</h2>
              <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                24/7 monitoring and management of your security infrastructure to ensure continuous protection.
              </p>
              <ul className="space-y-2 mb-6 text-brand-dark/70 dark:text-white/70">
                <li>• Real-time threat monitoring</li>
                <li>• Incident response and remediation</li>
                <li>• Security log management</li>
                <li>• Regular security reports</li>
              </ul>
              <Link to="/services/mssp" className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm">
              <Shield className="h-12 w-12 text-brand-blue mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-brand-dark dark:text-white">VPN & Zero Trust Security</h2>
              <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                Implement secure remote access solutions with modern Zero Trust architecture.
              </p>
              <ul className="space-y-2 mb-6 text-brand-dark/70 dark:text-white/70">
                <li>• Enterprise VPN setup</li>
                <li>• Zero Trust implementation</li>
                <li>• Access control policies</li>
                <li>• Multi-factor authentication</li>
              </ul>
              <Link to="/services/vpn" className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="p-8 bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm">
              <FileCheck className="h-12 w-12 text-brand-blue mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-brand-dark dark:text-white">Compliance & Risk Assessment</h2>
              <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                Ensure your security measures meet industry standards and compliance requirements.
              </p>
              <ul className="space-y-2 mb-6 text-brand-dark/70 dark:text-white/70">
                <li>• NIST framework alignment</li>
                <li>• ISO 27001 compliance</li>
                <li>• Risk assessment</li>
                <li>• Security policy development</li>
              </ul>
              <Link to="/services/compliance" className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="p-8 bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm">
              <Rocket className="h-12 w-12 text-brand-blue mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-brand-dark dark:text-white">IT Startup Boostplan</h2>
              <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                Complete IT setup package to help startups launch with professional infrastructure.
              </p>
              <ul className="space-y-2 mb-6 text-brand-dark/70 dark:text-white/70">
                <li>• Professional website development</li>
                <li>• Domain & email setup</li>
                <li>• Basic IT infrastructure (up to 5 devices)</li>
                <li>• 1-hour tech training session</li>
              </ul>
              <Link to="/services/startup" className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;