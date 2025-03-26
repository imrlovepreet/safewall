import React from 'react';
import { Mail, Shield, Lock, Globe } from 'lucide-react';

function PrivacyContent() {
  return (
    <div className="prose max-w-none dark:prose-invert">
      <div className="mb-8">
        <p className="text-brand-dark/70 dark:text-white/70">
          <strong className="text-brand-dark dark:text-white">Effective Date:</strong> March 15, 2024<br />
          <strong className="text-brand-dark dark:text-white">Last Updated:</strong> March 15, 2024
        </p>
      </div>

      <p className="text-brand-dark/70 dark:text-white/70">
        SafeWall ("we," "us," or "our") is committed to protecting your privacy and ensuring compliance with Canadian privacy laws, including PIPEDA and CASL. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website (www.safewall.net) and use our services.
      </p>

      <p className="text-brand-dark/70 dark:text-white/70">
        By using our website, you agree to the collection and use of your information as described in this policy.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">1. Information We Collect</h2>
      <p className="text-brand-dark/70 dark:text-white/70">We collect information in the following ways:</p>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">A. Personal Information (PIPEDA Compliance)</h3>
      <p className="text-brand-dark/70 dark:text-white/70">Personal information refers to data that can identify you as an individual. This may include:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Phone Number (if provided)</li>
        <li>Company Name</li>
        <li>Billing and Payment Information (if applicable)</li>
      </ul>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">B. Non-Personal Information</h3>
      <p className="text-brand-dark/70 dark:text-white/70">This includes information that does not directly identify you, such as:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Browser type and version</li>
        <li>IP address</li>
        <li>Device information</li>
        <li>Pages visited on our website</li>
        <li>Cookies and analytics data</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">2. How We Use Your Information</h2>
      <p className="text-brand-dark/70 dark:text-white/70">Your information is used for the following purposes:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Providing IT and cybersecurity services</li>
        <li>Responding to inquiries and support requests</li>
        <li>Enhancing our website and user experience</li>
        <li>Preventing fraud and security threats</li>
        <li>Marketing communications (CASL Compliance)</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">3. Compliance with Canadian Privacy Laws</h2>
      
      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">A. Personal Information Protection and Electronic Documents Act (PIPEDA)</h3>
      <p className="text-brand-dark/70 dark:text-white/70">Under PIPEDA, we must:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Obtain consent before collecting personal data</li>
        <li>Allow users to access, correct, or delete their personal information</li>
        <li>Protect data with appropriate security measures</li>
        <li>Be transparent about how we use and store data</li>
      </ul>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">B. Canada's Anti-Spam Legislation (CASL)</h3>
      <p className="text-brand-dark/70 dark:text-white/70">Under CASL, we:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Obtain express or implied consent before sending marketing emails</li>
        <li>Provide a clear unsubscribe option in all emails</li>
        <li>Identify ourselves and include contact information in all communications</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">4. How We Share Your Information</h2>
      <p className="text-brand-dark/70 dark:text-white/70">We do not sell or trade your personal information. However, we may share it in the following cases:</p>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">A. Service Providers</h3>
      <p className="text-brand-dark/70 dark:text-white/70">We work with third-party providers for:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Website hosting (e.g., Squarespace)</li>
        <li>Analytics & tracking (e.g., Google Analytics)</li>
        <li>Scheduling tools (e.g., Calendly)</li>
        <li>Payment processing (if applicable)</li>
      </ul>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">B. Legal Compliance</h3>
      <p className="text-brand-dark/70 dark:text-white/70">
        We may disclose information if required by Canadian law, including government requests and legal proceedings.
      </p>

      <h3 className="text-xl font-bold text-brand-dark dark:text-white mt-8 mb-4 font-montserrat">C. Business Transfers</h3>
      <p className="text-brand-dark/70 dark:text-white/70">
        If SafeWall merges with or is acquired by another company, your information may be transferred as part of the business transaction.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">5. Data Security</h2>
      <div className="flex items-center space-x-2 mb-4">
        <Lock className="h-5 w-5 text-brand-blue" />
        <p className="text-brand-dark/70 dark:text-white/70">Encryption for sensitive information</p>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <Lock className="h-5 w-5 text-brand-blue" />
        <p className="text-brand-dark/70 dark:text-white/70">Secure data storage & access controls</p>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <Lock className="h-5 w-5 text-brand-blue" />
        <p className="text-brand-dark/70 dark:text-white/70">Regular security audits & monitoring</p>
      </div>
      <p className="text-brand-dark/70 dark:text-white/70 mt-4">
        However, no online system is 100% secure. We advise users to protect their personal devices and use strong passwords.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">6. Your Privacy Rights (Canada)</h2>
      <p className="text-brand-dark/70 dark:text-white/70">Under PIPEDA, you have the right to:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Access your personal data – Request a copy of your stored information</li>
        <li>Correct inaccuracies – Update or amend incorrect details</li>
        <li>Withdraw consent – Stop receiving marketing communications</li>
        <li>Request deletion – Ask us to erase your personal data (subject to legal limitations)</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">7. Cookies and Tracking Technologies</h2>
      <p className="text-brand-dark/70 dark:text-white/70">We use cookies and similar tracking tools to improve our website experience.</p>
      <p className="text-brand-dark/70 dark:text-white/70 mt-4">Types of Cookies We Use:</p>
      <ul className="list-disc pl-6 text-brand-dark/70 dark:text-white/70">
        <li>Essential Cookies – Required for website functionality</li>
        <li>Analytics Cookies – Track usage patterns (Google Analytics)</li>
        <li>Marketing Cookies – (Used only with user consent)</li>
      </ul>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">8. Third-Party Links</h2>
      <p className="text-brand-dark/70 dark:text-white/70">
        Our website may link to third-party sites (e.g., partner services, social media). We are not responsible for their privacy policies. We recommend reviewing their policies before sharing data.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">9. Children's Privacy</h2>
      <p className="text-brand-dark/70 dark:text-white/70">
        Our services are not intended for children under 13. We do not knowingly collect their data. If you believe we have received such data, contact us, and we will delete it.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">10. Data Storage and Retention</h2>
      <p className="text-brand-dark/70 dark:text-white/70">
        We store personal data only as long as necessary for business and legal purposes. If data is no longer required, we securely delete or anonymize it.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">11. Changes to This Privacy Policy</h2>
      <p className="text-brand-dark/70 dark:text-white/70">
        We may update this policy as laws change. If significant changes occur, we will notify users on our website.
      </p>

      <h2 className="text-2xl font-bold text-brand-dark dark:text-white mt-12 mb-6 font-montserrat">12. Contact Us</h2>
      <p className="text-brand-dark/70 dark:text-white/70">If you have any questions about this Privacy Policy, contact us at:</p>
      
      <div className="flex items-center mt-4 text-brand-dark/70 dark:text-white/70">
        <Mail className="h-5 w-5 mr-2 text-brand-blue" />
        <a href="mailto:privacy@safewall.net" className="hover:text-brand-blue transition">
          privacy@safewall.net
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

export default PrivacyContent;