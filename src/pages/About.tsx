import React from 'react';
import { Shield } from 'lucide-react';

function About() {
  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Our Mission: Protecting What Matters Most
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Dedicated to providing enterprise-grade cybersecurity solutions that safeguard your digital assets and ensure business continuity.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-6 font-montserrat">Who We Are</h2>
              <div className="space-y-4">
                <p className="text-brand-dark/70 dark:text-white/70">
                  At SafeWall, we are dedicated to fortifying businesses with enterprise-grade cybersecurity solutions, specializing in firewall implementation, network security, and threat management. With expertise in Fortinet, Palo Alto, Cisco, and other industry-leading solutions, we ensure that organizations of all sizes remain protected against evolving cyber threats.
                </p>
                <p className="text-brand-dark/70 dark:text-white/70">
                  Founded with a commitment to security, reliability, and innovation, SafeWall serves as a trusted cybersecurity partner, enabling businesses to focus on their growth while we handle the complexities of network protection. Whether securing corporate infrastructure or ensuring compliance with industry standards, our approach is strategic, proactive, and tailored to meet the unique needs of our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800"
                alt="Team Meeting"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-brand-blue/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white dark:bg-brand-dark/50 p-8 rounded-xl shadow-sm transition-colors duration-200">
              <h2 className="text-2xl font-bold mb-6 font-montserrat text-brand-dark dark:text-white">Our Mission</h2>
              <div className="space-y-4">
                <p className="text-brand-dark/70 dark:text-white/70">
                  At SafeWall, our mission is to empower businesses with cutting-edge cybersecurity solutions that ensure seamless protection without complexity. We specialize in delivering robust firewall deployments, proactive security management, and tailored risk assessments, allowing organizations to operate with confidence in an increasingly digital world.
                </p>
                <p className="text-brand-dark/70 dark:text-white/70">
                  By combining deep industry expertise with a hands-on approach, we help businesses mitigate risks, enhance security postures, and stay ahead of emerging cyber threats—ensuring security is not a roadblock but a catalyst for success.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-brand-dark/50 p-8 rounded-xl shadow-sm transition-colors duration-200">
              <h2 className="text-2xl font-bold mb-6 font-montserrat text-brand-dark dark:text-white">Our Vision</h2>
              <div className="space-y-4">
                <p className="text-brand-dark/70 dark:text-white/70">
                  We envision a future where cybersecurity is effortless, resilient, and seamlessly integrated into every business operation. Our goal is to be the go-to cybersecurity partner for enterprises, SMBs, and government agencies, delivering customized, scalable, and industry-leading security solutions that evolve with the ever-changing digital landscape.
                </p>
                <p className="text-brand-dark/70 dark:text-white/70">
                  At SafeWall, we are committed to fostering a security-first culture, where businesses are not just protected but empowered to thrive in the face of cybersecurity challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Carousel */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-montserrat">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-brand-grey/10 dark:bg-white/5 p-8 rounded-xl text-center hover:bg-brand-blue/5 dark:hover:bg-white/10 transition duration-200">
              <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-montserrat text-brand-dark dark:text-white">Security First</h3>
              <p className="text-brand-dark/70 dark:text-white/70">Prioritizing protection in everything we do</p>
            </div>
            <div className="bg-brand-grey/10 dark:bg-white/5 p-8 rounded-xl text-center hover:bg-brand-blue/5 dark:hover:bg-white/10 transition duration-200">
              <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-montserrat text-brand-dark dark:text-white">Reliability</h3>
              <p className="text-brand-dark/70 dark:text-white/70">Consistent and dependable service delivery</p>
            </div>
            <div className="bg-brand-grey/10 dark:bg-white/5 p-8 rounded-xl text-center hover:bg-brand-blue/5 dark:hover:bg-white/10 transition duration-200">
              <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-montserrat text-brand-dark dark:text-white">Innovation</h3>
              <p className="text-brand-dark/70 dark:text-white/70">Embracing cutting-edge solutions</p>
            </div>
            <div className="bg-brand-grey/10 dark:bg-white/5 p-8 rounded-xl text-center hover:bg-brand-blue/5 dark:hover:bg-white/10 transition duration-200">
              <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-montserrat text-brand-dark dark:text-white">Integrity</h3>
              <p className="text-brand-dark/70 dark:text-white/70">Honest and transparent partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;