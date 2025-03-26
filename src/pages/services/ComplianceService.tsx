import React from 'react';
import { FileCheck, Shield, Book, CheckCircle, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ComplianceService() {
  const services = [
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive evaluation of security risks and vulnerabilities in your organization",
      features: [
        "Threat modeling and analysis",
        "Vulnerability assessment",
        "Risk prioritization",
        "Mitigation strategies"
      ]
    },
    {
      icon: Book,
      title: "Compliance Management",
      description: "Ensure adherence to industry standards and regulations",
      features: [
        "GDPR compliance",
        "HIPAA requirements",
        "PCI-DSS standards",
        "ISO 27001 certification"
      ]
    },
    {
      icon: FileText,
      title: "Policy Development",
      description: "Create and implement comprehensive security policies",
      features: [
        "Security policy creation",
        "Procedure documentation",
        "Employee guidelines",
        "Policy enforcement"
      ]
    },
    {
      icon: CheckCircle,
      title: "Audit Support",
      description: "Expert assistance during security audits and assessments",
      features: [
        "Pre-audit preparation",
        "Documentation review",
        "Audit response support",
        "Remediation guidance"
      ]
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
              Compliance & Risk Assessment
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Ensure your security measures meet industry standards and compliance requirements
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-brand-grey/10 dark:bg-white/5 p-8 rounded-xl">
                <service.icon className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 font-montserrat text-brand-dark dark:text-white">
                  {service.title}
                </h3>
                <p className="text-brand-dark/70 dark:text-white/70 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-brand-dark/70 dark:text-white/70">
                      <span className="w-2 h-2 bg-brand-blue rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Ready to Ensure Compliance?
          </h2>
          <p className="text-xl text-brand-grey mb-8">
            Let our experts help you navigate complex compliance requirements and assess your security risks.
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

export default ComplianceService;