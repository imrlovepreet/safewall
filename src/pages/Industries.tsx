import React from 'react';
import { 
  Building2, 
  Landmark, 
  Heart, 
  ShoppingBag, 
  GraduationCap, 
  Scale,
  Shield,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Industries() {
  const industries = [
    {
      icon: Building2,
      id: "government",
      title: "Government & Public Sector",
      description: "Compliance-focused security solutions to protect sensitive data and ensure operational continuity.",
      features: [
        "NIST framework compliance",
        "Secure infrastructure management",
        "24/7 monitoring and support",
        "Data encryption solutions"
      ]
    },
    {
      icon: Heart,
      id: "healthcare",
      title: "Healthcare & Medical Offices",
      description: "Secure IT systems, patient data protection, and HIPAA-compliant cybersecurity measures.",
      features: [
        "HIPAA compliance",
        "Electronic health records security",
        "Medical device protection",
        "Secure patient portals"
      ]
    },
    {
      icon: Landmark,
      id: "finance",
      title: "Financial Services & Banking",
      description: "Network security and firewall solutions to protect transactions and financial data.",
      features: [
        "PCI DSS compliance",
        "Secure transaction processing",
        "Fraud prevention systems",
        "Multi-layer authentication"
      ]
    },
    {
      icon: ShoppingBag,
      id: "retail",
      title: "E-commerce & Retail",
      description: "Secure online transactions, POS system security, and cloud-based IT management.",
      features: [
        "Payment gateway security",
        "POS system protection",
        "Inventory system security",
        "Customer data protection"
      ]
    },
    {
      icon: GraduationCap,
      id: "education",
      title: "Education & Institutions",
      description: "Secure campus networks, staff IT support, and firewall protection for online learning.",
      features: [
        "Campus network security",
        "Distance learning protection",
        "Student data privacy",
        "FERPA compliance"
      ]
    },
    {
      icon: Scale,
      id: "legal",
      title: "Law Firms & Legal Services",
      description: "Data privacy, secure document storage, encrypted communications, and compliance-driven IT solutions.",
      features: [
        "Document management security",
        "Client data protection",
        "Secure communication systems",
        "Compliance management"
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
              Industries We Serve
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Comprehensive IT and cybersecurity solutions tailored to meet the unique needs of your industry
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-brand-blue" />
            </div>
            <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-6 font-montserrat">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-brand-dark/70 dark:text-white/70 max-w-3xl mx-auto">
              At SafeWall, we understand that each industry faces unique challenges in managing and securing their technology infrastructure. Our solutions are carefully tailored to address specific industry requirements, compliance standards, and operational needs.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="py-16 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm p-8 hover:shadow-md transition">
                <industry.icon className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 font-montserrat text-brand-dark dark:text-white">
                  {industry.title}
                </h3>
                <p className="text-brand-dark/70 dark:text-white/70 mb-6">
                  {industry.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-brand-dark/70 dark:text-white/70">
                      <span className="w-2 h-2 bg-brand-blue rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/industries/${industry.id}`}
                  className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Ready to Secure Your Industry?
          </h2>
          <p className="text-xl text-brand-grey mb-8">
            Get in touch with our experts to discuss your industry-specific security needs
          </p>
          <Link 
            to="/consultation" 
            className="bg-brand-green text-brand-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition inline-flex items-center"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Industries;