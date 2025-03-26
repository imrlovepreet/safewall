import React from 'react';
import { Shield, Target, Wifi, Users, Cloud, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function PenetrationTestingService() {
  const services = [
    {
      icon: Shield,
      title: "Network Penetration Testing",
      features: [
        "Identifies weaknesses in firewalls, routers, and internal networks",
        "Evaluates security misconfigurations and potential entry points",
        "Simulates real-world attacks to test network resilience"
      ]
    },
    {
      icon: Target,
      title: "Web & Mobile Application Penetration Testing",
      features: [
        "Identifies security flaws in web and mobile applications",
        "Tests for SQL injection, cross-site scripting (XSS), authentication bypasses, and more",
        "Ensures compliance with OWASP Top 10 security best practices"
      ]
    },
    {
      icon: Wifi,
      title: "Wireless Security Testing",
      features: [
        "Detects vulnerabilities in Wi-Fi networks and wireless access points",
        "Identifies unauthorized devices and rogue access points",
        "Prevents unauthorized access and data interception"
      ]
    },
    {
      icon: Users,
      title: "Social Engineering Testing",
      features: [
        "Tests employee awareness through simulated phishing, pretexting, and baiting attacks",
        "Evaluates the effectiveness of cybersecurity training",
        "Helps build a security-conscious workplace culture"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Security Penetration Testing",
      features: [
        "Assesses security risks in cloud environments (AWS, Azure, Google Cloud)",
        "Identifies misconfigurations, improper access controls, and data leakage risks",
        "Ensures compliance with industry security frameworks"
      ]
    },
    {
      icon: Zap,
      title: "Red Team vs. Blue Team Testing",
      features: [
        "Red Team: Offensive security experts simulate real-world cyberattacks",
        "Blue Team: Defensive security experts respond to attacks",
        "Assesses incident response capabilities"
      ]
    }
  ];

  const benefits = [
    {
      title: "Certified Ethical Hackers",
      description: "Our team consists of highly skilled cybersecurity professionals (CEH, OSCP, CISSP)"
    },
    {
      title: "Real-World Attack Simulations",
      description: "We use advanced tools and methodologies to simulate sophisticated cyberattacks"
    },
    {
      title: "Detailed Reporting & Actionable Insights",
      description: "You receive a comprehensive report with risk assessments and step-by-step remediation plans"
    },
    {
      title: "Regulatory Compliance",
      description: "Our testing aligns with PCI-DSS, HIPAA, GDPR, NIST, and ISO 27001 standards"
    }
  ];

  const process = [
    {
      title: "Scoping & Planning",
      description: "Understanding your business needs, infrastructure, and security concerns"
    },
    {
      title: "Reconnaissance",
      description: "Identifying potential vulnerabilities and attack vectors"
    },
    {
      title: "Exploitation & Attack",
      description: "Attempting to breach security controls using ethical hacking techniques"
    },
    {
      title: "Analysis",
      description: "Assessing the potential impact of security flaws"
    },
    {
      title: "Reporting",
      description: "Providing detailed security report with risk ratings and actionable fixes"
    },
    {
      title: "Re-Testing",
      description: "Ensuring vulnerabilities have been successfully patched"
    }
  ];

  const industries = [
    "Financial Services & Banking – Protecting customer data and transactions",
    "Healthcare & Medical Institutions – Ensuring compliance with HIPAA security standards",
    "Law Firms & Legal Services – Securing confidential client information",
    "E-commerce & Retail – Preventing data breaches in online transactions",
    "Government & Public Sector – Strengthening national security defenses"
  ];

  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Penetration Testing Services
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              In today's rapidly evolving cyber landscape, businesses must go beyond basic security measures to identify vulnerabilities before attackers do.
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
                What is Penetration Testing?
              </h2>
              <p className="text-lg text-brand-dark/70 dark:text-white/70 mb-6">
                Penetration testing is a controlled and ethical hacking process where cybersecurity experts attempt to exploit security gaps in a company's infrastructure. The goal is to identify vulnerabilities, assess potential impact, and provide remediation strategies before cybercriminals can exploit them.
              </p>
              <p className="text-lg text-brand-dark/70 dark:text-white/70">
                Our comprehensive penetration testing services simulate real-world attacks to uncover security weaknesses in your network, applications, and systems, helping you strengthen your defenses before a breach occurs.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                alt="Penetration Testing"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-brand-blue/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
            Our Penetration Testing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-brand-dark/50 p-8 rounded-xl shadow-sm">
                <service.icon className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold mb-4 font-montserrat text-brand-dark dark:text-white">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-brand-dark/70 dark:text-white/70">
                      <span className="w-2 h-2 bg-brand-blue rounded-full mr-2 mt-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
            Why Choose SafeWall for Penetration Testing?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Shield className="h-6 w-6 text-brand-blue mt-1 mr-3" />
                <div>
                  <h3 className="text-xl font-bold mb-2 font-montserrat text-brand-dark dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-dark/70 dark:text-white/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
            The Penetration Testing Process
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white dark:bg-brand-dark/50 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2 font-montserrat text-brand-dark dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-dark/70 dark:text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">
            Industries That Benefit from Penetration Testing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-start">
                <Shield className="h-6 w-6 text-brand-blue mt-1 mr-3" />
                <p className="text-brand-dark/70 dark:text-white/70">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Are You Confident in Your Cybersecurity Defenses?
          </h2>
          <p className="text-xl text-brand-grey mb-8">
            Don't wait for a breach to happen—test your security today! SafeWall provides expert penetration testing to help you identify vulnerabilities and protect your business.
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

export default PenetrationTestingService;