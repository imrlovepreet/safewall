import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Shield, CheckCircle } from 'lucide-react';
import ConsentCheckboxes from '../components/ConsentCheckboxes';

function Consultation() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Get current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      consent: formData.get('consent') === 'on',
      privacyAccepted,
      termsAccepted,
      // Additional fields for email template
      fullName: `${formData.get('firstName')} ${formData.get('lastName')}`,
      submissionDate: formattedDate,
      submissionTime: formattedTime,
      // Email template settings
      emailSubject: 'Your SafeWall Consultation Request Confirmation',
      emailTemplate: 'consultation-confirmation',
      sendEmail: true
    };

    try {
      const response = await fetch('https://hook.us2.make.com/w9un7j1upsj8e5e5v5btrytlbvwwkmg5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setPrivacyAccepted(false);
        setTermsAccepted(false);
        setSubmitSuccess(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-brand-green mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-4 font-montserrat">
              Thank You for Your Interest!
            </h2>
            <p className="text-lg text-brand-dark/70 dark:text-white/70 mb-8">
              We've received your consultation request. Our team will contact you within 24 hours to schedule your strategy call.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="bg-brand-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Request Another Consultation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Free Security Consultation
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Schedule your complimentary consultation with our cybersecurity experts
            </p>
          </div>
        </div>
      </div>

      {/* Consultation Form Section */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-brand-dark/50 rounded-xl shadow-lg p-8 border border-brand-grey/10 dark:border-white/10">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-12 w-12 text-brand-blue" />
              </div>
              <h2 className="text-2xl font-bold text-center text-brand-dark dark:text-white mb-4 font-montserrat">
                Book Your Free Consultation
              </h2>
              <p className="text-center text-brand-dark/70 dark:text-white/70">
                Get expert insights into your security needs with our 15-minute strategy call
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-brand-grey dark:border-white/10 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white dark:bg-brand-dark/50 text-brand-dark dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-brand-grey dark:border-white/10 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white dark:bg-brand-dark/50 text-brand-dark dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-brand-grey dark:border-white/10 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white dark:bg-brand-dark/50 text-brand-dark dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-brand-grey dark:border-white/10 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white dark:bg-brand-dark/50 text-brand-dark dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-brand-grey dark:border-white/10 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white dark:bg-brand-dark/50 text-brand-dark dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-brand-grey dark:border-white/10 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white dark:bg-brand-dark/50 text-brand-dark dark:text-white"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="firewall">Firewall Solutions</option>
                  <option value="pentesting">Penetration Testing</option>
                  <option value="managed">Managed Security</option>
                  <option value="cloud">Cloud Security</option>
                  <option value="vpn">VPN & Zero Trust</option>
                  <option value="compliance">Compliance & Risk Assessment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-brand-grey dark:border-white/10 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white dark:bg-brand-dark/50 text-brand-dark dark:text-white"
                  placeholder="Tell us about your security needs..."
                ></textarea>
              </div>

              <ConsentCheckboxes
                onPrivacyChange={setPrivacyAccepted}
                onTermsChange={setTermsAccepted}
              />

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="mt-1 h-4 w-4 text-brand-blue border-brand-grey dark:border-white/20 rounded"
                  defaultChecked
                />
                <label htmlFor="consent" className="ml-2 text-sm text-brand-dark/70 dark:text-white/70">
                  I agree to receive communications from SafeWall. You can unsubscribe at any time.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !privacyAccepted || !termsAccepted}
                className="w-full bg-brand-green text-brand-dark px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Calendar className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-brand-grey dark:border-white/10 flex items-start">
              <Clock className="h-5 w-5 text-brand-blue mt-1" />
              <p className="ml-3 text-sm text-brand-dark/70 dark:text-white/70">
                Our team will contact you within 24 hours to confirm your consultation and schedule a time that works best for you.
              </p>
            </div>
          </div>

          {/* Calendly Widget */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center text-brand-dark dark:text-white mb-8 font-montserrat">
              Or Schedule Directly Using Our Calendar
            </h2>
            <div 
              className="calendly-inline-widget bg-white dark:bg-brand-dark/50 rounded-xl shadow-lg overflow-hidden" 
              data-url="https://calendly.com/safewall?hide_landing_page_details=1&hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;