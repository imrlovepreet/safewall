import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Globe } from 'lucide-react';
import PrivacyModal from './PrivacyModal';
import TermsModal from './TermsModal';

function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-brand-dark dark:bg-black text-brand-grey py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-brand-blue" />
                <span className="ml-2 text-xl font-bold text-white font-montserrat">SafeWall</span>
              </Link>
              <p className="text-sm text-brand-grey dark:text-brand-grey/80">
                Leading provider of enterprise-grade cybersecurity solutions. Built with Love, Fortified with Security.
              </p>
              <div className="mt-4 flex space-x-4">
                <Award className="h-5 w-5 text-brand-blue" title="ISO 27001 Certified" />
                <Users className="h-5 w-5 text-brand-blue" title="500+ Enterprise Clients" />
                <Globe className="h-5 w-5 text-brand-blue" title="Global Coverage" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-montserrat text-white">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/network" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Network Installation</Link></li>
                <li><Link to="/services/firewall" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Firewall Solutions</Link></li>
                <li><Link to="/services/mssp" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Managed Security</Link></li>
                <li><Link to="/services/cloud" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Cloud Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-montserrat text-white">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog/category/best-practices" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Security Best Practices</Link></li>
                <li><Link to="/blog/category/trends" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Industry Trends</Link></li>
                <li><Link to="/blog/category/compliance" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Compliance Guides</Link></li>
                <li><Link to="/consultation" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Free Security Assessment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-montserrat text-white">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">About SafeWall</Link></li>
                <li><Link to="/industries" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Industries We Serve</Link></li>
                <li><Link to="/consultation" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Request a Demo</Link></li>
                <li><Link to="/blog" className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition">Latest Updates</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-grey/20 mt-12 pt-8 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-brand-grey dark:text-brand-grey/80">&copy; 2024 SafeWall. All rights reserved.</p>
              <div className="mt-4 md:mt-0 space-x-6">
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setIsTermsModalOpen(true)}
                  className="text-brand-grey dark:text-brand-grey/80 hover:text-brand-green transition"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </>
  );
}

export default Footer;