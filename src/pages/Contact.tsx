import React, { useState } from 'react';
import { Mail, Clock, Shield, Globe, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsentCheckboxes from '../components/ConsentCheckboxes';

function Contact() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      privacyAccepted,
      termsAccepted,
      // Additional fields for email template
      submissionDate: formattedDate,
      submissionTime: formattedTime,
      // Email template settings
      emailSubject: 'Your SafeWall Contact Request Confirmation',
      emailTemplate: 'contact-confirmation',
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
            <Shield className="h-16 w-16 text-brand-green mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-4 font-montserrat">
              Thank You for Contacting Us!
            </h2>
            <p className="text-lg text-brand-dark/70 dark:text-white/70 mb-8">
              We've received your message. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="bg-brand-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Send Another Message
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
              Get in Touch
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Ready to strengthen your security? Our experts are here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 font-montserrat text-brand-dark dark:text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
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
                    Email Address
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
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-brand-grey dark:border-white/10 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white dark:bg-brand-dark/50 text-brand-dark dark:text-white"
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
                  >
                    <option value="">Select a service</option>
                    <option value="firewall">Firewall Solutions</option>
                    <option value="pentesting">Penetration Testing</option>
                    <option value="managed">Managed Security</option>
                    <option value="cloud">Cloud Security</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-brand-grey dark:border-white/10 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white dark:bg-brand-dark/50 text-brand-dark dark:text-white"
                    required
                  ></textarea>
                </div>

                <ConsentCheckboxes
                  onPrivacyChange={setPrivacyAccepted}
                  onTermsChange={setTermsAccepted}
                />

                <button
                  type="submit"
                  disabled={isSubmitting || !privacyAccepted || !termsAccepted}
                  className="w-full bg-brand-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 font-montserrat text-brand-dark dark:text-white">About SafeWall</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-brand-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-brand-dark dark:text-white">Industry Leaders</h3>
                    <p className="text-brand-dark/70 dark:text-white/70">
                      Trusted cybersecurity solutions provider with over a decade of experience protecting businesses worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-brand-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-brand-dark dark:text-white">Global Coverage</h3>
                    <p className="text-brand-dark/70 dark:text-white/70">
                      24/7 security monitoring and support for businesses across all time zones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-6 w-6 text-brand-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-brand-dark dark:text-white">Expert Team</h3>
                    <p className="text-brand-dark/70 dark:text-white/70">
                      Certified security professionals with extensive experience in enterprise cybersecurity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="h-6 w-6 text-brand-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-brand-dark dark:text-white">Certifications</h3>
                    <p className="text-brand-dark/70 dark:text-white/70">
                      ISO 27001 certified, with compliance expertise in GDPR, HIPAA, and PCI DSS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-brand-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-brand-dark dark:text-white">Response Time</h3>
                    <p className="text-brand-dark/70 dark:text-white/70">
                      We respond to all inquiries within 24 hours, with immediate response for urgent security matters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-brand-grey dark:bg-black/30 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-brand-dark dark:text-white">Need Immediate Assistance?</h3>
                <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                  For urgent security concerns, use our priority contact form or schedule an emergency consultation.
                </p>
                <Link
                  to="/consultation"
                  className="inline-block bg-brand-green text-brand-dark px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
                >
                  Schedule Emergency Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;