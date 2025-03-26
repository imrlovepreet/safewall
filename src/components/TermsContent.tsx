import React from 'react';
import { Mail, Shield, Globe } from 'lucide-react';

function TermsContent() {
  return (
    <div className="prose max-w-none dark:prose-invert">
      <div className="mb-8">
        <p className="text-brand-dark/70 dark:text-white/70">
          <strong className="text-brand-dark dark:text-white">Effective Date:</strong> March 15, 2024<br />
          <strong className="text-brand-dark dark:text-white">Last Updated:</strong> March 15, 2024
        </p>
      </div>

      <p className="text-brand-dark/70 dark:text-white/70">
        Welcome to SafeWall ("Company," "we," "us," or "our"). These Terms of Service ("Terms") govern your use of our website (www.safewall.net) and our services. By using our website and services, you agree to these Terms. If you do not agree, please do not use our services.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">1. Definitions</h2>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>"Client," "You," or "Your" – Refers to any individual or business using SafeWall's website or services.</li>
        <li>"Services" – Includes IT services, cybersecurity solutions, network management, firewall setup, Active Directory configuration, and any other related services offered by SafeWall.</li>
        <li>"Website" – Refers to www.safewall.net and its associated content.</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">2. Eligibility & Acceptable Use</h2>
      <p className="text-brand-dark/70 dark:text-white/70">To use our services, you must:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Be at least 18 years old or have legal authorization.</li>
        <li>Use our services only for lawful purposes.</li>
        <li>Not engage in any activity that harms SafeWall, its reputation, or security.</li>
      </ul>

      <p className="text-brand-dark/70 dark:text-white/70 mt-4">You agree not to:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Use our services for illegal or fraudulent activities.</li>
        <li>Attempt to hack, modify, or interfere with our website or systems.</li>
        <li>Violate Canadian privacy laws (PIPEDA & CASL) or applicable international regulations.</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">3. Services Provided</h2>
      <p className="text-brand-dark/70 dark:text-white/70">We offer IT and cybersecurity services, including but not limited to:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Network installations & management</li>
        <li>Firewall & cybersecurity solutions</li>
        <li>VPN & Zero Trust Security</li>
        <li>IT support & maintenance</li>
        <li>Active Directory setup & management</li>
        <li>Compliance & risk assessments</li>
      </ul>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">A. No Guarantee of Results</h3>
      <p className="text-brand-dark/70 dark:text-white/70">
        While we strive for the best security and IT solutions, we do not guarantee that our services will prevent all cyber threats, data breaches, or downtime.
      </p>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">B. Service Modifications</h3>
      <p className="text-brand-dark/70 dark:text-white/70">SafeWall reserves the right to:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Change, discontinue, or upgrade services without prior notice.</li>
        <li>Adjust service fees or terms with reasonable notice.</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">4. Payment Terms & Billing</h2>
      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">A. Pricing & Quotes</h3>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Service fees are based on custom quotes or agreed contracts.</li>
        <li>All payments must be made in full before service delivery, unless otherwise agreed.</li>
      </ul>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">B. Invoices & Late Payments</h3>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Payments are due as per the invoice terms.</li>
        <li>Late payments may result in service suspension or late fees.</li>
      </ul>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">C. Refunds & Cancellations</h3>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Refunds are only issued for services not yet delivered.</li>
        <li>Once work has started, no refunds will be provided.</li>
        <li>Cancellation requests must be sent in writing to billing@safewall.net.</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">5. Confidentiality & Data Security</h2>
      <p className="text-brand-dark/70 dark:text-white/70">
        We take data security seriously and follow Canadian privacy laws (PIPEDA) to protect your information.
      </p>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">Client Confidentiality</h3>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>We will not share your private information without consent.</li>
        <li>Any confidential business data shared with us will remain protected.</li>
      </ul>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">Data Protection Measures</h3>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>We implement encryption, secure access controls, and monitoring to protect your data.</li>
        <li>However, we do not guarantee 100% security from cyber threats.</li>
      </ul>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">Third-Party Tools & Integrations</h3>
      <p className="text-brand-dark/70 dark:text-white/70">
        We use third-party services (e.g., Google Analytics, Calendly, payment processors), which have their own privacy policies. We are not responsible for their practices.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">6. Limitation of Liability</h2>
      <p className="text-brand-dark/70 dark:text-white/70">SafeWall is not liable for:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Cybersecurity incidents, data breaches, or hacking events beyond our control.</li>
        <li>Financial loss, business disruption, or damages resulting from service failures.</li>
        <li>Third-party service issues (e.g., cloud provider outages, software bugs).</li>
      </ul>

      <p className="text-brand-dark/70 dark:text-white/70 mt-4">Legal Disclaimer:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Our services are provided "as is", with no warranties.</li>
        <li>We are not responsible for indirect, incidental, or consequential damages.</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">7. Termination of Services</h2>
      <p className="text-brand-dark/70 dark:text-white/70">We reserve the right to suspend or terminate your access if:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>You violate these Terms.</li>
        <li>You fail to make payments for services.</li>
        <li>Your actions compromise security or harm our reputation.</li>
      </ul>

      <p className="text-brand-dark/70 dark:text-white/70 mt-4">
        Termination may be immediate, and you may lose access to ongoing services without compensation.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">8. Governing Law & Jurisdiction (Canadian Compliance)</h2>
      <p className="text-brand-dark/70 dark:text-white/70">These Terms are governed by the laws of Canada, specifically:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
        <li>Canada's Anti-Spam Legislation (CASL)</li>
        <li>Applicable provincial laws (e.g., BC's PIPA, Quebec's Law 25)</li>
      </ul>

      <p className="text-brand-dark/70 dark:text-white/70 mt-4">
        Legal disputes will be resolved in Ontario, Canada.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">9. Intellectual Property Rights</h2>
      <p className="text-brand-dark/70 dark:text-white/70">SafeWall owns all intellectual property related to:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Website content, branding, and trademarks</li>
        <li>Custom IT solutions developed for clients</li>
        <li>Documentation, training materials, and reports</li>
      </ul>

      <p className="text-brand-dark/70 dark:text-white/70 mt-4">
        You may not copy, modify, or resell our content or proprietary solutions without written permission.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">10. Changes to These Terms</h2>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>We may update these Terms from time to time.</li>
        <li>Changes will be posted on our website, and your continued use indicates acceptance.</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">11. Contact Information</h2>
      <p className="text-brand-dark/70 dark:text-white/70">If you have any questions or concerns, contact us at:</p>
      
      <div className="flex items-center mt-4 text-brand-dark/70 dark:text-white/70">
        <Mail className="h-5 w-5 mr-2 text-brand-blue" />
        <a href="mailto:support@safewall.net" className="hover:text-brand-blue transition">
          support@safewall.net
        </a>
      </div>
      <div className="flex items-center mt-2 text-brand-dark/70 dark:text-white/70">
        <Globe className="h-5 w-5 mr-2 text-brand-blue" />
        <span>www.safewall.net</span>
      </div>
      <div className="flex items-center mt-2 text-brand-dark/70 dark:text-white/70">
        <Shield className="h-5 w-5 mr-2 text-brand-blue" />
        <span>Canada-based operations</span>
      </div>
    </div>
  );
}

export default TermsContent;